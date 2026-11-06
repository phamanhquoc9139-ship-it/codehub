const testCases = [
  'Tín chấp dựa trên uy tín/thu nhập/lịch sử tín dụng, thường hạn mức nhỏ, thời hạn ngắn, lãi cao hơn và không có tài sản bảo đảm.',
  'Thế chấp cần tài sản bảo đảm; khoản vay thường lớn/dài hạn, thủ tục thẩm định chặt; không trả được có thể bị xử lí tài sản theo hợp đồng và luật.',
  'Trả góp chia gốc và lãi thành các kỳ; tổng chi phí thường cao hơn trả ngay. Cần xem lãi suất, phí, bảo hiểm bắt buộc (nếu có), tổng tiền phải trả và phạt trễ hạn.',
  'Thừa nhận giá trị và công dụng xã hội của hàng hoá thông qua việc hàng hoá có bán được hay không.',
  'Cung cấp thông tin về cung – cầu, thị hiếu, giá cả, chất lượng và xu hướng để chủ thể quyết định sản xuất/tiêu dùng.',
  'Điều tiết và kích thích sản xuất, phân phối và tiêu dùng hàng hoá.'
];

const kwRegex = /^(Tín chấp|Thế chấp|Trả góp|Thẻ tín dụng|Mua trả góp|Đại diện|Quyết định|Quy phạm pháp luật|Chế định pháp luật|Ngành luật|Công tố|Kiểm sát tư pháp|Tính quy phạm phổ biến|Tính quyền lực[,\s]*bắt buộc chung|Tính xác định chặt chẽ|Thừa nhận giá trị|Cung cấp thông tin|Điều tiết và kích thích)/i;

testCases.forEach(tc => {
  const m = kwRegex.exec(tc);
  if (m) {
    const term = m[1];
    const desc = tc.slice(m[0].length).replace(/^[:\s,–—]+/, '').trim();
    console.log(`TERM: [${term}] => DESC: [${desc.slice(0, 40)}...]`);
  } else {
    console.log(`NO MATCH: [${tc.slice(0, 30)}...]`);
  }
});
