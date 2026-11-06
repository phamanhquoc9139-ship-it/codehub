const fs = require('fs');

const histData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_history_data.json', 'utf8'));
const geoData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_geo_data.json', 'utf8'));
const topicData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_topic_data.json', 'utf8'));

console.log('Hist total:', histData.length, 'Geo total:', geoData.length, 'Topic total:', topicData.length);
