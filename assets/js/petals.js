/**
 * ==============================================================================
 * FLOATING FLOWER PETALS CANVAS ANIMATION ENGINE
 * File: js/petals.js
 * ==============================================================================
 * Simulates a continuous gentle shower of Indian wedding floral petals
 * (roses, marigolds, and pastel blues) drifting down the viewport using HTML5
 * Canvas 2D and sinusoidal physics.
 *
 * Features:
 *   - Procedural Bézier curve petal drawing for natural organic petal contours
 *   - Multi-axis physics: vertical gravity, horizontal sinusoidal oscillation,
 *     and rotational drift
 *   - Auto-resizing to viewport dimensions
 *   - Interactive toggle control in navbar to pause/resume animation
 * ==============================================================================
 */

'use strict';

(function () {
  // Retrieve the target canvas element
  const canvas = document.getElementById('petals-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Resize canvas when browser window dimensions change
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  /* ============================================================================
   * PETAL COLOR PALETTES
   * Traditional Indian Wedding Florals:
   *   - Rose Pink (Gulab)
   *   - Auspicious Marigold (Genda)
   *   - Theme Dusty Blue
   *   - Jasmine Cream / Soft Pearl
   * ============================================================================
   */
  const petalColors = [
    { fill: 'rgba(235, 120, 150, 0.70)', stroke: 'rgba(200, 80, 110, 0.40)' }, // Rose Pink
    { fill: 'rgba(255, 180, 70, 0.75)',  stroke: 'rgba(230, 140, 30, 0.40)' }, // Marigold Orange
    { fill: 'rgba(143, 174, 217, 0.65)', stroke: 'rgba(100, 134, 190, 0.40)' }, // Theme Pastel Blue
    { fill: 'rgba(255, 235, 245, 0.80)', stroke: 'rgba(230, 190, 210, 0.40)' }  // Jasmine Cream
  ];

  /**
   * Represents an individual falling floral petal with its own physics state.
   */
  class Petal {
    constructor() {
      this.reset(true);
    }

    /**
     * Initializes or re-spawns the petal with randomized properties.
     * @param {boolean} [initial=false] - Whether this is the initial page load spawn
     */
    reset(initial = false) {
      this.x = Math.random() * width;
      // On initial spawn, distribute across the screen; on reset, start above the viewport
      this.y = initial ? Math.random() * height : -20 - Math.random() * 50;
      this.size = 10 + Math.random() * 14;
      this.speedY = 1 + Math.random() * 1.8;
      this.speedX = -0.5 + Math.random() * 1.5;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.03;
      this.oscillationSpeed = 0.02 + Math.random() * 0.03;
      this.step = Math.random() * 100;
      this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
    }

    /**
     * Updates petal position, drift oscillation, and rotation for each frame.
     */
    update() {
      this.step += this.oscillationSpeed;
      this.x += Math.sin(this.step) * 1.2 + this.speedX;
      this.y += this.speedY;
      this.rotation += this.rotationSpeed;

      // Wrap around or re-spawn when moving beyond the viewport boundaries
      if (this.y > height + 30 || this.x < -30 || this.x > width + 30) {
        this.reset();
      }
    }

    /**
     * Renders the organic petal shape onto the canvas using dual Bézier curves.
     */
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);

      // Draw petal shape via smooth cubic curves
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(this.size / 2, -this.size / 2, this.size, -this.size / 4, this.size / 2, this.size);
      ctx.bezierCurveTo(0, this.size / 2, -this.size / 2, -this.size / 2, 0, 0);

      ctx.fillStyle = this.color.fill;
      ctx.fill();
      ctx.strokeStyle = this.color.stroke;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    }
  }

  // Instantiate particle pool
  const petals = [];
  const petalCount = 35; // Optimum balance of visual density & 60fps performance

  for (let i = 0; i < petalCount; i++) {
    petals.push(new Petal());
  }

  let animationActive = true;
  let animationFrameId = null;

  /**
   * Main render loop driven by requestAnimationFrame.
   */
  function animate() {
    if (!animationActive) return;
    ctx.clearRect(0, 0, width, height);

    petals.forEach((petal) => {
      petal.update();
      petal.draw();
    });

    animationFrameId = requestAnimationFrame(animate);
  }

  // Start initial animation loop
  animate();

  /* ============================================================================
   * INTERACTIVE TOGGLE BUTTON LOGIC
   * Allows the guest to pause/resume petal animations via the navbar button.
   * ============================================================================
   */
  const petalToggleBtn = document.getElementById('petal-toggle');
  if (petalToggleBtn) {
    petalToggleBtn.addEventListener('click', () => {
      animationActive = !animationActive;

      if (animationActive) {
        canvas.style.display = 'block';
        petalToggleBtn.style.opacity = '1';
        petalToggleBtn.setAttribute('title', 'Pause Falling Petals');
        animate();
      } else {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        ctx.clearRect(0, 0, width, height);
        canvas.style.display = 'none';
        petalToggleBtn.style.opacity = '0.5';
        petalToggleBtn.setAttribute('title', 'Resume Falling Petals');
      }
    });
  }
})();
