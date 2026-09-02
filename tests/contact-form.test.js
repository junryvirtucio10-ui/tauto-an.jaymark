import test from "node:test";
import assert from "node:assert/strict";
import { CONTACT_DELIVERY_EMAIL, CONTACT_ENDPOINT, CONTACT_SERVICES, createContactPayload, submitContactDetails, validateContactDetails } from "../contact-form.js";

const validDetails = {
  name: "Alex Example",
  email: "alex+portfolio@example.com",
  service: "WordPress",
  message: "I need help improving a small business website.",
};

test("the delivery endpoint uses Jaymark's inbox", () => {
  assert.equal(CONTACT_DELIVERY_EMAIL, "jaymark.tautoan17@gmail.com");
  assert.equal(CONTACT_ENDPOINT, `https://formsubmit.co/ajax/${CONTACT_DELIVERY_EMAIL}`);
});

test("all available services accept a complete inquiry", () => {
  for (const service of CONTACT_SERVICES) {
    assert.deepEqual(validateContactDetails({ ...validDetails, service }), {});
  }
});

test("blank, invalid, and too-short input receive field-level errors", () => {
  const errors = validateContactDetails({ name: "   ", email: "not-an-email", service: "Unknown", message: "   Short   " });
  assert.deepEqual(Object.keys(errors), ["name", "email", "service", "message"]);
});

test("input length limits are enforced", () => {
  const errors = validateContactDetails({ ...validDetails, name: "a".repeat(81), email: `${"a".repeat(250)}@example.com`, message: "x".repeat(1501) });
  assert.deepEqual(Object.keys(errors), ["name", "email", "message"]);
  assert.deepEqual(validateContactDetails({ ...validDetails, name: "a".repeat(80), message: "x".repeat(1500) }), {});
});

test("the submission payload trims visitor details and sets the inquiry subject", () => {
  const details = { ...validDetails, name: "  Renée & Co  ", email: "  hello@example.com  ", service: "SEO & speed", message: "  Please review the mobile experience. ✨  " };
  const payload = createContactPayload(details, "https://jaymark.dev/contact");
  assert.equal(payload.name, "Renée & Co");
  assert.equal(payload.email, "hello@example.com");
  assert.equal(payload.message, "Please review the mobile experience. ✨");
  assert.equal(payload._subject, "SEO & speed project inquiry — Renée & Co");
  assert.equal(payload._honey, "");
  assert.equal(payload._url, "https://jaymark.dev/contact");
});

test("undecided visitors get a general website inquiry", () => {
  const payload = createContactPayload({ ...validDetails, service: "Not sure yet" });
  assert.equal(payload._subject, "Website project inquiry — Alex Example");
});

test("a successful provider response resolves the direct submission", async () => {
  let request;
  const fetchImpl = async (url, options) => {
    request = { url, options };
    return { ok: true, json: async () => ({ success: "true" }) };
  };

  await submitContactDetails(validDetails, { fetchImpl, pageUrl: "http://127.0.0.1:5173/" });
  assert.equal(request.url, CONTACT_ENDPOINT);
  assert.equal(request.options.method, "POST");
  assert.deepEqual(JSON.parse(request.options.body).message, validDetails.message);
  assert.equal(JSON.parse(request.options.body)._url, "http://127.0.0.1:5173/");
});

test("a rejected or invalid provider response reports a failed submission", async () => {
  const fetchImpl = async () => ({ ok: false, json: async () => ({ success: "false", message: "Unable to submit form" }) });
  await assert.rejects(submitContactDetails(validDetails, { fetchImpl }), /Unable to submit form/);
});

test("the provider's activation requirement is preserved for the interface", async () => {
  const fetchImpl = async () => ({ ok: true, json: async () => ({ success: "false", message: "This form needs Activation." }) });
  await assert.rejects(submitContactDetails(validDetails, { fetchImpl }), /needs Activation/);
});
