/* ═══════════════════════════════════════════════════
   STRESS ZÉRO, FINANCES HÉRO - INTERACTIVE FEATURES
   Vanilla JavaScript - No Dependencies
   ═══════════════════════════════════════════════════ */

(function () {
    'use strict';

    // ═══ SMOOTH SCROLL FOR ANCHOR LINKS ═══
    function initSmoothScroll() {
        // Handle smooth scroll for buttons with data-scroll-to attribute
        const scrollButtons = document.querySelectorAll('[data-scroll-to]');

        scrollButtons.forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('data-scroll-to');
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ═══ FORM VALIDATION & SUBMISSION ═══
    function initFormValidation() {
        const form = document.getElementById('email-form');

        if (!form) return;

        form.addEventListener('submit', function (e) {
            const prenomInput = document.getElementById('prenom');
            const emailInput = document.getElementById('email');

            // Reset previous error states
            prenomInput.style.borderColor = '';
            emailInput.style.borderColor = '';

            // Validate fields
            let isValid = true;

            if (!prenomInput.value.trim()) {
                prenomInput.style.borderColor = '#E74C3C';
                isValid = false;
            }

            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
                emailInput.style.borderColor = '#E74C3C';
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault(); // Only prevent if invalid
                // Shake animation for invalid form
                form.classList.add('shake');
                setTimeout(() => {
                    form.classList.remove('shake');
                }, 500);
            }
            // If valid, form will submit normally to Formspree
        });

        // Real-time validation on blur
        const inputs = form.querySelectorAll('input[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', function () {
                if (this.type === 'email') {
                    if (!this.value.trim() || !isValidEmail(this.value)) {
                        this.style.borderColor = '#E74C3C';
                    } else {
                        this.style.borderColor = '#27AE60';
                    }
                } else {
                    if (!this.value.trim()) {
                        this.style.borderColor = '#E74C3C';
                    } else {
                        this.style.borderColor = '#27AE60';
                    }
                }
            });

            // Reset border color on focus
            input.addEventListener('focus', function () {
                this.style.borderColor = '#2C5F7C';
            });
        });
    }

    // ═══ EMAIL VALIDATION HELPER ═══
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // ═══ SUCCESS MESSAGE ═══
    function showSuccessMessage(form) {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = '✅ Merci ! Vérifiez votre email pour accéder aux ressources gratuites.';
        successMessage.style.cssText = `
            background-color: #27AE60;
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            margin-top: 16px;
            text-align: center;
            font-weight: 600;
            animation: fadeInUp 0.5s ease;
        `;

        form.parentNode.insertBefore(successMessage, form.nextSibling);
        form.style.display = 'none';

        // Auto-remove after 5 seconds
        setTimeout(() => {
            successMessage.style.opacity = '0';
            setTimeout(() => {
                successMessage.remove();
            }, 500);
        }, 5000);
    }

    // ═══ INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS ═══
    function initScrollAnimations() {
        const sections = document.querySelectorAll('section');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optionally unobserve after animation to save resources
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // ═══ LAZY LOAD IMAGES ═══
    function initLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    // ═══ TRACK EXTERNAL LINK CLICKS (for analytics) ═══
    function initLinkTracking() {
        const externalLinks = document.querySelectorAll('a[href^="http"]');

        externalLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                const url = this.href;
                const text = this.textContent.trim();

                // Send to Google Analytics if available
                if (typeof gtag === 'function') {
                    gtag('event', 'click', {
                        'event_category': 'External Link',
                        'event_label': text,
                        'value': url
                    });
                }

                // Log to console for debugging
                console.log('External link clicked:', { url, text });
            });
        });
    }

    // ═══ PERFORMANCE: DEBOUNCE HELPER ═══
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ═══ SCROLL PROGRESS INDICATOR (Optional Enhancement) ═══
    function initScrollProgress() {
        // Create progress bar element
        const progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, #2C5F7C, #F4A261);
            z-index: 9999;
            transition: width 0.1s ease;
            width: 0%;
        `;
        document.body.appendChild(progressBar);

        // Update progress on scroll
        const updateProgress = debounce(() => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercentage = (scrollTop / documentHeight) * 100;

            progressBar.style.width = scrollPercentage + '%';
        }, 10);

        window.addEventListener('scroll', updateProgress);
        updateProgress(); // Initial call
    }

    // ═══ ADD SHAKE ANIMATION (for form validation) ═══
    function addShakeAnimation() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
                20%, 40%, 60%, 80% { transform: translateX(10px); }
            }
            .shake {
                animation: shake 0.5s;
            }
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ═══ INITIALIZE ALL FEATURES ON DOM READY ═══
    function init() {
        console.log('🚀 Stress Zéro Landing Page - Initialized');

        // Initialize all features
        initSmoothScroll();
        initFormValidation();
        initScrollAnimations();
        initLazyLoading();
        initLinkTracking();
        initScrollProgress();
        addShakeAnimation();

        // Make hero section visible immediately
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.classList.add('visible');
        }
    }

    // ═══ DOM READY ═══
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ═══ PAGE VISIBILITY API (pause animations when tab is hidden) ═══
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            console.log('Page hidden - pausing animations');
            // Pause any ongoing animations if needed
        } else {
            console.log('Page visible - resuming');
        }
    });

})();
