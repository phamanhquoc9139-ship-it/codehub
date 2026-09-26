/**
 * English Skills Interactive Module - CodeHub
 * Powers Reading, Listening, and Speaking interactive laboratories
 */

const EnglishSkills = {
    currentUtterance: null,
    currentPlayingId: null,

    /**
     * Speak text using Web Speech Synthesis
     * @param {string} text - text to speak
     * @param {number} rate - speed rate (0.8, 1.0, 1.2)
     * @param {string} buttonId - ID of the trigger button for UI status
     */
    speak: function (text, rate = 1.0, buttonId = null) {
        if (!('speechSynthesis' in window)) {
            alert('Trình duyệt của bạn không hỗ trợ Web Speech API. Vui lòng sử dụng Chrome, Edge hoặc Safari để nghe âm thanh.');
            return;
        }

        // If currently speaking this same text, stop it
        if (window.speechSynthesis.speaking && this.currentPlayingId === buttonId) {
            this.stop();
            return;
        }

        // Cancel previous speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = rate;
        utterance.pitch = 1.0;

        // Try to pick a natural English voice if available
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => (v.lang === 'en-US' || v.lang === 'en-GB') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Microsoft') || v.name.includes('Samantha')));
        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        this.currentUtterance = utterance;
        this.currentPlayingId = buttonId;

        // Update button state if provided
        if (buttonId) {
            const btn = document.getElementById(buttonId);
            if (btn) {
                btn.dataset.originalHtml = btn.dataset.originalHtml || btn.innerHTML;
                btn.innerHTML = '⏹️ Dừng phát';
                btn.classList.add('ring-2', 'ring-purple-400', 'bg-red-600', 'hover:bg-red-700');
            }
        }

        utterance.onend = () => {
            this.resetButton(buttonId);
            this.currentPlayingId = null;
        };

        utterance.onerror = () => {
            this.resetButton(buttonId);
            this.currentPlayingId = null;
        };

        window.speechSynthesis.speak(utterance);
    },

    /**
     * Stop any active speech
     */
    stop: function () {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            if (this.currentPlayingId) {
                this.resetButton(this.currentPlayingId);
                this.currentPlayingId = null;
            }
        }
    },

    resetButton: function (buttonId) {
        if (!buttonId) return;
        const btn = document.getElementById(buttonId);
        if (btn && btn.dataset.originalHtml) {
            btn.innerHTML = btn.dataset.originalHtml;
            btn.classList.remove('ring-2', 'ring-purple-400', 'bg-red-600', 'hover:bg-red-700');
        }
    },

    /**
     * Play element text content by ID
     */
    playFromElement: function (elementId, rateSelectId, buttonId) {
        const el = document.getElementById(elementId);
        if (!el) return;
        const text = el.innerText || el.textContent;
        let rate = 1.0;
        if (rateSelectId) {
            const rateSelect = document.getElementById(rateSelectId);
            if (rateSelect) rate = parseFloat(rateSelect.value) || 1.0;
        }
        this.speak(text.trim(), rate, buttonId);
    },

    /**
     * Toggle visibility of transcript
     */
    toggleTranscript: function (transcriptId, btnId) {
        const el = document.getElementById(transcriptId);
        const btn = document.getElementById(btnId);
        if (!el) return;

        if (el.classList.contains('hidden')) {
            el.classList.remove('hidden');
            if (btn) btn.innerHTML = '👁️ Ẩn Transcript Lời Thoại';
        } else {
            el.classList.add('hidden');
            if (btn) btn.innerHTML = '👁️ Xem Transcript Lời Thoại';
        }
    },

    /**
     * Interactive question checker for Reading/Listening
     */
    checkAnswer: function (questionName, correctVal, resultContainerId, explanation) {
        const radios = document.getElementsByName(questionName);
        let selectedVal = null;
        for (const r of radios) {
            if (r.checked) {
                selectedVal = r.value;
                break;
            }
        }

        const resultEl = document.getElementById(resultContainerId);
        if (!resultEl) return;

        if (selectedVal === null) {
            resultEl.className = 'mt-3 p-3 rounded-lg text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800';
            resultEl.innerHTML = '⚠️ Vui lòng chọn một đáp án trước khi kiểm tra!';
            resultEl.classList.remove('hidden');
            return;
        }

        if (selectedVal.toString() === correctVal.toString()) {
            resultEl.className = 'mt-3 p-3 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800';
            resultEl.innerHTML = '✅ <strong>Chính xác!</strong> ' + (explanation || 'Bạn đã chọn đáp án đúng.');
        } else {
            resultEl.className = 'mt-3 p-3 rounded-lg text-xs font-medium bg-rose-50 text-rose-800 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800';
            resultEl.innerHTML = '❌ <strong>Chưa chính xác.</strong> ' + (explanation || 'Hãy đọc hoặc nghe kỹ lại để tìm thông tin chính xác nhé!');
        }
        resultEl.classList.remove('hidden');
    }
};

// Ensure voices are loaded in browsers that load asynchronously
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };
}
