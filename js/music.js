/**
 * ==============================================================================
 * INDIAN WEDDING INSTRUMENTAL MUSIC SYNTHESIZER & CONTROLLER
 * File: js/music.js
 * ==============================================================================
 * Provides an elegant, zero-dependency background instrumental soundscape
 * utilizing the browser's native Web Audio API (AudioContext, OscillatorNode,
 * and GainNode).
 *
 * Characteristics:
 *   - Scale: Raag Yaman / Kalyan (Kalyani) - Auspicious evening Indian raga
 *   - Sound Design: Warm sine wave synthesis modeled after Indian bamboo flute
 *     (Bansuri) & ceremonial Shehnai
 *   - Articulation: Subtle micro-tonal pitch bend (Meend) and smooth envelope
 *   - Controls: Seamless Play/Pause toggle with animated audio pulse in navbar
 * ==============================================================================
 */

'use strict';

(function () {
  let audioCtx = null;
  let isPlaying = false;
  let timerId = null;

  // UI Button & Icon Elements
  const audioBtn = document.getElementById('audio-toggle');
  const audioIcon = document.getElementById('audio-icon');

  /* ============================================================================
   * MUSICAL FREQUENCIES (RAAG YAMAN SCALE)
   * Pentatonic / Heptatonic intervals in Hertz (Hz)
   * Sa (C4), Re (D4), Ga (E4), Teevra Ma (F#4), Pa (G4), Dha (A4), Ni (B4), Sa' (C5)
   * ============================================================================
   */
  const notes = [
    261.63, // 0: C4  (Sa)
    293.66, // 1: D4  (Re)
    329.63, // 2: E4  (Ga)
    369.99, // 3: F#4 (Teevra Ma - Characteristic Raag Yaman note)
    392.00, // 4: G4  (Pa)
    440.00, // 5: A4  (Dha)
    493.88, // 6: B4  (Ni)
    523.25, // 7: C5  (Taar Sa)
    587.33, // 8: D5  (Taar Re)
    659.25  // 9: E5  (Taar Ga)
  ];

  /**
   * Synthesizes and plays a single melodic note with gentle flute-like acoustics.
   *
   * @param {number} freq - Pitch frequency in Hertz
   * @param {number} [duration=1.8] - Total audible length in seconds
   */
  function playTone(freq, duration = 1.8) {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      // Flute / Shehnai pure tone synthesis
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      // Micro-tonal pitch inflection / Meend (characteristic of Indian classical music)
      osc.frequency.exponentialRampToValueAtTime(freq * 1.02, audioCtx.currentTime + 0.3);

      // Acoustic ADSR Envelope (Attack, Decay, Sustain, Release)
      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 0.2); // Soft attack
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration); // Gentle decay

      // Connect nodes: Oscillator -> Gain -> Destination Speakers
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      // Trigger note playback
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio playback exception:', e);
    }
  }

  /**
   * Starts the continuous Indian classical melody sequence.
   */
  function startMelody() {
    // Lazily instantiate AudioContext on user interaction to comply with autoplay policy
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isPlaying = true;

    // Update UI button appearance
    if (audioIcon) {
      audioIcon.className = 'fas fa-volume-up';
    }
    if (audioBtn) {
      audioBtn.classList.add('playing');
      audioBtn.setAttribute('title', 'Mute Background Music');
    }

    // Melodic pattern indices based on Raag Yaman phrases
    let noteIndex = 0;
    const melodySequence = [0, 2, 3, 4, 6, 7, 6, 4, 3, 2, 0, 4, 7, 8, 7, 4];

    // Play next tone in rhythm every 900ms
    timerId = setInterval(() => {
      if (!isPlaying) return;
      const note = notes[melodySequence[noteIndex % melodySequence.length]];
      playTone(note, 2.0);
      noteIndex++;
    }, 900);
  }

  /**
   * Stops audio playback and resets the navbar controls.
   */
  function stopMelody() {
    isPlaying = false;
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }

    // Update UI button appearance
    if (audioIcon) {
      audioIcon.className = 'fas fa-volume-mute';
    }
    if (audioBtn) {
      audioBtn.classList.remove('playing');
      audioBtn.setAttribute('title', 'Play Background Music');
    }
  }

  /* ============================================================================
   * AUDIO BUTTON EVENT HANDLER
   * ============================================================================
   */
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      if (isPlaying) {
        stopMelody();
      } else {
        startMelody();
      }
    });
  }
})();
