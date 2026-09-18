const https = require('https');

const chars1 = ['I', 'l', '1'];
const chars2 = ['I', 'l', '1'];
const chars3 = ['O', '0'];
const chars4 = ['I', 'l', '1'];

async function checkKey(key) {
    return new Promise((resolve) => {
        const data = JSON.stringify({ contents: [{ parts: [{ text: 'hi' }] }] });
        const req = https.request({
            hostname: 'generativelanguage.googleapis.com',
            path: '/v1beta/models/gemini-2.0-flash:generateContent?key=' + key,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }, res => {
            let body = '';
            res.on('data', d => body += d);
            res.on('end', () => {
                const parsed = JSON.parse(body);
                if (!parsed.error || parsed.error.status !== 'INVALID_ARGUMENT') {
                    console.log('FOUND KEY:', key);
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
        req.write(data);
        req.end();
    });
}

(async () => {
    for (let c1 of chars1) {
        for (let c2 of chars2) {
            for (let c3 of chars3) {
                for (let c4 of chars4) {
                    const key = `AIzaSyDwFG3QS${c1}3Bt8xegMedt${c2}wQo${c3}9h${c4}6DCTZk`;
                    const result = await checkKey(key);
                    if (result) return;
                }
            }
        }
    }
    console.log("Not found among these permutations.");
})();
