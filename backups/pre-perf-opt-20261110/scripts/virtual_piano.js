/**
 * Virtual Piano Keyboard logic
 * Uses the Web Audio API to synthesize sounds.
 */

class VirtualPiano {
    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.masterGain = this.audioContext.createGain();
        this.masterGain.connect(this.audioContext.destination);
        this.masterGain.gain.value = 0.5; // Master volume

        // Map keys to frequencies (C4 to E5)
        this.notes = {
            'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13,
            'E4': 329.63, 'F4': 349.23, 'F#4': 369.99, 'G4': 392.00,
            'G#4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'B4': 493.88,
            'C5': 523.25, 'C#5': 554.37, 'D5': 587.33, 'D#5': 622.25,
            'E5': 659.25
        };

        // Map keyboard characters to notes
        this.keyMap = {
            'a': 'C4', 'w': 'C#4', 's': 'D4', 'e': 'D#4', 'd': 'E4',
            'f': 'F4', 't': 'F#4', 'g': 'G4', 'y': 'G#4', 'h': 'A4',
            'u': 'A#4', 'j': 'B4', 'k': 'C5', 'o': 'C#5', 'l': 'D5',
            'p': 'D#5', ';': 'E5'
        };

        this.activeOscillators = {};

        // Exercise Data
        this.exercises = {
            'warmup-5': {
                name: 'Khởi động 5 ngón',
                notes: ['C4', 'D4', 'E4', 'F4', 'G4', 'F4', 'E4', 'D4', 'C4']
            },
            'c-major': {
                name: 'Âm giai Đô Trưởng',
                notes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
            },
            'con-duong-xua': {
                name: 'Nhạc: Con Đường Xưa Em Đi',
                notes: ['E4', 'A4', 'B4', 'C5', 'B4', 'A4', 'C5', 'B4', 'A4', 'E4']
            },
            'con-duong-xua-dk': {
                name: 'Điệp Khúc: Con Đường Xưa Em Đi',
                notes: ['E5', 'E5', 'D5', 'D5', 'B4', 'D5', 'D5', 'C5', 'C5', 'A4', 'C5', 'C5', 'B4', 'A4', 'B4', 'G#4', 'E4']
            },
            've-day-mai-toc': {
                name: 'Nhạc: Về Đây Mái Tóc Người Thương',
                notes: ['A4', 'B4', 'C5', 'A4', 'E4', 'G#4', 'A4']
            },
            'vung-la-me-bay': {
                name: 'Nhạc: Vùng Lá Me Bay',
                notes: ['A4', 'B4', 'C5', 'A4', 'C5', 'D5', 'E5', 'D5', 'C5']
            },
            'tay-du-ky': {
                name: 'Nhạc: Tây Du Ký (Xin Hỏi Đường Ở Nơi Đâu)',
                notes: ['E4', 'A4', 'C5', 'B4', 'A4', 'G#4', 'A4', 'E4', 'G#4', 'A4']
            },
            'mong-hoa-sim': {
                name: 'Nhạc: Mộng Hoa Sim',
                notes: ['A4', 'B4', 'C5', 'A4', 'E4', 'E5', 'D5', 'C5', 'B4']
            },
            'cho-ngay-cuoi-em': {
                name: 'Nhạc: Chờ Ngày Cưới Em',
                notes: ['C4', 'E4', 'G4', 'E4', 'C4', 'D4', 'E4', 'D4', 'C4']
            },
            'cho-ngay-cuoi-em-dk': {
                name: 'Điệp Khúc: Chờ Ngày Cưới Em',
                notes: ['C5', 'C5', 'B4', 'A4', 'C5', 'B4', 'C5', 'A4', 'G4', 'A4', 'G4', 'F4', 'E4', 'D4', 'E4']
            }
        };
        this.currentExercise = null;
        this.currentStepIndex = 0;
        this.isExerciseActive = false;

        // Advanced Features
        this.sustainPedal = false;
        this.instrumentType = 'piano';

        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    playNote(note, keyElement) {
        if (!this.notes[note]) return;

        // Resume audio context if it's suspended (browsers require user interaction)
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }

        // Exercise mode checking
        if (this.isExerciseActive && this.currentExercise) {
            const expectedNote = this.currentExercise.notes[this.currentStepIndex];
            if (note === expectedNote) {
                // Correct note played
                this.advanceExercise();
            } else {
                // Wrong note played
                this.showErrorFeedback(keyElement);
                // Still play the wrong note sound so they hear it's wrong, but don't advance
            }
        }

        // Prevent playing the same note multiple times if holding the key
        if (this.activeOscillators[note]) return;

        // Visual feedback
        if (keyElement) {
            keyElement.classList.add('active');
        }

        const osc = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        // Configure sound based on instrument type
        if (this.instrumentType === 'synth') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(this.notes[note], this.audioContext.currentTime);

            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.8, this.audioContext.currentTime + 0.05); // slightly slower attack
            gainNode.gain.linearRampToValueAtTime(0.6, this.audioContext.currentTime + 0.2); // high sustain level
        } else if (this.instrumentType === 'organ') {
            osc.type = 'sine'; // Classic electric organ feel
            osc.frequency.setValueAtTime(this.notes[note], this.audioContext.currentTime);

            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.9, this.audioContext.currentTime + 0.02); // quick attack
            gainNode.gain.linearRampToValueAtTime(0.9, this.audioContext.currentTime + 0.1); // full sustain
        } else {
            // Piano-like sound setup
            osc.type = 'triangle'; // Mix of sine and triangle works well for simple piano
            osc.frequency.setValueAtTime(this.notes[note], this.audioContext.currentTime);

            // Attack, Decay, Sustain, Release (ADSR) envelope for piano feel
            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
            // Attack
            gainNode.gain.linearRampToValueAtTime(1, this.audioContext.currentTime + 0.02);
            // Decay to sustain level
            gainNode.gain.exponentialRampToValueAtTime(0.3, this.audioContext.currentTime + 0.3);
        }

        osc.connect(gainNode);
        gainNode.connect(this.masterGain);

        osc.start();

        this.activeOscillators[note] = {
            oscillator: osc,
            gainNode: gainNode,
            element: keyElement
        };
    }

    stopNote(note) {
        if (!this.activeOscillators[note]) return;

        const { oscillator, gainNode, element } = this.activeOscillators[note];

        // Visual feedback release
        if (element) {
            element.classList.remove('active');
        }

        // Release envelope
        gainNode.gain.cancelScheduledValues(this.audioContext.currentTime);
        gainNode.gain.setValueAtTime(gainNode.gain.value, this.audioContext.currentTime);

        if (this.instrumentType === 'organ') {
            // Organ stops immediately
            gainNode.gain.linearRampToValueAtTime(0.001, this.audioContext.currentTime + 0.05);
            oscillator.stop(this.audioContext.currentTime + 0.05);
        } else if (this.sustainPedal) {
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 3.0); // Sustain fade out
            oscillator.stop(this.audioContext.currentTime + 3.0);
        } else {
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.5); // Normal fade out
            oscillator.stop(this.audioContext.currentTime + 0.5);
        }

        delete this.activeOscillators[note];
    }

    setupEventListeners() {
        // Mouse/Touch events for UI keys
        const keys = document.querySelectorAll('.piano-key');

        keys.forEach(key => {
            const note = key.dataset.note;

            // Mouse events
            key.addEventListener('mousedown', () => this.playNote(note, key));
            key.addEventListener('mouseup', () => this.stopNote(note));
            key.addEventListener('mouseleave', () => this.stopNote(note));

            // Touch events for mobile
            key.addEventListener('touchstart', (e) => {
                e.preventDefault(); // Prevent scrolling while playing
                this.playNote(note, key);
            });
            key.addEventListener('touchend', (e) => {
                e.preventDefault();
                this.stopNote(note);
            });
            key.addEventListener('touchcancel', () => this.stopNote(note));
        });

        // Computer Keyboard events
        window.addEventListener('keydown', (e) => {
            // Ignore if typing in an input/textarea
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            // Sustain Pedal (Spacebar)
            if (e.code === 'Space') {
                e.preventDefault(); // Prevent page scroll
                if (!e.repeat) {
                    this.sustainPedal = true;
                    if (sustainToggle) sustainToggle.checked = true;
                }
                return;
            }

            const key = e.key.toLowerCase();
            if (this.keyMap[key]) {
                const note = this.keyMap[key];
                const keyElement = document.querySelector(`.piano-key[data-note="${note}"]`);
                this.playNote(note, keyElement);
            }
        });

        window.addEventListener('keyup', (e) => {
            if (e.code === 'Space') {
                this.sustainPedal = false;
                if (sustainToggle) sustainToggle.checked = false;
                return;
            }

            const key = e.key.toLowerCase();
            if (this.keyMap[key]) {
                const note = this.keyMap[key];
                this.stopNote(note);
            }
        });

        // Sustain UI Listener
        const sustainToggle = document.getElementById('sustain-pedal-toggle');
        if (sustainToggle) {
            sustainToggle.addEventListener('change', (e) => {
                this.sustainPedal = e.target.checked;
            });
        }

        // Instrument Selection Listener
        const instrumentSelects = document.querySelectorAll('#instrument-select');
        instrumentSelects.forEach(select => {
            select.addEventListener('change', (e) => {
                this.instrumentType = e.target.value;
            });
        });

        // Exercise UI Listeners
        const exerciseSelect = document.getElementById('exercise-select');
        const startBtn = document.getElementById('exercise-start-btn');

        if (exerciseSelect && startBtn) {
            startBtn.addEventListener('click', () => {
                if (this.isExerciseActive) {
                    this.stopExercise();
                    startBtn.textContent = 'Bắt đầu tập';
                    startBtn.classList.replace('bg-red-600', 'bg-indigo-600');
                    startBtn.classList.replace('hover:bg-red-700', 'hover:bg-indigo-700');
                } else {
                    const selectedId = exerciseSelect.value;
                    if (selectedId && this.exercises[selectedId]) {
                        this.startExercise(selectedId);
                        startBtn.textContent = 'Dừng tập';
                        startBtn.classList.replace('bg-indigo-600', 'bg-red-600');
                        startBtn.classList.replace('hover:bg-indigo-700', 'hover:bg-red-700');
                    }
                }
            });
        }
    }

    // --- Exercise Logic Methods ---

    startExercise(exerciseId) {
        this.currentExercise = this.exercises[exerciseId];
        this.currentStepIndex = 0;
        this.isExerciseActive = true;
        this.updateExerciseUI(`Bắt đầu: ${this.currentExercise.name}`);
        this.highlightTargetNote();
    }

    stopExercise() {
        this.isExerciseActive = false;
        this.currentExercise = null;
        this.currentStepIndex = 0;
        this.updateExerciseUI('Hãy chọn bài tập và nhấn Bắt đầu');
        this.clearAllHints();
    }

    advanceExercise() {
        this.currentStepIndex++;

        if (this.currentStepIndex >= this.currentExercise.notes.length) {
            // Exercise completed
            this.updateExerciseUI('🎉 Chúc mừng! Bạn đã hoàn thành bài tập.');
            this.clearAllHints();
            this.isExerciseActive = false;

            // Reset button
            const startBtn = document.getElementById('exercise-start-btn');
            if (startBtn) {
                startBtn.textContent = 'Trải nghiệm lại';
                startBtn.classList.replace('bg-red-600', 'bg-indigo-600');
                startBtn.classList.replace('hover:bg-red-700', 'hover:bg-indigo-700');
            }
        } else {
            // Move to next note
            this.updateExerciseUI(`Rất tốt! Nhấn phím tiếp theo: ${this.currentExercise.notes[this.currentStepIndex]}`);
            this.highlightTargetNote();
        }
    }

    highlightTargetNote() {
        this.clearAllHints();
        if (!this.isExerciseActive || !this.currentExercise) return;

        const targetNote = this.currentExercise.notes[this.currentStepIndex];
        const keyElement = document.querySelector(`.piano-key[data-note="${targetNote}"]`);

        if (keyElement) {
            keyElement.classList.add('hint');
        }
    }

    clearAllHints() {
        document.querySelectorAll('.piano-key.hint').forEach(el => el.classList.remove('hint'));
    }

    showErrorFeedback(keyElement) {
        if (!keyElement) return;
        keyElement.classList.add('error');
        setTimeout(() => {
            keyElement.classList.remove('error');
        }, 300); // Remove red glow after 300ms
        this.updateExerciseUI('Sai rồi, hãy thử lại phím đang sáng nhé!');
    }

    updateExerciseUI(message) {
        const statusEl = document.getElementById('exercise-status-text');
        if (statusEl) {
            statusEl.textContent = message;
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Only init if the piano container exists on the page
    if (document.querySelector('.piano-keyboard')) {
        new VirtualPiano();
    }
});
