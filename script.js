import { submitContactDetails, validateContactDetails } from "./contact-form.js";

document.documentElement.classList.add("js-ready");

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const mobileMenuQuery = window.matchMedia("(max-width: 820px)");

const setHeaderState = () => header?.classList.toggle("is-scrolled", window.scrollY > 18);
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const scrollProgress = document.querySelector("[data-scroll-progress]");
let progressFrame = 0;

const updateScrollProgress = () => {
  progressFrame = 0;
  const availableScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = availableScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / availableScroll)) : 0;
  if (scrollProgress) scrollProgress.style.transform = `scaleX(${progress})`;
};

const requestProgressUpdate = () => {
  if (progressFrame) return;
  progressFrame = window.requestAnimationFrame(updateScrollProgress);
};

updateScrollProgress();
window.addEventListener("scroll", requestProgressUpdate, { passive: true });
window.addEventListener("resize", requestProgressUpdate);

const setMenu = (open, restoreFocus = false) => {
  const shouldOpen = Boolean(open && mobileMenuQuery.matches);
  menuToggle?.setAttribute("aria-expanded", String(shouldOpen));
  menuToggle?.setAttribute("aria-label", shouldOpen ? "Close navigation" : "Open navigation");
  siteNav?.classList.toggle("is-open", shouldOpen);
  siteNav?.toggleAttribute("inert", mobileMenuQuery.matches && !shouldOpen);
  document.body.classList.toggle("menu-open", shouldOpen);

  if (shouldOpen) window.requestAnimationFrame(() => siteNav?.querySelector("a")?.focus());
  else if (restoreFocus) menuToggle?.focus();
};

menuToggle?.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
siteNav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});
window.addEventListener("keydown", (event) => {
  if (menuToggle?.getAttribute("aria-expanded") !== "true") return;
  if (event.key === "Escape") {
    event.preventDefault();
    setMenu(false, true);
    return;
  }
  if (event.key !== "Tab") return;

  const menuFocusables = [menuToggle, ...siteNav.querySelectorAll("a")];
  const firstFocusable = menuFocusables[0];
  const lastFocusable = menuFocusables.at(-1);
  if (event.shiftKey && document.activeElement === firstFocusable) {
    event.preventDefault();
    lastFocusable.focus();
  } else if (!event.shiftKey && document.activeElement === lastFocusable) {
    event.preventDefault();
    firstFocusable.focus();
  }
});
mobileMenuQuery.addEventListener("change", () => setMenu(false));
setMenu(false);

const serviceExplorer = document.querySelector("[data-service-explorer]");
const serviceTabs = [...document.querySelectorAll("[data-service-tab]")];
const servicePanels = [...document.querySelectorAll("[data-service-panel]")];

const selectService = (selectedTab, moveFocus = false) => {
  const selectedService = selectedTab?.dataset.serviceTab;
  if (!selectedService) return;

  serviceTabs.forEach((tab) => {
    const active = tab === selectedTab;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });

  servicePanels.forEach((panel) => {
    panel.hidden = panel.dataset.servicePanel !== selectedService;
  });

  serviceExplorer?.setAttribute("data-active-service", selectedService);
  if (moveFocus) selectedTab.focus();
};

serviceTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectService(tab));
  tab.addEventListener("keydown", (event) => {
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % serviceTabs.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + serviceTabs.length) % serviceTabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = serviceTabs.length - 1;
    else return;

    event.preventDefault();
    selectService(serviceTabs[nextIndex], true);
  });
});

if (serviceTabs.length) selectService(serviceTabs.find((tab) => tab.getAttribute("aria-selected") === "true") || serviceTabs[0]);

const projectData = {
  nanas: {
    meta: "Selected Project 01 / Hospitality",
    title: "Nana’s Green Tea",
    summary: "A modern Japanese café presenting handcrafted matcha, hojicha, Japanese food, and desserts for its Las Vegas audience.",
    role: "Hospitality website",
    focus: "Matcha culture, menu discovery, and café visits",
    stack: "Las Vegas, Nevada",
    url: "https://nanasgreentealasvegas.com/",
    contribution: [
      "Introduces a global matcha brand with roots in Tokyo, Japan.",
      "Organizes the café story, signature drinks, food, desserts, and visit information.",
      "Balances an authentic Japanese identity with an approachable local experience.",
    ],
  },
  cm: {
    meta: "Selected Project 02 / Residential",
    title: "C&M Home Designs",
    summary: "A refined website for a luxury custom home builder and remodeling company focused on turning ambitious residential ideas into polished living spaces.",
    role: "Luxury home builder website",
    focus: "Custom builds, remodeling, and consultation",
    stack: "Las Vegas Valley, Nevada",
    url: "https://candmhomedesigns.com/",
    contribution: [
      "Positions the company around craftsmanship, sophistication, and bespoke design.",
      "Makes the distinction between custom home building and remodeling clear.",
      "Leads prospective clients toward a consultation without overwhelming the work.",
    ],
  },
  arrow: {
    meta: "Selected Project 03 / Restoration",
    title: "Arrow Masonry and Exteriors",
    summary: "A service-led website for an established masonry restoration company working with brick, concrete block, and stone façades across Chicagoland.",
    role: "Masonry restoration website",
    focus: "Tuckpointing, repair, and façade services",
    stack: "Chicago and neighboring areas",
    url: "https://www.tuckpointing.com/",
    contribution: [
      "Explains specialized services in practical language for property owners.",
      "Connects a long-standing local reputation to residential and commercial needs.",
      "Creates clear paths from restoration concerns to project consultation.",
    ],
  },
  avtint: {
    meta: "Selected Project 04 / Automotive",
    title: "AV Tint",
    summary: "A conversion-focused website for a Montclair automotive shop offering warranty-backed window tint, windshield tint, and car audio upgrades.",
    role: "Automotive service website",
    focus: "Tint, audio upgrades, quotes, and booking",
    stack: "Montclair, California",
    url: "https://tintav.com/",
    contribution: [
      "Presents tint and audio services around clarity, trust, and certified installation.",
      "Supports drivers comparing comfort, privacy, glare control, and sound upgrades.",
      "Keeps quote and contact actions visible throughout the service journey.",
    ],
  },
  purpleflare: {
    meta: "Selected Project 05 / Automotive",
    title: "Purple Flare Wraps",
    summary: "A high-energy automotive website for a Las Vegas shop specializing in vehicle wraps, paint protection film, tint, ceramic coatings, and branding.",
    role: "Automotive protection website",
    focus: "Wraps, PPF, tint, coatings, and quote generation",
    stack: "Las Vegas and Henderson, Nevada",
    url: "https://purpleflareagency.com/",
    contribution: [
      "Showcases visual transformation work while keeping services easy to scan.",
      "Communicates an in-house process for design, printing, and installation.",
      "Pairs bold project imagery with clear routes to the gallery and quote request.",
    ],
  },
};

const projectDialog = document.querySelector("[data-project-dialog]");
const dialogMeta = document.querySelector("[data-dialog-meta]");
const dialogTitle = document.querySelector("[data-dialog-title]");
const dialogSummary = document.querySelector("[data-dialog-summary]");
const dialogRole = document.querySelector("[data-dialog-role]");
const dialogFocus = document.querySelector("[data-dialog-focus]");
const dialogStack = document.querySelector("[data-dialog-stack]");
const dialogList = document.querySelector("[data-dialog-list]");
const dialogLink = document.querySelector("[data-dialog-link]");
const dialogClose = document.querySelector("[data-dialog-close]");
let dialogOpener = null;

const closeProjectDialog = () => {
  if (!projectDialog?.open) return;
  projectDialog.close();
};

document.querySelectorAll("[data-project-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projectData[button.dataset.projectOpen];
    if (!project || !projectDialog) return;

    dialogMeta.textContent = project.meta;
    dialogTitle.textContent = project.title;
    dialogSummary.textContent = project.summary;
    dialogRole.textContent = project.role;
    dialogFocus.textContent = project.focus;
    dialogStack.textContent = project.stack;
    dialogLink.href = project.url;
    dialogList.replaceChildren(
      ...project.contribution.map((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        return listItem;
      }),
    );

    dialogOpener = button;
    document.body.classList.add("dialog-open");
    projectDialog.showModal();
  });
});

dialogClose?.addEventListener("click", closeProjectDialog);
projectDialog?.addEventListener("click", (event) => {
  if (event.target === projectDialog) closeProjectDialog();
});
projectDialog?.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  dialogOpener?.focus();
});
projectDialog?.addEventListener("cancel", () => {
  document.body.classList.remove("dialog-open");
});

const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const current = link.getAttribute("href") === `#${entry.target.id}`;
          if (current) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-30% 0px -64%", threshold: 0 },
  );
  sections.forEach((section) => navObserver.observe(section));
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const revealTargets = [...document.querySelectorAll("[data-reveal]")];

if (!reducedMotion.matches && window.matchMedia("(pointer: fine)").matches) {
  const hero = document.querySelector(".hero");
  let pointerFrame = 0;
  let pointerX = 50;
  let pointerY = 50;

  const paintHeroPointer = () => {
    pointerFrame = 0;
    hero?.style.setProperty("--pointer-x", `${pointerX}%`);
    hero?.style.setProperty("--pointer-y", `${pointerY}%`);
  };

  hero?.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    pointerX = ((event.clientX - bounds.left) / bounds.width) * 100;
    pointerY = ((event.clientY - bounds.top) / bounds.height) * 100;
    if (!pointerFrame) pointerFrame = window.requestAnimationFrame(paintHeroPointer);
  });

  hero?.addEventListener("pointerleave", () => {
    pointerX = 50;
    pointerY = 50;
    if (!pointerFrame) pointerFrame = window.requestAnimationFrame(paintHeroPointer);
  });

  document.querySelectorAll(".project-image").forEach((projectImage) => {
    projectImage.addEventListener("pointermove", (event) => {
      const bounds = projectImage.getBoundingClientRect();
      projectImage.style.setProperty("--card-x", `${event.clientX - bounds.left}px`);
      projectImage.style.setProperty("--card-y", `${event.clientY - bounds.top}px`);
    });
  });

  serviceExplorer?.addEventListener("pointermove", (event) => {
    const bounds = serviceExplorer.getBoundingClientRect();
    serviceExplorer.style.setProperty("--service-x", `${event.clientX - bounds.left}px`);
    serviceExplorer.style.setProperty("--service-y", `${event.clientY - bounds.top}px`);
  });
}

if (!reducedMotion.matches && "IntersectionObserver" in window) {
  revealTargets.forEach((target, index) => {
    target.style.setProperty("--delay", `${(index % 2) * 90}ms`);
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10%", threshold: 0.08 },
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
  requestAnimationFrame(() => document.documentElement.classList.add("motion-ready"));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

document.querySelectorAll(".experience-details").forEach((details) => {
  details.addEventListener("toggle", requestProgressUpdate);
});

const contactForm = document.querySelector("[data-contact-form]");
if (contactForm) {
  const formStatus = contactForm.querySelector("[data-contact-status]");
  const statusTitle = contactForm.querySelector("[data-contact-status-title]");
  const statusDetail = contactForm.querySelector("[data-contact-status-detail]");
  const statusFallback = contactForm.querySelector("[data-contact-status-fallback]");
  const submitButton = contactForm.querySelector("[data-contact-submit]");
  const submitLabel = submitButton.querySelector("[data-contact-submit-label]");
  const messageField = contactForm.elements.namedItem("message");
  let attemptedSubmit = false;

  const getContactDetails = () => {
    const formData = new FormData(contactForm);
    return Object.fromEntries(["name", "email", "service", "message"].map((key) => [key, String(formData.get(key) || "")]));
  };

  const showContactErrors = (errors) => {
    ["name", "email", "service", "message"].forEach((key) => {
      contactForm.querySelector(`#contact-${key}-error`).textContent = errors[key] || "";
      contactForm.querySelectorAll(`[name="${key}"]`).forEach((field) => {
        if (errors[key]) field.setAttribute("aria-invalid", "true");
        else field.removeAttribute("aria-invalid");
      });
    });
  };

  const showContactStatus = (state, title, detail = "") => {
    formStatus.hidden = false;
    formStatus.dataset.state = state;
    statusTitle.textContent = title;
    statusDetail.textContent = detail;
    statusFallback.hidden = state !== "error";
  };

  const clearContactStatus = () => {
    if (formStatus.dataset.state === "sending") return;
    formStatus.hidden = true;
    formStatus.removeAttribute("data-state");
    statusTitle.textContent = "";
    statusDetail.textContent = "";
    statusFallback.hidden = true;
  };

  const setSubmitting = (submitting) => {
    submitButton.disabled = submitting;
    contactForm.toggleAttribute("aria-busy", submitting);
    submitLabel.textContent = submitting ? "Sending…" : "Send inquiry";
  };

  const contactPageUrl = `${window.location.origin}${window.location.pathname}`;

  const updateContactForm = () => {
    contactForm.querySelector("[data-message-count]").textContent = messageField.value.length.toLocaleString("en-US");
    clearContactStatus();
    if (attemptedSubmit) showContactErrors(validateContactDetails(getContactDetails()));
  };

  contactForm.addEventListener("input", (event) => {
    if (event.target.name) updateContactForm();
  });
  contactForm.addEventListener("change", (event) => {
    if (event.target.name) updateContactForm();
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    attemptedSubmit = true;
    const details = getContactDetails();
    const errors = validateContactDetails(details);
    showContactErrors(errors);
    if (Object.keys(errors).length) {
      showContactStatus("validation", "Check the highlighted fields.", "Complete the missing details, then send again.");
      contactForm.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    setSubmitting(true);
    showContactStatus("sending", "Sending your inquiry…", "This usually takes only a moment.");
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15_000);

    try {
      await submitContactDetails(details, { pageUrl: contactPageUrl, signal: controller.signal });
      contactForm.reset();
      attemptedSubmit = false;
      showContactErrors({});
      updateContactForm();
      showContactStatus("success", "Sent successfully.", `Thanks, ${details.name.trim()}. Jaymark will get back to you soon.`);
    } catch (error) {
      if (/needs activation/i.test(error?.message || "")) {
        showContactStatus("setup", "One-time setup required.", "Jaymark: open the FormSubmit activation email, click Activate Form, then send again.");
      } else if (/open this page through a web server/i.test(error?.message || "")) {
        showContactStatus("error", "This preview cannot send yet.", "Publish the site to its HTTPS address, then try the form again.");
      } else {
        showContactStatus("error", "Failed to send.", "Try again in a moment, or send an email directly.");
      }
    } finally {
      window.clearTimeout(timeoutId);
      setSubmitting(false);
      requestProgressUpdate();
    }
  });

  document.querySelectorAll("[data-contact-service]").forEach((link) => {
    link.addEventListener("click", () => {
      const choice = [...contactForm.querySelectorAll('[name="service"]')].find((input) => input.value === link.dataset.contactService);
      if (choice) {
        choice.checked = true;
        updateContactForm();
      }
    });
  });

  contactForm.noValidate = true;
  contactForm.hidden = false;
}

const cebuTime = document.querySelector("[data-cebu-time]");
const cebuTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Manila",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const updateCebuTime = () => {
  if (!cebuTime) return;
  const now = new Date();
  cebuTime.textContent = cebuTimeFormatter.format(now);
  cebuTime.dateTime = now.toISOString();
};

updateCebuTime();
window.setInterval(updateCebuTime, 30_000);

document.querySelectorAll("[data-year]").forEach((year) => {
  year.textContent = new Date().getFullYear();
});
