export const CONTACT_DELIVERY_EMAIL = "jaymark.tautoan17@gmail.com";
export const CONTACT_SERVICES = ["WordPress", "E-commerce", "SEO & speed", "Automation", "Not sure yet"];
export const CONTACT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_DELIVERY_EMAIL}`;

export function validateContactDetails({ name, email, service, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  else if (name.trim().length > 80) errors.name = "Please keep your name under 80 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) || email.trim().length > 254) {
    errors.email = "Please enter a valid email address.";
  }
  if (!CONTACT_SERVICES.includes(service)) errors.service = "Please choose a service, or select Not sure yet.";
  if (message.trim().length < 20) errors.message = "Please add a few details (at least 20 characters).";
  else if (message.trim().length > 1500) errors.message = "Please keep your message under 1,500 characters.";
  return errors;
}

export function createContactPayload({ name, email, service, message }, pageUrl = "") {
  const subject = `${service === "Not sure yet" ? "Website" : service} project inquiry — ${name.trim()}`;
  const payload = {
    name: name.trim(),
    email: email.trim(),
    service,
    message: message.trim(),
    _subject: subject,
    _template: "table",
    _captcha: "false",
    _honey: "",
  };

  if (/^https?:\/\//i.test(pageUrl)) payload._url = pageUrl;
  return payload;
}

export async function submitContactDetails(details, { fetchImpl = globalThis.fetch, pageUrl = "", signal } = {}) {
  if (typeof fetchImpl !== "function") throw new Error("Form submission is unavailable.");

  const response = await fetchImpl(CONTACT_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createContactPayload(details, pageUrl)),
    signal,
  });

  let result = null;
  try {
    result = await response.json();
  } catch {
    // An invalid response must not be presented to the visitor as a successful send.
  }

  const succeeded = response.ok && (result?.success === true || result?.success === "true");
  if (!succeeded) throw new Error(result?.message || "The message could not be sent.");
  return result;
}
