// Application Logic

document.addEventListener('DOMContentLoaded', () => {
    console.log('CodeHub App Initialized');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
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
            tabPython.classList.add('border-blue-700', 'text-blue-700', 'dark:text-blue-400');
            tabPython.classList.remove('border-transparent', 'text-gray-600', 'dark:text-gray-400');
            tabWeb.classList.remove('border-blue-700', 'text-blue-700', 'dark:text-blue-400');
            tabWeb.classList.add('border-transparent', 'text-gray-600', 'dark:text-gray-400');
            panePython.classList.remove('hidden');
            paneWeb.classList.add('hidden');
        });

        tabWeb.addEventListener('click', () => {
            tabWeb.classList.add('border-blue-700', 'text-blue-700', 'dark:text-blue-400');
            tabWeb.classList.remove('border-transparent', 'text-gray-600', 'dark:text-gray-400');
            tabPython.classList.remove('border-blue-700', 'text-blue-700', 'dark:text-blue-400');
            tabPython.classList.add('border-transparent', 'text-gray-600', 'dark:text-gray-400');
            paneWeb.classList.remove('hidden');
            panePython.classList.add('hidden');
        });
    }

    // Integrated Playground Control (Lazy-load Pyodide ONLY on Python usage)
    const runButton = document.getElementById('run-button');
    const outputDiv = document.getElementById('code-output');
    const pythonEditor = document.getElementById('code-editor');
    const webEditor = document.getElementById('web-editor');
    const webPreview = document.getElementById('web-preview');

    let pyodideReady = false;
    let pyodide = null;
    let pyodidePromise = null;

    function loadScriptOnce(src) {
        return new Promise((resolve, reject) => {
            if (typeof window.loadPyodide === 'function') return resolve();
            const s = document.createElement('script');
            s.src = src;
            s.async = true;
            s.onload = () => resolve();
            s.onerror = () => reject(new Error('Không thể tải Pyodide CDN'));
            document.head.appendChild(s);
        });
    }

    async function ensurePyodide() {
        if (pyodideReady && pyodide) return pyodide;
        if (pyodidePromise) return pyodidePromise;

        pyodidePromise = (async () => {
            await loadScriptOnce('https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js');
            if (typeof window.loadPyodide !== 'function') {
                throw new Error('loadPyodide không khả dụng');
            }
            pyodide = await window.loadPyodide();
            pyodideReady = true;
            return pyodide;
        })();

        try {
            return await pyodidePromise;
        } catch (err) {
            pyodidePromise = null;
            throw err;
        }
    }

    if (runButton) {
        // Warm up Pyodide only when user actually focuses/edits the Python editor
        if (pythonEditor) {
            pythonEditor.addEventListener('focus', () => {
                ensurePyodide().catch(() => {});
            }, { once: true });
        }

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
            const isPythonActive = !panePython.classList.contains('hidden');

            if (isPythonActive) {
                runButton.classList.add('opacity-75', 'cursor-not-allowed');
                const originalText = runButton.innerText;
                runButton.innerText = 'Đang chạy...';

                if (!pyodideReady) {
                    outputDiv.innerHTML = '<span class="text-yellow-300">Đang tải môi trường Python (chỉ tải lần đầu)...</span>';
                    try {
                        await ensurePyodide();
                    } catch (err) {
                        outputDiv.innerHTML = `<span class="text-red-400">Không thể khởi tạo Python: ${err.message}</span>`;
                        runButton.classList.remove('opacity-75', 'cursor-not-allowed');
                        runButton.innerText = originalText;
                        return;
                    }
                }

                pyodide.setStdin({
                    stdin: () => window.prompt("Nhập dữ liệu cho chương trình Python:")
                });

                let code = pythonEditor.innerText.replace(/\u00a0/g, ' ').trim();
                outputDiv.innerHTML = '<span class="text-blue-300">Đang thực thi...</span>';

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
                        outputDiv.innerHTML = `<span class="text-red-400">Lỗi Python:<br>${errorBuffer.replace(/\n/g, '<br>')}</span>`;
                    } else {
                        let output = outputBuffer.trim() || 'Chương trình đã chạy xong. (Không có output)';
                        outputDiv.innerHTML = `> ${output.replace(/\n/g, '<br>> ')}<br><span class="text-gray-400 text-xs mt-2 block">Thực thi trong ${executionTime}s</span>`;
                    }
                } catch (err) {
                    outputDiv.innerHTML = `<span class="text-red-400">Lỗi thực thi:<br>${err.message.replace(/\n/g, '<br>')}</span>`;
                } finally {
                    runButton.classList.remove('opacity-75', 'cursor-not-allowed');
                    runButton.innerText = originalText;
                }
            } else {
                const htmlCode = webEditor.innerText.replace(/\u00a0/g, ' ').trim();
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
                runButton.classList.add('bg-green-700');
                setTimeout(() => runButton.classList.remove('bg-green-700'), 500);
            }
        });
    }

    // Quiz Logic
    const quizGroups = document.querySelectorAll('input[type="radio"]');
    quizGroups.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const parentDiv = e.target.closest('.rounded-lg');
            if (!parentDiv) return;
            let existingResult = parentDiv.querySelector('.quiz-result');
            if (existingResult) existingResult.remove();

            const isCorrect = checkAnswer(e.target.name, e.target.nextElementSibling.innerText);

            const feedback = document.createElement('div');
            feedback.className = `quiz-result mt-4 p-3 rounded text-sm font-medium ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`;
            feedback.innerHTML = isCorrect ?
                '🎉 Chính xác! Bạn đã nắm vững kiến thức.' :
                '❌ Chưa đúng. Hãy thử lại nhé!';

            parentDiv.appendChild(feedback);
        });
    });

    function checkAnswer(quizName, answerText) {
        const answers = {
            'quiz1': 'def',
            'quiz_intro': 'Tập hợp các bước để giải quyết vấn đề'
        };
        return answers[quizName] === answerText.trim();
    }
});
