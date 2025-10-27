// Animation Controller for Mr Sleep Landing Page
(function() {
    'use strict';

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        console.log('🌙 Page loaded, initializing animations...');

        // Get all elements to animate
        const animateElements = document.querySelectorAll('.animate-element');
        console.log(`Found ${animateElements.length} elements to animate`);

        // Function to trigger animation for each element
        function animateElement(element, index) {
            const delay = parseInt(element.getAttribute('data-delay')) || 0;

            console.log(`Scheduling animation for element ${index + 1} with delay ${delay}ms`);

            setTimeout(() => {
                element.classList.add('animate-in');
                console.log(`Animating element ${index + 1}`);
            }, delay);
        }

        // Initialize animations
        function initAnimations() {
            // Small delay to ensure everything is rendered
            setTimeout(() => {
                animateElements.forEach((element, index) => {
                    animateElement(element, index);
                });
            }, 100);
        }

        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            // If user prefers reduced motion, show all elements immediately
            animateElements.forEach(element => {
                element.style.opacity = '1';
                element.style.transform = 'none';
            });
            console.log('Reduced motion preferred - showing all elements immediately');
        } else {
            // Start animations
            initAnimations();
        }

        // Update button text with span wrapper for hover effect
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton && !ctaButton.querySelector('span')) {
            const buttonText = ctaButton.textContent;
            ctaButton.innerHTML = `<span>${buttonText}</span>`;
        }

        // Log animation completion
        const totalAnimationTime = 3200 + 1000; // Last delay + animation duration
        setTimeout(() => {
            console.log('🌙 All animations completed!');
        }, totalAnimationTime);
    });
})();
