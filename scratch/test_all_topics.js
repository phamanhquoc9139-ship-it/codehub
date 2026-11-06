const { getTopicIllustration } = require('./generate_all_illustrations');

const topics = [
  'phan-1-kien-thuc-chung',
  'chay-cu-li-ngan-60m',
  'nhay-xa-kieu-ngoi',
  'chay-cu-li-trung-binh',
  'bai-the-duc-30-nhip',
  'cau-long',
  'bong-da',
  'bong-ro'
];

topics.forEach(t => {
  const html = getTopicIllustration(t);
  console.log(`Topic: ${t} -> Generated length: ${html.length}`);
});
