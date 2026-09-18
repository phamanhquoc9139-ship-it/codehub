/**
 * AI Teaching Assistant Chatbot (Mock Version)
 * Injects a floating chat bubble and window into the page.
 */

(function () {
    // Inject CSS for the chatbot
    const style = document.createElement('style');
    style.innerHTML = `
        /* Chatbot Container */
        #codehub-chatbot-container {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 9999;
            font-family: 'Inter', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            pointer-events: none;
        }

        /* Floating Bubble Button */
        #codehub-chatbot-trigger {
            position: relative;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6, #10b981);
            color: white;
            border: none;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            pointer-events: auto;
        }
        
        #codehub-chatbot-trigger:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 16px rgba(0,0,0,0.2);
        }

        #codehub-chatbot-trigger svg {
            width: 32px;
            height: 32px;
        }

        /* Notification Badge */
        .chatbot-badge {
            position: absolute;
            top: -2px;
            right: -2px;
            background-color: #ef4444;
            color: white;
            font-size: 11px;
            font-weight: bold;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid white;
        }

        /* Chat Window */
        #codehub-chatbot-window {
            width: 450px;
            height: 650px;
            max-height: calc(100vh - 100px);
            background-color: white;
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            margin-bottom: 16px;
            opacity: 0;
            pointer-events: none;
            transform: translateY(20px) scale(0.95);
            transform-origin: bottom right;
            transition: opacity 0.3s ease, transform 0.3s ease;
        }

        /* Dark Mode Support for Window */
        .dark #codehub-chatbot-window {
            background-color: #1f2937;
            border: 1px solid #374151;
        }

        #codehub-chatbot-window.open {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0) scale(1);
        }

        /* Header */
        .chatbot-header {
            background: linear-gradient(135deg, #3b82f6, #10b981);
            color: white;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .chatbot-header-info {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .chatbot-avatar {
            width: 40px;
            height: 40px;
            background-color: rgba(255,255,255,0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .chatbot-title {
            font-weight: 600;
            font-size: 16px;
            margin: 0;
            line-height: 1.2;
        }

        .chatbot-status {
            font-size: 12px;
            opacity: 0.9;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .status-dot {
            width: 8px;
            height: 8px;
            background-color: #4ade80;
            border-radius: 50%;
            display: inline-block;
        }

        .chatbot-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 4px;
            border-radius: 4px;
            opacity: 0.8;
            transition: opacity 0.2s, background-color 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .chatbot-close:hover {
            opacity: 1;
            background-color: rgba(255,255,255,0.1);
        }

        /* Messages Area */
        .chatbot-messages {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 16px;
            background-color: #f9fafb;
        }

        .dark .chatbot-messages {
            background-color: #111827;
        }

        .message {
            max-width: 85%;
            display: flex;
            flex-direction: column;
            opacity: 0;
            animation: fadeIn 0.3s forwards ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .message-bot {
            align-self: flex-start;
        }

        .message-user {
            align-self: flex-end;
        }

        .message-content {
            padding: 12px 16px;
            border-radius: 16px;
            font-size: 14px;
            line-height: 1.5;
            word-wrap: break-word;
        }

        .message-bot .message-content {
            background-color: white;
            color: #1f2937;
            border: 1px solid #e5e7eb;
            border-bottom-left-radius: 4px;
            box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .dark .message-bot .message-content {
            background-color: #374151;
            color: #f3f4f6;
            border-color: #4b5563;
        }

        .message-user .message-content {
            background-color: #3b82f6;
            color: white;
            border-bottom-right-radius: 4px;
            box-shadow: 0 1px 2px rgba(59,130,246,0.2);
        }

        /* Typing Indicator */
        .typing-indicator {
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 12px 16px;
            background-color: white;
            border: 1px solid #e5e7eb;
            border-radius: 16px;
            border-bottom-left-radius: 4px;
            align-self: flex-start;
            width: fit-content;
        }

        .dark .typing-indicator {
            background-color: #374151;
            border-color: #4b5563;
        }

        .typing-dot {
            width: 6px;
            height: 6px;
            background-color: #9ca3af;
            border-radius: 50%;
            animation: bounce 1.4s infinite ease-in-out both;
        }

        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
        }

        /* Input Area */
        .chatbot-input-container {
            padding: 16px;
            background-color: white;
            border-top: 1px solid #e5e7eb;
            display: flex;
            gap: 12px;
            align-items: flex-end;
        }

        .dark .chatbot-input-container {
            background-color: #1f2937;
            border-top-color: #374151;
        }

        .chatbot-input {
            flex: 1;
            min-height: 44px;
            max-height: 120px;
            border: 1px solid #d1d5db;
            border-radius: 24px;
            padding: 12px 16px;
            font-family: inherit;
            font-size: 14px;
            resize: none;
            outline: none;
            background-color: #f9fafb;
            color: #1f2937;
            transition: border-color 0.2s, box-shadow 0.2s;
            line-height: 1.4;
        }

        .chatbot-input:focus {
            border-color: #3b82f6;
            box-shadow: 0 0 0 2px rgba(59,130,246,0.2);
            background-color: white;
        }

        .dark .chatbot-input {
            background-color: #374151;
            border-color: #4b5563;
            color: #f3f4f6;
        }

        .dark .chatbot-input:focus {
            background-color: #111827;
        }

        .chatbot-send {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background-color: #3b82f6;
            color: white;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background-color 0.2s, transform 0.2s;
            flex-shrink: 0;
        }

        .chatbot-send:hover {
            background-color: #2563eb;
        }

        .chatbot-send:active {
            transform: scale(0.95);
        }

        .chatbot-send:disabled {
            background-color: #9ca3af;
            cursor: not-allowed;
            transform: none;
        }

        /* Responsive */
        @media (max-width: 640px) {
            #codehub-chatbot-window {
                width: calc(100vw - 32px);
                height: 500px;
            }
        }
    `;
    document.head.appendChild(style);

    // Initial greeting message
    const initialGreeting = "Xin chào! 👋 Mình là Trợ lý AI của CodeHub. Bạn cần hỗ trợ gì về bài học, lập trình hay âm nhạc/nhạc lý không?";

    // HTML Template
    const chatbotHTML = `
        <div id="codehub-chatbot-window">
            <div class="chatbot-header">
                <div class="chatbot-header-info">
                    <div class="chatbot-avatar">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 8V4H8"></path>
                            <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                            <path d="M2 14h2"></path>
                            <path d="M20 14h2"></path>
                            <path d="M15 13v2"></path>
                            <path d="M9 13v2"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 class="chatbot-title">CodeHub AI</h3>
                        <div class="chatbot-status">
                            <span class="status-dot"></span> Sẵn sàng
                        </div>
                    </div>
                </div>
                <button class="chatbot-close" id="chatbot-close-btn" aria-label="Đóng chat">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            
            <div class="chatbot-messages" id="chatbot-messages-container">
                <div class="message message-bot">
                    <div class="message-content">${initialGreeting}</div>
                </div>
            </div>
            
            <div class="chatbot-input-container">
                <textarea class="chatbot-input" id="chatbot-input-field" placeholder="Nhập tin nhắn..." rows="1"></textarea>
                <button class="chatbot-send" id="chatbot-send-btn" disabled>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform: translateX(1px) translateY(1px)">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </div>
        </div>
        
        <button id="codehub-chatbot-trigger" aria-label="Mở chat AI">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <div class="chatbot-badge" id="chatbot-badge">1</div>
        </button>
    `;

    // Inject into DOM
    const container = document.createElement('div');
    container.id = 'codehub-chatbot-container';
    container.innerHTML = chatbotHTML;
    document.body.appendChild(container);

    // DOM Elements
    const triggerBtn = document.getElementById('codehub-chatbot-trigger');
    const closeBtn = document.getElementById('chatbot-close-btn');
    const chatWindow = document.getElementById('codehub-chatbot-window');
    const unreadBadge = document.getElementById('chatbot-badge');
    const inputField = document.getElementById('chatbot-input-field');
    const sendBtn = document.getElementById('chatbot-send-btn');
    const messagesContainer = document.getElementById('chatbot-messages-container');

    let isOpen = false;
    let isTyping = false;

    // Toggle Chat Window
    function toggleChat() {
        isOpen = !isOpen;
        if (isOpen) {
            chatWindow.classList.add('open');
            unreadBadge.style.display = 'none'; // Hide badge when opened
            setTimeout(() => {
                inputField.focus();
                scrollToBottom();
            }, 300);
        } else {
            chatWindow.classList.remove('open');
        }
    }

    triggerBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    // Auto-resize textarea
    inputField.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';

        // Enable/disable send button based on input
        if (this.value.trim().length > 0) {
            sendBtn.removeAttribute('disabled');
        } else {
            sendBtn.setAttribute('disabled', 'true');
        }
    });

    // Handle Enter key to send (Shift+Enter for new line)
    inputField.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    sendBtn.addEventListener('click', sendMessage);

    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function addMessage(text, isUser = false) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${isUser ? 'message-user' : 'message-bot'}`;

        // Basic HTML formatting for bot responses
        const formattedText = text
            .replace(/\\n/g, '<br>')
            .replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')
            .replace(/`(.*?)`/g, '<code style="background:rgba(0,0,0,0.1);padding:2px 4px;border-radius:4px;font-family:monospace">$1</code>');

        msgDiv.innerHTML = `<div class="message-content">${formattedText}</div>`;
        messagesContainer.appendChild(msgDiv);
        scrollToBottom();
    }

    function showTypingIndicator() {
        isTyping = true;
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'chatbot-typing-indicator';
        typingDiv.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        messagesContainer.appendChild(typingDiv);
        scrollToBottom();
    }

    function hideTypingIndicator() {
        isTyping = false;
        const indicator = document.getElementById('chatbot-typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    // Mock AI Responses based on keywords
    // Gemini API settings
    const GEMINI_API_KEY = "AIzaSyDwFG3QSl3Bt8xegMedtIwQo09h16DCTZk"; // User provided API Key
    const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

    // Call real Gemini API
    async function callGeminiAPI(message) {
        if (GEMINI_API_KEY === "YOUR_API_KEY_HERE") {
            return "Vui lòng thêm API Key của Gemini vào file `scripts/chatbot.js` (dòng `GEMINI_API_KEY = ...`) để mình có thể suy nghĩ đa dạng hơn nhé! Hiện tại mình chưa được kết nối mạng thần kinh thực sự.";
        }

        try {
            const response = await fetch(GEMINI_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `Bạn là trợ lý giảng dạy AI cho nền tảng CodeHub. Nhiệm vụ của bạn là giải đáp các câu hỏi về lập trình (HTML, CSS, Python, C++, Tin học) và âm nhạc/nhạc lý (Piano). Hãy trả lời ngắn gọn, thân thiện, dễ hiểu, theo ngôn ngữ tiếng Việt. Học sinh vừa hỏi: "${message}"`
                        }]
                    }]
                })
            });

            if (!response.ok) {
                console.error("API Error Response:", await response.text());
                return "Xin lỗi, mình đang gặp sự cố khi kết nối tới máy chủ AI. Vui lòng thử lại sau.";
            }

            const data = await response.json();

            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                return data.candidates[0].content.parts[0].text;
            } else {
                return "Xin lỗi, mình không hiểu ý bạn lắm. Bạn có thể nói rõ hơn được không?";
            }

        } catch (error) {
            console.error("Error calling Gemini API:", error);
            return "Rất tiếc, đã có lỗi kết nối mạng xảy ra. Mình không thể phân tích câu hỏi của bạn lúc này.";
        }
    }

    async function sendMessage() {
        if (isTyping) return;

        const text = inputField.value.trim();
        if (text.length === 0) return;

        // Add user message
        addMessage(text, true);

        // Reset input
        inputField.value = '';
        inputField.style.height = 'auto';
        sendBtn.setAttribute('disabled', 'true');

        showTypingIndicator();

        const response = await callGeminiAPI(text);

        hideTypingIndicator();
        addMessage(response, false);

        // If window is closed while bot responded, show badge
        if (!isOpen) {
            unreadBadge.style.display = 'flex';
            let count = parseInt(unreadBadge.innerText || '0') + 1;
            unreadBadge.innerText = count.toString();
        }
    }
})();
