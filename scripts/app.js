// Application Logic

document.addEventListener('DOMContentLoaded', () => {
    console.log('CodeHub App Initialized');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Make course cards clickable
    const courseCards = document.querySelectorAll('#courses .cursor-pointer');
    courseCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'A') {
                const link = card.querySelector('a');
                if (link) {
                    window.location.href = link.href;
                }
            }
        });
    });

    // Tab System for Playground
    const tabPython = document.getElementById('tab-python');
    const tabWeb = document.getElementById('tab-web');
    const panePython = document.getElementById('pane-python');
    const paneWeb = document.getElementById('pane-web');

    if (tabPython && tabWeb && panePython && paneWeb) {
        tabPython.addEventListener('click', () => {
            tabPython.classList.add('border-primary', 'text-primary');
            tabPython.classList.remove('border-transparent', 'text-gray-500', 'dark:text-gray-400');
            tabWeb.classList.remove('border-primary', 'text-primary');
            tabWeb.classList.add('border-transparent', 'text-gray-500', 'dark:text-gray-400');
            panePython.classList.remove('hidden');
            paneWeb.classList.add('hidden');
        });

        tabWeb.addEventListener('click', () => {
            tabWeb.classList.add('border-primary', 'text-primary');
            tabWeb.classList.remove('border-transparent', 'text-gray-500', 'dark:text-gray-400');
            tabPython.classList.remove('border-primary', 'text-primary');
            tabPython.classList.add('border-transparent', 'text-gray-500', 'dark:text-gray-400');
            paneWeb.classList.remove('hidden');
            panePython.classList.add('hidden');
        });
    }

    // Integrated Playground Control
    const runButton = document.getElementById('run-button');
    const outputDiv = document.getElementById('code-output');
    const pythonEditor = document.getElementById('code-editor');
    const webEditor = document.getElementById('web-editor');
    const webPreview = document.getElementById('web-preview');

    let pyodideReady = false;
    let pyodide = null;

    async function initPyodide() {
        if (typeof loadPyodide === 'undefined') return;
        try {
            pyodide = await loadPyodide();
            pyodideReady = true;
            console.log('Pyodide is ready');
        } catch (err) {
            console.error('Failed to load Pyodide:', err);
        }
    }

    if (runButton) {
        initPyodide();

        // Support Tab key in editors
        [pythonEditor, webEditor].forEach(ed => {
            if (!ed) return;
            ed.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    e.preventDefault();
                    const selection = window.getSelection();
                    const range = selection.getRangeAt(0);
                    const tabNode = document.createTextNode('    ');
                    range.insertNode(tabNode);
                    range.setStartAfter(tabNode);
                    range.setEndAfter(tabNode);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            });
        });

        runButton.addEventListener('click', async () => {
            // Check which tab is active
            const isPythonActive = !panePython.classList.contains('hidden');

            if (isPythonActive) {
                // RUN PYTHON
                if (!pyodideReady) {
                    outputDiv.innerHTML = '<span class="text-yellow-400">Đang khởi tạo Python (vui lòng đợi vài giây)...</span>';
                    return;
                }

                pyodide.setStdin({
                    stdin: () => window.prompt("Nhập dữ liệu cho chương trình Python:")
                });

                let code = pythonEditor.innerText.replace(/\u00a0/g, ' ').trim();

                runButton.classList.add('opacity-75', 'cursor-not-allowed');
                const originalText = runButton.innerText;
                runButton.innerText = 'Đang chạy...';
                outputDiv.innerHTML = '<span class="text-blue-400">Đang thực thi...</span>';

                try {
                    let outputBuffer = "";
                    let errorBuffer = "";
                    const decoder = new TextDecoder();

                    pyodide.setStdout({
                        write: (data) => {
                            outputBuffer += typeof data === 'string' ? data : decoder.decode(data);
                            return data.length;
                        }
                    });
                    pyodide.setStderr({
                        write: (data) => {
                            errorBuffer += typeof data === 'string' ? data : decoder.decode(data);
                            return data.length;
                        }
                    });

                    const startTime = performance.now();
                    await pyodide.runPythonAsync(code);
                    const endTime = performance.now();
                    const executionTime = ((endTime - startTime) / 1000).toFixed(2);

                    if (errorBuffer) {
                        outputDiv.innerHTML = `<span class="text-red-500">Lỗi Python:<br>${errorBuffer.replace(/\n/g, '<br>')}</span>`;
                    } else {
                        let output = outputBuffer.trim() || 'Chương trình đã chạy xong. (Không có output)';
                        outputDiv.innerHTML = `> ${output.replace(/\n/g, '<br>> ')}<br><span class="text-gray-500 text-xs mt-2 block">Thực thi trong ${executionTime}s</span>`;
                    }
                } catch (err) {
                    outputDiv.innerHTML = `<span class="text-red-500">Lỗi thực thi:<br>${err.message.replace(/\n/g, '<br>')}</span>`;
                } finally {
                    runButton.classList.remove('opacity-75', 'cursor-not-allowed');
                    runButton.innerText = originalText;
                }
            } else {
                // RUN WEB
                const htmlCode = webEditor.innerText.replace(/\u00a0/g, ' ').trim();

                // Content boiler plate
                const fullCode = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="UTF-8">
                        <style>
                            body { margin: 10px; color: #333; }
                        </style>
                    </head>
                    <body>
                        ${htmlCode}
                    </body>
                    </html>
                `;

                webPreview.srcdoc = fullCode;

                // Visual feedback
                runButton.classList.add('bg-green-600');
                setTimeout(() => runButton.classList.remove('bg-green-600'), 500);
            }
        });
    }

    // Quiz Logic
    // Scan for quiz radio buttons
    const quizGroups = document.querySelectorAll('input[type="radio"]');
    quizGroups.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const parentDiv = e.target.closest('.rounded-lg');
            const resultDivId = `result-${e.target.name}`;

            // cleanup previous result if exists
            let existingResult = parentDiv.querySelector('.quiz-result');
            if (existingResult) existingResult.remove();

            const isCorrect = checkAnswer(e.target.name, e.target.nextElementSibling.innerText);

            const feedback = document.createElement('div');
            feedback.className = `quiz-result mt-4 p-3 rounded text-sm font-medium ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`;
            feedback.innerHTML = isCorrect ?
                '🎉 Chính xác! Bạn đã nắm vững kiến thức.' :
                '❌ Chưa đúng. Hãy thử lại nhé!';

            parentDiv.appendChild(feedback);
        });
    });

    function checkAnswer(quizName, answerText) {
        // Hardcoded answers for demo
        const answers = {
            'quiz1': 'def', // Python function keyword
            'quiz_intro': 'Tập hợp các bước để giải quyết vấn đề' // Algorithm definition
        };

        return answers[quizName] === answerText.trim();
    }

});
