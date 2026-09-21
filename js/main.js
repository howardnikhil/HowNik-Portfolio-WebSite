/**
 * HOWNIK.IN — MAIN APPLICATION CONTROLLER
 * Howard Nikhil · Entrepreneur · Engineer · Technology Builder
 * Controls: Themes, Interactive Modals, Mobile Nav, Lightbox, Forms
 */

(function () {
  'use strict';

  // --- 1. THEME CONTROLLER & PERSISTENCE ---
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const htmlRoot = document.documentElement;

  // Retrieve saved preference or default to dark
  function getPreferredTheme() {
    const saved = localStorage.getItem('hownik_theme');
    if (saved) return saved;
    // Default to dark as explicitly mandated
    return 'dark';
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      htmlRoot.setAttribute('data-theme', 'light');
    } else {
      htmlRoot.removeAttribute('data-theme');
    }
    localStorage.setItem('hownik_theme', theme);
  }

  // Apply immediately
  applyTheme(getPreferredTheme());

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = htmlRoot.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      applyTheme(next);
    });
  });

  // --- 2. MOBILE NAVIGATION DRAWER ---
  const mobileToggleBtn = document.querySelector('.mobile-toggle-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggleBtn && navMenu) {
    function toggleMobileMenu() {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggleBtn.classList.toggle('open');
      mobileToggleBtn.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    function closeMobileMenu() {
      navMenu.classList.remove('open');
      mobileToggleBtn.classList.remove('open');
      mobileToggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    mobileToggleBtn.addEventListener('click', toggleMobileMenu);

    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close on click outside if open
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && 
          !navMenu.contains(e.target) && 
          !mobileToggleBtn.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  // --- 3. INTERACTIVE RESUME MODAL ---
  const resumeModal = document.getElementById('resume-modal');
  const resumeOpenBtns = document.querySelectorAll('[data-open-resume]');
  const resumeCloseBtns = document.querySelectorAll('[data-close-resume]');
  const resumePrintBtn = document.querySelector('[data-print-resume]');
  let lastFocusedElement = null;

  function openResumeModal() {
    if (!resumeModal) return;
    lastFocusedElement = document.activeElement;
    resumeModal.classList.add('open');
    resumeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus the close button for accessibility
    const closeBtn = resumeModal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeResumeModal() {
    if (!resumeModal) return;
    resumeModal.classList.remove('open');
    resumeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  resumeOpenBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openResumeModal();
  }));

  resumeCloseBtns.forEach(btn => btn.addEventListener('click', closeResumeModal));

  if (resumePrintBtn) {
    resumePrintBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // --- 4. CERTIFICATE LIGHTBOX MODAL ---
  const lightboxModal = document.getElementById('lightbox-modal');
  const certCards = document.querySelectorAll('[data-cert-preview]');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCloseBtns = document.querySelectorAll('[data-close-lightbox]');

  function openLightbox(imgSrc, title, desc) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = title;
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxDesc) lightboxDesc.textContent = desc;

    lightboxModal.classList.add('open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  certCards.forEach(card => {
    card.addEventListener('click', () => {
      const imgSrc = card.getAttribute('data-cert-img');
      const title = card.getAttribute('data-cert-title') || 'Certificate of Merit';
      const desc = card.getAttribute('data-cert-desc') || '';
      if (imgSrc) {
        openLightbox(imgSrc, title, desc);
      }
    });

    // Keyboard accessibility for cards
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  lightboxCloseBtns.forEach(btn => btn.addEventListener('click', closeLightbox));

  // --- 5. GLOBAL MODAL ESCAPE & BACKDROP DISMISSAL ---
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (resumeModal && resumeModal.classList.contains('open')) {
        closeResumeModal();
      }
      if (lightboxModal && lightboxModal.classList.contains('open')) {
        closeLightbox();
      }
    }
  });

  [resumeModal, lightboxModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        if (modal === resumeModal) closeResumeModal();
        if (modal === lightboxModal) closeLightbox();
      }
    });
  });

  // --- 6. "MORE EXPERIMENTS" TOGGLE ---
  const moreWorkToggle = document.getElementById('more-work-toggle');
  const moreWorkContainer = document.getElementById('more-work-container');

  if (moreWorkToggle && moreWorkContainer) {
    moreWorkToggle.addEventListener('click', () => {
      const isExpanded = moreWorkContainer.classList.toggle('expanded');
      moreWorkToggle.setAttribute('aria-expanded', isExpanded);

      const toggleText = moreWorkToggle.querySelector('.toggle-text');
      if (toggleText) {
        toggleText.textContent = isExpanded ? 'Collapse Experiments ▲' : 'Explore More Experiments (6) ▼';
      }
    });
  }

  // --- 7. CONTACT INTERACTIVE FORM ---
  const contactForm = document.getElementById('portfolio-contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('#contact-name').value.trim();
      const email = contactForm.querySelector('#contact-email').value.trim();
      const topic = contactForm.querySelector('#contact-topic').value;
      const message = contactForm.querySelector('#contact-message').value.trim();

      if (!name || !email || !message) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Please fill out all required fields with valid details.';
        return;
      }

      // Generate mailto link for direct static delivery
      const mailtoSubject = encodeURIComponent(`[Engineering Inquiry: ${topic}] from ${name}`);
      const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nDomain: ${topic}\n\nMessage:\n${message}`);
      const mailtoUrl = `mailto:howardnikhil95@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Open email client
      window.location.href = mailtoUrl;

      // Provide clear feedback
      formStatus.className = 'form-status success';
      formStatus.innerHTML = `✓ Ready! Direct transmission opened in your email client. Alternatively, write directly to <a href="mailto:howardnikhil95@gmail.com" style="text-decoration:underline; font-weight:600;">howardnikhil95@gmail.com</a>.`;
    });
  }
})();
