/**
 * ==============================================================================
 * TRIYASA & TANMOY WEDDING INVITATION - CLIENT APPLICATION SCRIPT
 * File: js/app.js
 * ==============================================================================
 * This script powers all core user interactions across the wedding invitation:
 *   1. Real-time Live Countdown Timer (targeting December 12, 2026)
 *   2. Sticky Navbar, ScrollSpy Active Nav Highlighting & Mobile Drawer
 *   3. Intersection Observer Scroll Reveal Animations
 *   4. Filterable Photo Gallery & Accessible Lightbox Viewer
 *   5. Interactive RSVP Form Processing & Personalized Entry Pass Modal
 *   6. Dynamic Confetti Burst Canvas/DOM Animation Engine
 * ==============================================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================================
   * 1. REAL-TIME WEDDING COUNTDOWN TIMER
   * ============================================================================
   * Computes the remaining time between the current instant and the wedding
   * date (December 12, 2026 at 18:00:00 IST). Updates DOM elements every second.
   * ============================================================================
   */
  const weddingDate = new Date('December 12, 2026 18:00:00').getTime();

  /**
   * Calculates days, hours, minutes, and seconds remaining, updating DOM counters.
   */
  function updateCountdown() {
    const now = Date.now();
    const distance = weddingDate - now;

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('mins');
    const secsEl = document.getElementById('secs');

    // If wedding timestamp has already arrived or passed
    if (distance < 0) {
      if (daysEl) daysEl.textContent = '000';
      if (hoursEl) hoursEl.textContent = '00';
      if (minsEl) minsEl.textContent = '00';
      if (secsEl) secsEl.textContent = '00';
      return;
    }

    // Mathematical conversions from milliseconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Render formatted numbers with leading zeros
    if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
  }

  // Initial calculation and 1-second interval registration
  updateCountdown();
  setInterval(updateCountdown, 1000);


  /* ============================================================================
   * 2. NAVBAR SCROLL EFFECT, ACTIVE SCROLLSPY & MOBILE MENU
   * ============================================================================
   * Handles:
   *   - Sticky glassmorphic navbar background change on scroll
   *   - Dynamic active link highlighting (ScrollSpy)
   *   - Responsive mobile navigation drawer toggle and click-outside dismissal
   * ============================================================================
   */
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  const trackedSections = document.querySelectorAll('section[id]');

  /**
   * Highlights the navigation link corresponding to the section currently in view.
   */
  function updateActiveNavLink() {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Boundary condition: Highlight last section (e.g. RSVP) if reached page bottom
    if (window.scrollY + clientHeight >= scrollHeight - 60) {
      if (trackedSections.length > 0) {
        setActiveNav(trackedSections[trackedSections.length - 1].getAttribute('id'));
        return;
      }
    }

    let currentSectionId = '';
    const headerOffset = 140; // Navbar height + detection buffer

    // Check intersecting section boundaries
    trackedSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= headerOffset && rect.bottom > headerOffset) {
        currentSectionId = section.getAttribute('id');
      }
    });

    // Fallback for interstitial sections without direct IDs
    if (!currentSectionId && trackedSections.length > 0) {
      for (let i = trackedSections.length - 1; i >= 0; i--) {
        const rect = trackedSections[i].getBoundingClientRect();
        if (rect.top <= headerOffset) {
          currentSectionId = trackedSections[i].getAttribute('id');
          break;
        }
      }
      if (!currentSectionId) {
        currentSectionId = trackedSections[0].getAttribute('id');
      }
    }

    if (currentSectionId) {
      setActiveNav(currentSectionId);
    }
  }

  /**
   * Applies the .active CSS class to the matching navigation anchor.
   * @param {string} id - The section element ID
   */
  function setActiveNav(id) {
    navItems.forEach((link) => {
      if (link.getAttribute('href') === `#${id}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /**
   * Closes the mobile navigation menu drawer and resets hamburger icon/aria states.
   */
  function closeMobileMenu() {
    if (navLinks && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      if (mobileToggle) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.className = 'fas fa-bars';
        }
      }
    }
  }

  // Smooth mobile menu close and immediate active state upon clicking nav items
  navItems.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
      const targetId = link.getAttribute('href').replace('#', '');
      if (targetId) {
        setActiveNav(targetId);
      }
    });
  });

  // Window scroll handler: navbar styling and ScrollSpy update
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    updateActiveNavLink();
  }, { passive: true });

  // Initial update on page load
  updateActiveNavLink();

  // Mobile menu button toggle event
  if (mobileToggle) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      }
    });
  }

  // Close mobile navigation when clicking anywhere outside
  document.addEventListener('click', (e) => {
    if (navLinks && navLinks.classList.contains('active')) {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });

  // Reset mobile drawer if window expands beyond mobile/tablet breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  }, { passive: true });


  /* ============================================================================
   * 3. INTERSECTION OBSERVER - SCROLL REVEAL ANIMATIONS
   * ============================================================================
   * Uses IntersectionObserver to trigger smooth fade-and-slide entrance
   * animations on elements marked with class '.reveal' as they enter viewport.
   * ============================================================================
   */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Unobserve after activating to free performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for older browsers without IntersectionObserver support
    revealElements.forEach((el) => el.classList.add('active'));
  }


  /* ============================================================================
   * 4. GALLERY CATEGORY FILTERING & LIGHTBOX MODAL
   * ============================================================================
   * Handles:
   *   - Switching photo categories ('all', 'prewedding', 'ceremonies')
   *   - Fullscreen Lightbox viewing upon photo selection
   *   - Previous/Next navigation (buttons, keyboard arrows, and touch swipe)
   *   - Lightbox modal dismissal via close button, backdrop click, or Escape key
   * ============================================================================
   */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');

  let activeFilter = 'all';
  let currentLightboxIndex = 0;
  let switchTimer = null;

  /**
   * Returns gallery items currently visible under the active category filter.
   * @returns {HTMLElement[]}
   */
  function getVisibleGalleryItems() {
    return Array.from(galleryItems).filter(
      (item) => activeFilter === 'all' || item.dataset.category === activeFilter
    );
  }

  // Filter tab interactions
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update tab active states & ARIA attributes
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      activeFilter = btn.dataset.filter || 'all';

      // Filter gallery items by category
      galleryItems.forEach((item) => {
        if (activeFilter === 'all' || item.dataset.category === activeFilter) {
          item.style.display = 'block';
          setTimeout(() => (item.style.opacity = '1'), 50);
        } else {
          item.style.opacity = '0';
          setTimeout(() => (item.style.display = 'none'), 300);
        }
      });
    });
  });

  /**
   * Updates the lightbox image, caption, counter, and nav button visibility.
   * @param {number} index - Target index within the visible gallery items
   * @param {boolean} animate - Whether to play the image switch transition
   */
  function renderLightboxImage(index, animate = true) {
    if (!lightboxImg) return;
    const visibleItems = getVisibleGalleryItems();
    if (visibleItems.length === 0) return;

    currentLightboxIndex = (index + visibleItems.length) % visibleItems.length;
    const img = visibleItems[currentLightboxIndex].querySelector('img');
    if (!img) return;

    const applyImage = () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'Enlarged gallery photo display';
      if (lightboxCaption) {
        lightboxCaption.textContent = img.alt || '';
      }
      if (lightboxCounter) {
        lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${visibleItems.length}`;
      }
      const hideNav = visibleItems.length <= 1;
      if (lightboxPrev) lightboxPrev.hidden = hideNav;
      if (lightboxNext) lightboxNext.hidden = hideNav;
    };

    if (switchTimer) {
      clearTimeout(switchTimer);
      switchTimer = null;
    }

    if (animate) {
      lightboxImg.classList.add('is-switching');
      switchTimer = setTimeout(() => {
        applyImage();
        lightboxImg.classList.remove('is-switching');
      }, 150);
    } else {
      lightboxImg.classList.remove('is-switching');
      applyImage();
    }
  }

  /**
   * Opens the lightbox modal for the selected gallery item.
   * @param {HTMLElement} item - The clicked or activated .gallery-item
   */
  function openLightbox(item) {
    if (!lightboxModal || !lightboxImg) return;
    const visibleItems = getVisibleGalleryItems();
    const index = visibleItems.indexOf(item);
    renderLightboxImage(index >= 0 ? index : 0, false);
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  /**
   * Closes the lightbox modal and restores background scrolling.
   */
  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  /**
   * Navigates to the previous or next photo in the active gallery set.
   * @param {number} step - -1 for previous, +1 for next
   */
  function navigateLightbox(step) {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    renderLightboxImage(currentLightboxIndex + step, true);
  }

  // Open lightbox on gallery item click or Enter/Space keypress
  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      openLightbox(item);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(item);
      }
    });
  });

  // Lightbox navigation button handlers
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }

  // Lightbox close button handler
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  // Lightbox backdrop click & touch swipe handlers
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    let touchStartX = 0;
    lightboxModal.addEventListener('touchstart', (e) => {
      if (e.changedTouches && e.changedTouches.length > 0) {
        touchStartX = e.changedTouches[0].screenX;
      }
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      if (!lightboxModal.classList.contains('active')) return;
      if (e.changedTouches && e.changedTouches.length > 0) {
        const deltaX = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(deltaX) > 50) {
          navigateLightbox(deltaX > 0 ? -1 : 1);
        }
      }
    }, { passive: true });
  }

  // Lightbox keyboard navigation (Escape, ArrowLeft, ArrowRight)
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      navigateLightbox(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      navigateLightbox(1);
    }
  });


  /* ============================================================================
   * 5. RSVP FORM SUBMISSION & DIGITAL INVITATION PASS
   * ============================================================================
   * Handles:
   *   - Form input retrieval & validation
   *   - Populating the personalized digital admission pass
   *   - Modal display and celebration confetti generation
   * ============================================================================
   */
  const rsvpForm = document.getElementById('rsvp-form');
  const passModal = document.getElementById('pass-modal');
  const passName = document.getElementById('pass-name');
  const passGuests = document.getElementById('pass-guests');
  const passClose = document.getElementById('pass-close');

  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('guest-name');
      const guestsInput = document.getElementById('guest-count');

      const nameValue = nameInput ? nameInput.value.trim() : '';
      const guestsValue = guestsInput ? guestsInput.value : '2 Persons';

      // Fallback if name is empty
      if (passName) {
        passName.textContent = nameValue || 'Honored Guest';
      }
      if (passGuests) {
        passGuests.textContent = guestsValue;
      }

      // Show confirmed pass modal & reset form
      if (passModal) {
        passModal.classList.add('active');
      }
      rsvpForm.reset();

      // Trigger celebratory confetti burst
      triggerConfetti();
    });
  }

  // Pass modal close button handler
  if (passClose) {
    passClose.addEventListener('click', () => {
      if (passModal) passModal.classList.remove('active');
    });
  }

  // Pass modal backdrop click handler
  if (passModal) {
    passModal.addEventListener('click', (e) => {
      if (e.target === passModal) {
        passModal.classList.remove('active');
      }
    });
  }


  /* ============================================================================
   * 6. CELEBRATORY CONFETTI BURST ANIMATION
   * ============================================================================
   * Dynamically spawns 100 animated particle discs radiating outwards from the
   * viewport center with radial velocity, gravity, and opacity decay.
   * ============================================================================
   */
  function triggerConfetti() {
    const count = 100;
    const colors = ['#8faed9', '#d4af37', '#ffffff', '#e2eafd', '#f7c59f'];
    const originX = window.innerWidth / 2;
    const originY = window.innerHeight / 2;

    for (let i = 0; i < count; i++) {
      const conf = document.createElement('div');
      const size = Math.random() * 8 + 6;

      // Particle styling
      conf.style.position = 'fixed';
      conf.style.left = originX + 'px';
      conf.style.top = originY + 'px';
      conf.style.width = size + 'px';
      conf.style.height = size + 'px';
      conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      conf.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px'; // Mix of circles & rectangles
      conf.style.zIndex = '3500';
      conf.style.pointerEvents = 'none';
      document.body.appendChild(conf);

      // Trajectory and velocity vectors
      const angle = Math.random() * Math.PI * 2;
      const velocity = 8 + Math.random() * 14;
      const vx = Math.cos(angle) * velocity;
      let vy = Math.sin(angle) * velocity;

      let posX = originX;
      let posY = originY;
      let opacity = 1;

      // Animate particle step-by-step
      const anim = setInterval(() => {
        posX += vx;
        posY += vy;
        vy += 0.4; // Downward gravity acceleration
        opacity -= 0.022;

        conf.style.left = posX + 'px';
        conf.style.top = posY + 'px';
        conf.style.opacity = opacity;

        // Clean up when faded out or off-screen
        if (opacity <= 0 || posY > window.innerHeight + 50) {
          clearInterval(anim);
          conf.remove();
        }
      }, 20);
    }
  }

});
