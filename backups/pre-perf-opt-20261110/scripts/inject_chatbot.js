const fs = require('fs');
const path = require('path');

const coursesDir = path.join(__dirname, '..', 'courses');
const chatbotScriptTag = '    <script src="../scripts/chatbot.js"></script>';

fs.readdir(coursesDir, (err, files) => {
    if (err) {
        console.error('Error reading courses directory:', err);
        return;
    }

    files.forEach(file => {
        if (file.endsWith('.html')) {
            const filePath = path.join(coursesDir, file);
            let content = fs.readFileSync(filePath, 'utf8');

            // Check if the script is already included
            if (!content.includes('chatbot.js')) {
                // Find the closing body tag
                const bodyCloseIndex = content.lastIndexOf('</body>');

                if (bodyCloseIndex !== -1) {
                    // Inject the script right before </body>
                    content = content.slice(0, bodyCloseIndex) + chatbotScriptTag + '\n' + content.slice(bodyCloseIndex);

                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log(`Successfully injected chatbot into ${file}`);
                } else {
                    console.warn(`Warning: Could not find </body> in ${file}. Skipping.`);
                }
            } else {
                console.log(`Chatbot already exists in ${file}. Skipping.`);
            }
        }
    });

    console.log('--- Done injecting chatbot script ---');
});
