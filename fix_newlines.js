const fs = require('fs');
const path = require('path');

const files = ['hoahoc_10.html', 'hoahoc_11.html', 'hoahoc_12.html'];

files.forEach(file => {
    const filePath = path.join(__dirname, 'courses', file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Replace literal string "\n" (backslash followed by n) with actual newline
        content = content.split('\\n').join('\n');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed newlines in', file);
    }
});
