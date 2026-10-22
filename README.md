# EmpowerByData website

A responsive, single-page website starter for EmpowerByData, built with plain HTML, CSS and JavaScript. It is designed to be easy to edit in VS Code and deploy to GitHub Pages.

## What's included

- `index.html` — main landing page and all nine navigation destinations
- `css/empowerbydata.css` — shared responsive styling and design tokens
- `js/script.js` — mobile navigation, active-section navigation, form validation and Formspree submission
- `assets/favicon.svg` — simple brand favicon
- `privacy.html` and `terms.html` — editable policy-page starting points

No build tools, package installation or framework are required.

## 1. Run locally

1. Download and unzip the project.
2. Open the `empowerbydata-website` folder in VS Code.
3. Recommended: install the **Live Server** extension in VS Code.
4. Right-click `index.html` and choose **Open with Live Server**.
5. The site should open in your browser. You can also open `index.html` directly, but a local server is a better preview environment.

## 2. Before publishing

### Contact form (required)

The form uses Formspree so a static GitHub Pages site can receive enquiries without running its own backend.

1. Create an account at [Formspree](https://formspree.io/) and create a form.
2. Copy the form endpoint, which looks like `https://formspree.io/f/xxxxxxxx`.
3. In `index.html`, find:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with the real ID supplied by Formspree. Do not paste your account password or API secret into the website.
5. Submit a test enquiry from the live preview and confirm it arrives. Check spam/junk folders and any verification steps required by Formspree.
6. The setup reminder will hide automatically when a valid-looking endpoint is present. A real submission test is still necessary.

The browser-side form validation is a usability aid, not a security control. Configure spam protection and notification settings in Formspree.

### Replace placeholders

Search the project for these items and update them before launch:

- `hello@empowerbydata.example` — replace with your real business email.
- Social links — replace the generic LinkedIn and Facebook URLs with your real pages, or remove those links.
- Consultant illustration — replace with a professional photo if you want one. The current image is an original SVG illustration, not a real person.
- Privacy and terms — review and customise both templates for your business, actual data handling and applicable requirements.
- Insights — starter summaries are included and expandable. Review, edit and expand them to reflect your expertise.
- Case studies — clearly marked illustrative scenarios. Do not present them as completed client projects or real measured outcomes. Replace with permissioned, evidence-based case studies when available.
- Brand and service wording — adjust to match your actual offers and availability.

### Fonts and external requests

Google Fonts is used for Manrope and DM Sans. If you prefer no third-party font request, remove the Google Fonts `<link>` elements from `index.html` and rely on system fallback fonts.

## 3. Publish with GitHub Pages

1. Sign in to [GitHub](https://github.com/) and create a new repository, for example `empowerbydata-website`.
2. Upload the **contents** of this project folder to the repository root. `index.html` must be at the root, not nested inside another folder.
3. Commit the files to the default branch, usually `main`.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose branch `main` and folder `/(root)`, then save.
7. Wait for the Pages deployment to finish. GitHub will show the published URL in the Pages settings.
8. Open the published URL and test every navigation item, page link, mobile menu and the contact form.

GitHub Pages is static hosting. The included Formspree integration provides form delivery; it is not handled by GitHub Pages itself.

## 4. Connect a custom domain (optional)

- Register a domain with a domain registrar.
- In repository **Settings → Pages → Custom domain**, enter your domain and follow GitHub's current DNS instructions.
- Add the required DNS records at your registrar.
- Allow time for DNS and HTTPS provisioning. Enable **Enforce HTTPS** when it becomes available.
- Test both the root domain and `www` variant if you configure both.

Do not add a domain until you own/control it and have configured the DNS records.

## 5. Maintenance and quality checklist

- [ ] Check mobile, tablet and desktop layouts.
- [ ] Test keyboard navigation and visible focus indicators.
- [ ] Check all section links and external links.
- [ ] Submit a real test contact form and confirm delivery.
- [ ] Replace the example email and social links.
- [ ] Finalise privacy and terms pages.
- [ ] Label all illustrative content accurately.
- [ ] Add your own profile image and business details.
- [ ] Review page title, description and favicon.
- [ ] Check spelling, accessibility, performance and contrast before launch.

## Design system

- Deep navy: `#0D2545`
- Teal: `#00A3A3`
- Soft orange: `#F4A261`
- Background: `#F8FAFC`
- Text: `#1F2937`
- Type: Manrope headings, DM Sans body
- Responsive breakpoints: 1100px, 900px and 620px

## Notes

This is a static website starter, not legal advice or a guarantee of business outcomes. Review all claims, policy text and third-party integrations before publishing.
