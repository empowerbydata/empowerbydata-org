(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const year = document.querySelector("#current-year");
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  const setupNote = document.querySelector("#form-setup-note");

  if (year) year.textContent = new Date().getFullYear();

  function closeMenu() {
    if (!menuToggle || !nav) return;
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      nav.classList.toggle("open", open);
    });
    navLinks.forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });
    document.addEventListener("click", event => {
      if (!nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
  }

  // Highlight the current section in the navigation as visitors scroll.
  const sections = [...document.querySelectorAll("main section[id]")];
  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-25% 0px -60% 0px", threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }

  // Formspree handles delivery. Set your real endpoint in index.html before launch.
  if (form) {
    const endpoint = form.getAttribute("action") || "";
    const isConfigured = /^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/.test(endpoint);
    if (setupNote && isConfigured) setupNote.hidden = true;

    form.addEventListener("submit", async event => {
      event.preventDefault();
      status.className = "form-status";
      status.textContent = "";

      if (!form.reportValidity()) return;

      if (!isConfigured) {
        status.textContent = "The contact form is ready for setup, but it cannot send yet. Please configure your Formspree form ID using the README instructions.";
        status.className = "form-status visible error";
        if (setupNote) setupNote.hidden = false;
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      submitButton.disabled = true;
      submitButton.textContent = "Sending…";

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });
        if (!response.ok) throw new Error("Submission failed");
        form.reset();
        status.textContent = "Thanks for reaching out. Your enquiry has been sent successfully.";
        status.className = "form-status visible success";
      } catch (error) {
        status.textContent = "We couldn't send your message just now. Please try again later or contact us by email.";
        status.className = "form-status visible error";
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
      }
    });
  }
})();
