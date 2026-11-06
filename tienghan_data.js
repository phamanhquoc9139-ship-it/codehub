const fs = require('fs');
const path = require('path');

const lessons = [
  // TẬP 1 (BÀI 1 - 8)
  {
    num: 1,
    book: 1,
    titleKr: '보통 몇 시에 일어나요?',
    titleVi: 'Cậu thường ngủ dậy lúc mấy giờ?',
    topic: 'Giờ giấc, các hoạt động hằng ngày, danh từ chỉ thời gian + 에',
    summary: 'Học cách hỏi và trả lời về thời gian, các hoạt động sinh hoạt trong ngày (thức dậy, ăn sáng, đi học, đi ngủ) và cách dùng tiểu từ chỉ thời điểm "에".',
    grammarSummary: 'Danh từ thời gian + 에: Chỉ thời điểm thực hiện hành động (ví dụ: 7시에, 아침에). Lưu ý: Không dùng "에" với 어제, 오늘, 내일, 지금.',
    dialogues: [
      {
        speaker1: '민수 (Minsu)',
        speaker2: '란 (Lan)',
        kr1: '란 씨, 보통 아침에 몇 시에 일어나요?',
        vi1: 'Lan à, cậu thường thức dậy lúc mấy giờ vào buổi sáng?',
        kr2: '저는 보통 아침 6시 30분에 일어나요. 민수 씨는요?',
        vi2: 'Mình thường dậy lúc 6 giờ 30 phút sáng. Còn Minsu thì sao?',
        kr3: '저는 7시에 일어나요. 그리고 8시에 학교에 가요.',
        vi3: 'Mình dậy lúc 7 giờ. Sau đó 8 giờ mình đến trường.',
        kr4: '학교 수업은 몇 시에 시작해요? - 8시 30분에 시작해요.',
        vi4: 'Tiết học ở trường bắt đầu lúc mấy giờ? - Bắt đầu lúc 8 giờ 30 phút.'
      }
    ],
    vocab: [
      { kr: '일어나다', vi: 'thức dậy', type: 'Động từ', pron: '[이러나다]' },
      { kr: '세수하다', vi: 'rửa mặt', type: 'Động từ', pron: '[세수하다]' },
      { kr: '아침을 먹다', vi: 'ăn sáng', type: 'Cụm ĐT', pron: '[아치믈 먹따]' },
      { kr: '학교에 가다', vi: 'đến trường', type: 'Cụm ĐT', pron: '[학꾜에 가다]' },
      { kr: '수업', vi: 'tiết học / giờ học', type: 'Danh từ', pron: '[수업]' },
      { kr: '시작하다', vi: 'bắt đầu', type: 'Động từ', pron: '[시자카다]' },
      { kr: '끝나다', vi: 'kết thúc', type: 'Động từ', pron: '[끈나다]' },
      { kr: '운동하다', vi: 'tập thể dục / vận động', type: 'Động từ', pron: '[운동하다]' },
      { kr: '숙제하다', vi: 'làm bài tập về nhà', type: 'Động từ', pron: '[숙쩨하다]' },
      { kr: '자다', vi: 'ngủ', type: 'Động từ', pron: '[자다]' },
      { kr: '오전 / 오후', vi: 'buổi sáng (AM) / buổi chiều (PM)', type: 'Danh từ', pron: '[오전 / 오후]' },
      { kr: '몇 시 / 몇 분', vi: 'mấy giờ / mấy phút', type: 'Cụm từ', pron: '[멷 시 / 멷 분]' }
    ],
    grammarNotes: [
      {
        title: '1. Cấu trúc danh từ thời gian + 에 (vào lúc / vào thời điểm)',
        desc: 'Tiểu từ "에" gắn sau danh từ chỉ thời gian để biểu thị thời điểm mà hành động diễn ra.',
        formula: 'Danh từ thời gian + 에 + Động từ',
        examples: [
          { kr: '저는 아침 7시에 일어나요.', vi: 'Tôi thức dậy vào lúc 7 giờ sáng.' },
          { kr: '오후 4시에 운동을 해요.', vi: 'Tôi tập thể dục vào lúc 4 giờ chiều.' },
          { kr: '밤 10시에 자요.', vi: 'Tôi đi ngủ vào lúc 10 giờ đêm.' }
        ],
        tip: 'Chú ý: Các từ chỉ thời gian tương đối như 어제 (hôm qua), 오늘 (hôm nay), 내일 (ngày mai), 지금 (bây giờ) KHÔNG gắn với "에". Ví dụ: "오늘 학교에 가요" (ĐÚNG), KHÔNG nói "오늘에...".'
      },
      {
        title: '2. Cách nói Giờ và Phút trong tiếng Hàn',
        desc: 'Để nói giờ trong tiếng Hàn, ta dùng SỐ THUẦN HÀN cho GIỜ (시) và SỐ HÁN HÀN cho PHÚT (분). 30 phút còn gọi là 반 (rưỡi).',
        formula: '[Số thuần Hàn] + 시  +  [Số Hán Hàn] + 분',
        examples: [
          { kr: '1시 (한 시)', vi: '1 giờ' },
          { kr: '2시 15분 (두 시 십오 분)', vi: '2 giờ 15 phút' },
          { kr: '7시 30분 (일곱 시 삼십 분 / 일곱 시 반)', vi: '7 giờ 30 phút / 7 giờ rưỡi' },
          { kr: '12시 (열두 시)', vi: '12 giờ' }
        ],
        tip: 'Các số thuần Hàn 1, 2, 3, 4, 20 khi đi với danh từ đơn vị đếm 시 sẽ đổi dạng: 하나 -> 한, 둘 -> 두, 셋 -> 세, 넷 -> 네, 스물 -> 스무.'
      }
    ],
    reading: {
      title: '민수의 하루 (Một ngày của Minsu)',
      contentKr: '저는 민수입니다. 저는 보통 아침 7시에 일어납니다. 세수를 하고 7시 30분에 아침을 먹습니다. 8시에 학교에 갑니다. 학교 수업은 8시 30분에 시작해서 오후 1시에 끝납니다. 오후에는 친구들과 축구를 합니다. 저녁 9시에 숙제를 하고 10시에 잠을 잡니다.',
      contentVi: 'Mình là Minsu. Mình thường thức dậy lúc 7 giờ sáng. Mình rửa mặt và ăn sáng lúc 7 giờ 30 phút. 8 giờ mình đến trường. Tiết học ở trường bắt đầu lúc 8 giờ 30 và kết thúc lúc 1 giờ chiều. Buổi chiều mình đá bóng cùng các bạn. 9 giờ tối mình làm bài tập và 10 giờ đi ngủ.',
      question: '민수는 몇 시에 아침을 먹습니까? (Minsu ăn sáng lúc mấy giờ?)',
      answer: '7시 30분에 먹습니다 (Ăn sáng lúc 7 giờ 30 phút).'
    },
    quizzes: [
      {
        q: 'Điền từ thích hợp vào chỗ trống: "저는 매일 아침 7시____ 일어나요."',
        options: ['에', '에서', '를', '하고'],
        ans: 0,
        exp: 'Tiểu từ "에" đi sau danh từ thời gian (7시) để chỉ thời điểm diễn ra hành động.'
      },
      {
        q: '"3시 30분" được đọc chính xác là gì?',
        options: ['셋 시 삼십 분', '세 시 삼십 분', '삼 시 서른 분', '세 시 서른 분'],
        ans: 1,
        exp: 'Giờ dùng số thuần Hàn biến đổi (셋 -> 세 시), phút dùng số Hán Hàn (삼십 분).'
      },
      {
        q: 'Từ nào sau đây KHÔNG đi kèm với tiểu từ "에"?',
        options: ['오후 2시', '아침', '오늘', '주말'],
        ans: 2,
        exp: 'Các từ thời gian như "오늘" (hôm nay), "어제" (hôm qua), "내일" (ngày mai) không kết hợp với tiểu từ "에".'
      },
      {
        q: 'Dịch câu sau sang tiếng Hàn: "Tiết học bắt đầu lúc 8 giờ."',
        options: ['수업이 8시에 시작해요.', '수업이 8시에서 끝나요.', '수업을 8시하고 시작해요.', '수업이 8시에 자요.'],
        ans: 0,
        exp: '"수업이 8시에 시작해요." nghĩa là Giờ học bắt đầu lúc 8 giờ.'
      }
    ]
  },

  {
    num: 2,
    book: 1,
    titleKr: '저는 김밥을 좋아해요. 떡볶이도 좋아해요.',
    titleVi: 'Mình thích cơm cuộn và bánh gạo xào cay',
    topic: 'Tên món ăn Hàn Quốc và Việt Nam, tiểu từ 도',
    summary: 'Làm quen với các món ăn nổi tiếng của Hàn Quốc và Việt Nam, cách biểu đạt sở thích ẩm thực và sử dụng tiểu từ "도" (cũng / cũng thích).',
    grammarSummary: 'Danh từ + 도: Có nghĩa là "cũng", dùng để bổ sung thêm đối tượng hoặc sự việc có cùng tính chất. Thay thế cho các tiểu từ 은/는, 이/가, 을/를.',
    dialogues: [
      {
        speaker1: '지수 (Jisoo)',
        speaker2: '민 (Minh)',
        kr1: '민 씨, 한국 음식을 좋아해요?',
        vi1: 'Minh à, cậu có thích món ăn Hàn Quốc không?',
        kr2: '네, 아주 좋아해요. 저는 김밥을 좋아해요.',
        vi2: 'Có chứ, mình rất thích. Mình thích món cơm cuộn kimbap.',
        kr3: '떡볶이는 어때요? 떡볶이도 좋아해요?',
        vi3: 'Bánh gạo xào cay thì sao? Cậu cũng thích bánh gạo tteokbokki chứ?',
        kr4: '네, 떡볶이도 좋아해요. 조금 맵지만 정말 맛있어요!',
        vi4: 'Đúng vậy, mình cũng thích cả bánh gạo xào cay. Hơi cay một chút nhưng thật sự rất ngon!'
      }
    ],
    vocab: [
      { kr: '김밥', vi: 'cơm cuộn kimbap', type: 'Danh từ', pron: '[김ː밥]' },
      { kr: '떡볶이', vi: 'bánh gạo cay tteokbokki', type: 'Danh từ', pron: '[떡뽀끼]' },
      { kr: '비빔밥', vi: 'cơm trộn bibimbap', type: 'Danh từ', pron: '[비빔빱]' },
      { kr: '불고기', vi: 'thịt nướng bulgogi', type: 'Danh từ', pron: '[불고기]' },
      { kr: '김치', vi: 'kim chi', type: 'Danh từ', pron: '[김치]' },
      { kr: '라면', vi: 'mì gói / mì ramen', type: 'Danh từ', pron: '[라면]' },
      { kr: '쌀국수', vi: 'phở (Việt Nam)', type: 'Danh từ', pron: '[쌀꾹쑤]' },
      { kr: '분짜', vi: 'bún chả (Việt Nam)', type: 'Danh từ', pron: '[분짜]' },
      { kr: '월남쌈', vi: 'gỏi cuốn (Việt Nam)', type: 'Danh từ', pron: '[월남쌈]' },
      { kr: '맛있다 / 맛없다', vi: 'ngon / dở (không ngon)', type: 'Tính từ', pron: '[마싣따 / 마덥따]' },
      { kr: '맵다 / 달다', vi: 'cay / ngọt', type: 'Tính từ', pron: '[맵따 / 달다]' },
      { kr: '좋아하다 / 싫어하다', vi: 'thích / ghét (không thích)', type: 'Động từ', pron: '[조아하다 / 시러하다]' }
    ],
    grammarNotes: [
      {
        title: '1. Tiểu từ "도" (cũng / cũng thế)',
        desc: '"도" gắn sau danh từ để thể hiện sự tương đồng hoặc thêm vào ("cũng"). Khi gắn "도", các tiểu từ chủ ngữ (이/가, 은/는) và tiểu từ tân ngữ (을/를) sẽ bị lược bỏ.',
        formula: 'Danh từ + 도',
        examples: [
          { kr: '저는 김밥을 좋아해요. 떡볶이도 좋아해요.', vi: 'Mình thích cơm cuộn. Mình cũng thích cả bánh gạo cay.' },
          { kr: '민수는 학생이에요. 지수도 학생이에요.', vi: 'Minsu là học sinh. Jisoo cũng là học sinh.' },
          { kr: '한국 음식이 맛있어요. 베트남 음식도 맛있어요.', vi: 'Món Hàn ngon. Món Việt cũng ngon.' }
        ],
        tip: 'Lưu ý: Không viết "김밥을도" hay "지수가도". "도" thay thế hoàn toàn cho "을/를" và "이/가".'
      },
      {
        title: '2. Cách diễn đạt tính từ vị giác trong tiếng Hàn',
        desc: 'Một số tính từ chỉ mùi vị thường dùng khi miêu tả món ăn.',
        formula: 'Tính từ + -아요/어요',
        examples: [
          { kr: '떡볶이가 매워요. (맵다 -> 매워요)', vi: 'Bánh gạo xào cay cay.' },
          { kr: '사과가 달아요. (달다 -> 달아요)', vi: 'Quả táo ngọt.' },
          { kr: '찌개가 짜요. (짜다 -> 짜요)', vi: 'Món canh bị mặn.' }
        ],
        tip: 'Các tính từ kết thúc bằng "ㅂ" như 맵다 (cay) là bất quy tắc: 맵다 -> 매워요.'
      }
    ],
    reading: {
      title: '우리가 좋아하는 음식 (Món ăn chúng mình yêu thích)',
      contentKr: '지수와 민은 식당에 갔습니다. 지수는 불고기를 주문했습니다. 불고기가 달고 맛있습니다. 민은 비빔밥을 주문했습니다. 비빔밥에는 여러 가지 채소와 고기가 들어 있습니다. 민은 김치도 아주 좋아합니다. 두 사람은 음식을 맛있게 먹었습니다.',
      contentVi: 'Jisoo và Minh đã đến nhà hàng. Jisoo gọi món thịt nướng bulgogi. Bulgogi ngọt và rất ngon. Minh gọi món cơm trộn bibimbap. Trong cơm trộn có nhiều loại rau và thịt. Minh cũng rất thích kim chi nữa. Cả hai bạn đã ăn bữa ăn rất ngon miệng.',
      question: '민은 어떤 한국 음식을 주문했습니까? (Minh đã gọi món ăn Hàn Quốc nào?)',
      answer: '비빔밥을 주문했습니다 (Minh đã gọi món bibimbap).'
    },
    quizzes: [
      {
        q: 'Chọn câu viết đúng ngữ pháp với tiểu từ "도":',
        options: ['저는 사과를도 좋아해요.', '저는 사과도 좋아해요.', '저는 사과가도 좋아해요.', '저는 사과은도 좋아해요.'],
        ans: 1,
        exp: 'Tiểu từ "도" thay thế hoàn toàn cho tiểu từ tân ngữ "을/를", do đó câu đúng là "사과도 좋아해요".'
      },
      {
        q: 'Món ăn truyền thống Việt Nam nào sau đây được gọi là "쌀국수" trong tiếng Hàn?',
        options: ['Bún chả', 'Bánh mì', 'Phở', 'Gỏi cuốn'],
        ans: 2,
        exp: '"쌀국수" (ssalguksu) chính là món phở Việt Nam.'
      },
      {
        q: 'Tính từ "맵다" (cay) khi chia đuôi lịch sự thân mật "-아요/어요" sẽ trở thành dạng nào?',
        options: ['매워요', '맵아요', '매파요', '맵어요'],
        ans: 0,
        exp: '"맵다" là tính từ bất quy tắc "ㅂ", "ㅂ" biến thành "우" -> 매 + 워요 = 매워요.'
      },
      {
        q: 'Hoàn thành câu: "민수는 베트남 사람이에요. 란____ 베트남 사람이에요."',
        options: ['에', '도', '을', '로'],
        ans: 1,
        exp: '"란도" mang nghĩa "Lan cũng là người Việt Nam".'
      }
    ]
  },

  {
    num: 3,
    book: 1,
    titleKr: '식당에서 밥을 먹었어요.',
    titleVi: 'Mình đã ăn ở nhà hàng',
    topic: 'Hoạt động cuối tuần, thì quá khứ -았어요/-었어요/-였어요',
    summary: 'Học cách kể lại những việc đã làm trong quá khứ (cuối tuần qua, hôm qua) và nắm vững cách chia đuôi thì quá khứ trong tiếng Hàn.',
    grammarSummary: 'Thân Động từ/Tính từ + -았어요/-었어요/-였어요: Biểu thị hành động đã hoàn tất trong quá khứ. Nguyên âm ㅏ, ㅗ dùng -았어요; nguyên âm khác dùng -었어요; đuôi 하다 đổi thành 했어요 (하였어요).',
    dialogues: [
      {
        speaker1: '란 (Lan)',
        speaker2: '준 (Tuấn)',
        kr1: '준 씨, 지난 주말에 뭐 했어요?',
        vi1: 'Tuấn ơi, cuối tuần trước cậu đã làm gì thế?',
        kr2: '저는 가족과 함께 한국 식당에서 밥을 먹었어요. 그리고 영화도 봤어요.',
        vi2: 'Mình đã ăn cơm ở nhà hàng Hàn Quốc cùng với gia đình. Sau đó mình cũng đã xem phim nữa.',
        kr3: '영화가 재미있었어요?',
        vi3: 'Bộ phim có hay không cậu?',
        kr4: '네, 정말 재미있었어요! 란 씨는 주말에 뭐 했어요? - 저는 도서관에서 책을 읽었어요.',
        vi4: 'Có, thật sự rất hay! Còn Lan cuối tuần đã làm gì? - Mình đã đọc sách ở thư viện.'
      }
    ],
    vocab: [
      { kr: '어제', vi: 'hôm qua', type: 'Danh từ', pron: '[어제]' },
      { kr: '지난 주말', vi: 'cuối tuần trước', type: 'Cụm từ', pron: '[지난 주말]' },
      { kr: '식당', vi: 'nhà hàng / quán ăn', type: 'Danh từ', pron: '[식땅]' },
      { kr: '영화관', vi: 'rạp chiếu phim', type: 'Danh từ', pron: '[영ː화관]' },
      { kr: '공원', vi: 'công viên', type: 'Danh từ', pron: '[공원]' },
      { kr: '박물관', vi: 'viện bảo tàng', type: 'Danh từ', pron: '[방물관]' },
      { kr: '도서관', vi: 'thư viện', type: 'Danh từ', pron: '[도서관]' },
      { kr: '영화를 보다', vi: 'xem phim', type: 'Cụm ĐT', pron: '[영ː화를 보다]' },
      { kr: '친구를 만나다', vi: 'gặp bạn bè', type: 'Cụm ĐT', pron: '[친구를 만나다]' },
      { kr: '산책하다', vi: 'đi dạo', type: 'Động từ', pron: '[산ː체카다]' },
      { kr: '책을 읽다', vi: 'đọc sách', type: 'Cụm ĐT', pron: '[채글 익따]' },
      { kr: '재미있다', vi: 'thú vị / hay', type: 'Tính từ', pron: '[재미이드따]' }
    ],
    grammarNotes: [
      {
        title: '1. Quy tắc chia thì Quá khứ (-았/었/였어요)',
        desc: 'Dùng để diễn tả một hành động hoặc trạng thái đã diễn ra và kết thúc trong quá khứ.',
        formula: 'Thân từ + -았어요 / -었어요 / 했어요',
        examples: [
          { kr: '가다 -> 가 + 았어요 = 갔어요', vi: 'đã đi' },
          { kr: '보다 -> 보 + 았어요 = 봤어요', vi: 'đã xem' },
          { kr: '먹다 -> 먹 + 었어요 = 먹었어요', vi: 'đã ăn' },
          { kr: '읽다 -> 읽 + 었어요 = 읽었어요', vi: 'đã đọc' },
          { kr: '공부하다 -> 공부했어요', vi: 'đã học' }
        ],
        tip: 'Ghi nhớ thần tốc: Nếu âm tiết cuối của thân từ có nguyên âm là ㅏ hoặc ㅗ thì cộng -았어요; tất cả các nguyên âm còn lại cộng -었어요; riêng đuôi "하다" luôn đổi thành "했어요".'
      },
      {
        title: '2. Phân biệt tiểu từ địa điểm: "에" và "에서"',
        desc: '"에" đi với động từ di chuyển (가다, 오다, 다니다) hoặc tồn tại (있다, 없다); còn "에서" dùng khi CÓ HÀNH ĐỘNG diễn ra tại địa điểm đó.',
        formula: 'Địa điểm + 에서 + Động từ hành động',
        examples: [
          { kr: '식당에서 밥을 먹었어요.', vi: 'Đã ăn cơm ở nhà hàng.' },
          { kr: '도서관에서 공부했어요.', vi: 'Đã học bài ở thư viện.' },
          { kr: '공원에 갔어요.', vi: 'Đã đi đến công viên (dùng 에 vì có động từ di chuyển 갔어요).' }
        ],
        tip: 'Ăn, uống, học, chơi, xem phim... tại đâu thì nơi chốn đó PHẢI đi với "에서".'
      }
    ],
    reading: {
      title: '준의 주말 이야기 (Chuyện cuối tuần của Tuấn)',
      contentKr: '어제는 일요일이었습니다. 날씨가 아주 좋았습니다. 준은 친구들과 함께 시내 공원에 갔습니다. 공원에서 자전거를 타고 산책을 했습니다. 점심에는 맛있는 쌀국수를 먹었습니다. 오후에는 박물관에 가서 옛날 물건들을 구경했습니다. 준은 어제 정말 즐거웠습니다.',
      contentVi: 'Hôm qua là Chủ nhật. Thời tiết rất đẹp. Tuấn đã cùng các bạn đến công viên thành phố. Ở công viên, các bạn đã đạp xe và đi dạo. Buổi trưa mọi người đã ăn phở rất ngon. Buổi chiều các bạn đến bảo tàng ngắm những hiện vật thời xưa. Hôm qua Tuấn đã rất vui vẻ.',
      question: '준은 어제 점심에 무엇을 먹었습니까? (Tuấn đã ăn gì vào bữa trưa hôm qua?)',
      answer: '쌀국수를 먹었습니다 (Tuấn đã ăn món phở).'
    },
    quizzes: [
      {
        q: 'Động từ "만나다" (gặp gỡ) khi chuyển sang thì quá khứ sẽ là:',
        options: ['만났어요', '만넜어요', '만나했어요', '만나었어요'],
        ans: 0,
        exp: 'Thân từ "만나" kết thúc bằng nguyên âm ㅏ nên kết hợp với -았어요, rút gọn thành "만났어요".'
      },
      {
        q: 'Chọn tiểu từ thích hợp: "우리는 어제 도서관____ 책을 읽었어요."',
        options: ['에', '에서', '를', '도'],
        ans: 1,
        exp: 'Hành động đọc sách (책을 읽다) diễn ra tại thư viện nên dùng tiểu từ "에서".'
      },
      {
        q: 'Động từ "운동하다" trong quá khứ được chia là:',
        options: ['운동았어요', '운동었어요', '운동했어요', '운동하였겠어요'],
        ans: 2,
        exp: 'Mọi động từ có đuôi "하다" khi sang quá khứ đều đổi thành "했어요".'
      },
      {
        q: 'Câu nào sau đây mang ý nghĩa "Hôm qua tôi đã xem phim"?',
        options: ['어제 영화를 봐요.', '어제 영화를 봤어요.', '어제 영화를 볼 거예요.', '어제 영화가 봐요.'],
        ans: 1,
        exp: '"어제 영화를 봤어요." là câu chia đúng thì quá khứ (보다 -> 봤어요).'
      }
    ]
  },

  {
    num: 4,
    book: 1,
    titleKr: '제 방에는 침대하고 책상이 있어요.',
    titleVi: 'Trong phòng tớ có giường và bàn học',
    topic: 'Đồ vật trong nhà, cách nối danh từ với 하고',
    summary: 'Khám phá từ vựng về các đồ dùng trong phòng và các phòng trong ngôi nhà; học cách sử dụng liên từ nối danh từ "하고" (và / với).',
    grammarSummary: 'Danh từ 1 + 하고 + Danh từ 2: Dùng để liên kết hai hay nhiều danh từ cùng đẳng cấp, mang nghĩa "và" hoặc "cùng với".',
    dialogues: [
      {
        speaker1: '민수 (Minsu)',
        speaker2: '민 (Minh)',
        kr1: '민 씨, 우리 집에 놀러 와줘서 고마워요. 이쪽이 제 방이에요.',
        vi1: 'Minh ơi, cảm ơn cậu đã đến nhà mình chơi. Bên này là phòng của mình này.',
        kr2: '와, 방이 정말 깨끗하고 아늑해요! 방에 무엇이 있어요?',
        vi2: 'Oa, phòng sạch sẽ và ấm cúng quá! Trong phòng cậu có những gì thế?',
        kr3: '제 방에는 침대하고 책상이 있어요. 그리고 창문 옆에 옷장도 있어요.',
        vi3: 'Trong phòng mình có giường và bàn học. Ngoài ra bên cạnh cửa sổ còn có tủ quần áo nữa.',
        kr4: '책상 위에 컴퓨터하고 시계도 있네요! - 네, 맞아요.',
        vi4: 'Trên bàn học có cả máy tính và đồng hồ nữa kìa! - Ừ, đúng rồi đó.'
      }
    ],
    vocab: [
      { kr: '방', vi: 'căn phòng', type: 'Danh từ', pron: '[방]' },
      { kr: '침대', vi: 'giường ngủ', type: 'Danh từ', pron: '[침대]' },
      { kr: '책상', vi: 'bàn học / bàn làm việc', type: 'Danh từ', pron: '[책쌍]' },
      { kr: '의자', vi: 'cái ghế', type: 'Danh từ', pron: '[의자]' },
      { kr: '옷장', vi: 'tủ quần áo', type: 'Danh từ', pron: '[옷짱]' },
      { kr: '책장', vi: 'kệ sách / giá sách', type: 'Danh từ', pron: '[책짱]' },
      { kr: '컴퓨터', vi: 'máy vi tính', type: 'Danh từ', pron: '[컴퓨터]' },
      { kr: '시계', vi: 'đồng hồ', type: 'Danh từ', pron: '[시계]' },
      { kr: '창문', vi: 'cửa sổ', type: 'Danh từ', pron: '[창문]' },
      { kr: '거실', vi: 'phòng khách', type: 'Danh từ', pron: '[거실]' },
      { kr: '주방 / 부엌', vi: 'nhà bếp', type: 'Danh từ', pron: '[주방 / 부억]' },
      { kr: '화장실', vi: 'nhà vệ sinh / phòng tắm', type: 'Danh từ', pron: '[화장실]' }
    ],
    grammarNotes: [
      {
        title: '1. Liên từ nối danh từ "하고" (và / với)',
        desc: '"하고" gắn trực tiếp vào danh từ đứng trước mà không cần quan tâm danh từ đó có phụ âm cuối (patchim) hay không. Thường dùng trong văn nói thân mật.',
        formula: 'Danh từ 1 + 하고 + Danh từ 2 (+ 하고 + Danh từ 3...)',
        examples: [
          { kr: '방에 침대하고 책상이 있어요.', vi: 'Trong phòng có giường và bàn học.' },
          { kr: '사과하고 바나나를 샀어요.', vi: 'Mình đã mua táo và chuối.' },
          { kr: '친구하고 같이 공부해요.', vi: 'Mình học bài cùng với bạn bè.' }
        ],
        tip: 'Khi "하고" đi với một danh từ và từ chỉ người (như 친구하고), nó có nghĩa là "cùng với ai đó" (cùng với bạn).'
      },
      {
        title: '2. Cấu trúc vị trí: Danh từ + 에 있다/없다 (Có / Không có ở đâu)',
        desc: 'Để diễn tả sự tồn tại của người hoặc đồ vật tại một vị trí cụ thể.',
        formula: 'Vị trí + 에 + Chủ ngữ + 이/가 + 있다 / 없다',
        examples: [
          { kr: '책상 위에 책이 있어요.', vi: 'Trên bàn học có quyển sách.' },
          { kr: '교실에 텔레비전이 없어요.', vi: 'Trong lớp học không có tivi.' }
        ],
        tip: 'Các từ chỉ vị trí: 위 (trên), 아래/밑 (dưới), 앞 (trước), 뒤 (sau), 옆 (bên cạnh), 안 (trong), 밖 (ngoài).'
      }
    ],
    reading: {
      title: '란의 예쁜 방 (Căn phòng xinh xắn của Lan)',
      contentKr: '여기는 란의 방입니다. 란의 방은 크지 않지만 아주 아늑합니다. 방 가운데에 침대가 있습니다. 침대 옆에는 작은 책상하고 의자가 있습니다. 책상 위에는 공책하고 연필, 스탠드가 있습니다. 그리고 벽에는 예쁜 그림하고 시계가 걸려 있습니다. 란은 자기 방을 아주 좋아합니다.',
      contentVi: 'Đây là phòng của Lan. Phòng của Lan tuy không lớn nhưng rất ấm cúng. Ở giữa phòng có một chiếc giường. Bên cạnh giường có một chiếc bàn học nhỏ và chiếc ghế. Trên bàn học có vở ghi, bút chì và đèn học. Ngoài ra trên tường còn treo tranh đẹp và đồng hồ. Lan rất yêu thích căn phòng của mình.',
      question: '란의 방 책상 위에는 무엇이 있습니까? (Trên bàn học phòng Lan có những gì?)',
      answer: '공책하고 연필, 스탠드가 있습니다 (Có vở, bút chì và đèn học).'
    },
    quizzes: [
      {
        q: 'Điền từ nối phù hợp: "시장에서 수박____ 포도를 샀어요."',
        options: ['하고', '에서', '으로', '부터'],
        ans: 0,
        exp: '"하고" dùng để nối hai danh từ hoa quả: 수박 (dưa hấu) và 포도 (nho).'
      },
      {
        q: 'Từ nào sau đây có nghĩa là "kệ sách / giá sách"?',
        options: ['책상', '책장', '침대', '옷장'],
        ans: 1,
        exp: '"책장" là kệ sách/giá sách, còn "책상" là bàn học.'
      },
      {
        q: '"친구하고 이야기해요" có nghĩa là gì?',
        options: ['Nói chuyện cùng với bạn.', 'Mua đồ cho bạn.', 'Đến nhà bạn bè.', 'Chào tạm biệt bạn.'],
        ans: 0,
        exp: '"친구하고" nghĩa là cùng với người bạn, "이야기해요" là nói chuyện.'
      },
      {
        q: 'Chọn câu viết đúng về vị trí:',
        options: ['책상 위에 컴퓨터가 있어요.', '책상 에서 컴퓨터가 있어요.', '책상 으로 컴퓨터가 있어요.', '책상 를 컴퓨터가 있어요.'],
        ans: 0,
        exp: 'Cấu trúc tồn tại vị trí: Vị trí (책상 위) + 에 + Chủ ngữ (컴퓨터가) + 있어요.'
      }
    ]
  },

  {
    num: 5,
    book: 1,
    titleKr: '생일이 몇 월 며칠이에요?',
    titleVi: 'Sinh nhật cậu là ngày mấy tháng mấy?',
    topic: '12 tháng, ngày tháng, nói về sinh nhật',
    summary: 'Nắm vững cách đọc 12 tháng và các ngày trong tháng bằng số Hán Hàn, cách hỏi ngày sinh nhật và văn hóa tặng quà chúc mừng sinh nhật.',
    grammarSummary: 'Danh từ + 이/가 몇 월 며칠이에요?: Mẫu câu hỏi ngày tháng. Lưu ý đọc tháng đặc biệt: tháng 6 là "유월" (thay vì 육월), tháng 10 là "시월" (thay vì 십월).',
    dialogues: [
      {
        speaker1: '지수 (Jisoo)',
        speaker2: '란 (Lan)',
        kr1: '란 씨, 생일이 몇 월 며칠이에요?',
        vi1: 'Lan à, sinh nhật cậu là ngày mấy tháng mấy vậy?',
        kr2: '제 생일은 10월 15일이에요. 지수 씨는요?',
        vi2: 'Sinh nhật của mình là ngày 15 tháng 10. Còn Jisoo thì sao?',
        kr3: '제 생일은 6월 20일이에요. 생일에 무슨 선물을 받고 싶어요?',
        vi3: 'Sinh nhật của mình là ngày 20 tháng 6. Cậu muốn nhận quà gì vào ngày sinh nhật?',
        kr4: '저는 재미있는 한국어 동화책을 받고 싶어요!',
        vi4: 'Mình muốn nhận một cuốn sách truyện cổ tích tiếng Hàn thật thú vị!'
      }
    ],
    vocab: [
      { kr: '생일', vi: 'sinh nhật', type: 'Danh từ', pron: '[생일]' },
      { kr: '월', vi: 'tháng', type: 'Danh từ đơn vị', pron: '[월]' },
      { kr: '일', vi: 'ngày', type: 'Danh từ đơn vị', pron: '[일]' },
      { kr: '1월 ~ 12월', vi: 'Tháng 1 đến Tháng 12', type: 'Danh từ', pron: '[일월 ~ 시비월]' },
      { kr: '유월 (6월)', vi: 'tháng 6 (lưu ý phát âm)', type: 'Danh từ', pron: '[유월]' },
      { kr: '시월 (10월)', vi: 'tháng 10 (lưu ý phát âm)', type: 'Danh từ', pron: '[시월]' },
      { kr: '선물', vi: 'món quà', type: 'Danh từ', pron: '[선물]' },
      { kr: '생일 파티', vi: 'tiệc sinh nhật', type: 'Danh từ', pron: '[생일 파티]' },
      { kr: '축하하다', vi: 'chúc mừng', type: 'Động từ', pron: '[추카하다]' },
      { kr: '받다 / 주다', vi: 'nhận / tặng, cho', type: 'Động từ', pron: '[받따 / 주다]' },
      { kr: '인형', vi: 'búp bê / gấu bông', type: 'Danh từ', pron: '[인형]' },
      { kr: '케이크', vi: 'bánh kem gato', type: 'Danh từ', pron: '[케이크]' }
    ],
    grammarNotes: [
      {
        title: '1. Cách đọc 12 tháng trong tiếng Hàn',
        desc: 'Tất cả 12 tháng đều dùng SỐ HÁN HÀN + 월 (tháng).',
        formula: '[Số Hán Hàn] + 월',
        examples: [
          { kr: '1월 [일월], 2월 [이월], 3월 [삼월], 4월 [사월], 5월 [오월]', vi: 'Tháng 1 đến Tháng 5' },
          { kr: '6월 [유월] - ĐẶC BIỆT (bỏ patchim ㄱ)', vi: 'Tháng 6 đọc là 유월' },
          { kr: '7월 [칠월], 8월 [팔월], 9월 [구월]', vi: 'Tháng 7 đến Tháng 9' },
          { kr: '10월 [시월] - ĐẶC BIỆT (bỏ patchim ㅂ)', vi: 'Tháng 10 đọc là 시월' },
          { kr: '11월 [십일월], 12월 [십이월]', vi: 'Tháng 11 và Tháng 12' }
        ],
        tip: 'Quy tắc vàng: 6월 là "유월", 10월 là "시월". Tuyệt đối không đọc là 육월 hay 십월.'
      },
      {
        title: '2. Mẫu câu hỏi và trả lời ngày tháng',
        desc: 'Hỏi ngày tháng năm sinh hoặc sự kiện.',
        formula: 'Chủ ngữ + 은/는 몇 월 며칠이에요?',
        examples: [
          { kr: '생일이 몇 월 며칠이에요? - 5월 8일이에요.', vi: 'Sinh nhật bạn ngày mấy tháng mấy? - Ngày 8 tháng 5.' },
          { kr: '오늘이 며칠이에요? - 오늘은 11월 20일이에요.', vi: 'Hôm nay là ngày mấy? - Hôm nay là ngày 20 tháng 11.' }
        ],
        tip: 'Từ "며칠" (ngày mấy) viết liền, không viết là "몇 일".'
      }
    ],
    reading: {
      title: '민수의 생일 초대장 (Thiệp mời sinh nhật của Minsu)',
      contentKr: '친구들에게: 안녕, 친구들아! 이번 주 토요일은 내 열한 번째 생일이야. 내 생일은 5월 12일이야. 우리 집에서 신나는 생일 파티를 할 거야. 맛있는 케이크하고 피자도 준비했어. 오후 3시까지 우리 집으로 와줘. 꼭 와서 함께 축하해줘! - 민수가 -',
      contentVi: 'Gửi các bạn thân mến: Chào các bạn! Thứ Bảy tuần này là sinh nhật lần thứ 11 của mình. Sinh nhật mình là ngày 12 tháng 5. Mình sẽ tổ chức một bữa tiệc sinh nhật thật vui tại nhà. Mình đã chuẩn bị cả bánh kem ngon và bánh pizza nữa. Các bạn hãy đến nhà mình trước 3 giờ chiều nhé. Nhất định phải đến chúc mừng cùng mình nha! - Minsu -',
      question: '민수의 생일은 몇 월 며칠입니까? (Sinh nhật của Minsu là ngày mấy tháng mấy?)',
      answer: '5월 12일입니다 (Ngày 12 tháng 5).'
    },
    quizzes: [
      {
        q: '"Tháng 6" và "Tháng 10" trong tiếng Hàn được phát âm chính xác là:',
        options: ['육월, 십월', '유월, 시월', '육월, 시월', '유월, 십월'],
        ans: 1,
        exp: 'Để dễ phát âm nối, tháng 6 đọc là 유월 và tháng 10 đọc là 시월.'
      },
      {
        q: 'Câu chúc mừng sinh nhật phổ biến nhất trong tiếng Hàn là:',
        options: ['생일 축하해요!', '새해 복 많이 받으세요!', '안녕히 가세요!', '처음 뵙겠습니다!'],
        ans: 0,
        exp: '"생일 축하해요!" nghĩa là Chúc mừng sinh nhật!'
      },
      {
        q: '"12월 25일" được đọc bằng số Hán Hàn là:',
        options: ['십이월 이십오일', '열두월 스물다섯일', '십이월 스물오일', '열두월 이십오일'],
        ans: 0,
        exp: 'Cả tháng và ngày đều dùng số Hán Hàn: 12월 (십이월), 25일 (이십오일).'
      },
      {
        q: 'Điền từ còn thiếu vào câu hỏi: "오늘이 몇 월 ____이에요?"',
        options: ['며칠', '몇 일', '몇일', '며틸'],
        ans: 0,
        exp: 'Từ chuẩn chính tả tiếng Hàn để hỏi "ngày mấy" là "며칠".'
      }
    ]
  },

  {
    num: 6,
    book: 1,
    titleKr: '빵이 두 개 주세요.',
    titleVi: 'Cho cháu hai cái bánh mì ạ!',
    topic: 'Mua sắm, số lượng, đơn vị đếm',
    summary: 'Học cách sử dụng số thuần Hàn kết hợp với các danh từ đơn vị đếm (cái, chai, ly, quyển, con...) và mẫu câu mua hàng lịch sự "주세요".',
    grammarSummary: 'Danh từ + Số thuần Hàn + Danh từ đơn vị đếm + 주세요: Mẫu câu mua sắm yêu cầu (Ví dụ: 사과 세 개 주세요, 물 한 병 주세요).',
    dialogues: [
      {
        speaker1: '주인 (Chủ quán)',
        speaker2: '민 (Minh)',
        kr1: '어서 오세요! 무엇을 드릴까요?',
        vi1: 'Xin mời vào! Cháu muốn mua gì ạ?',
        kr2: '안녕하세요. 이 빵 두 개하고 우유 한 팩 주세요.',
        vi2: 'Cháu chào bác ạ. Cho cháu hai cái bánh mì này và một hộp sữa tươi ạ.',
        kr3: '네, 여기 있습니다. 더 필요한 것은 없나요?',
        vi3: 'Được rồi, của cháu đây. Cháu có cần thêm gì nữa không?',
        kr4: '아니요, 다 됐어요. 모두 얼마예요? - 4,000원이에요.',
        vi4: 'Dạ không, thế là đủ rồi ạ. Tất cả bao nhiêu tiền ạ? - Của cháu hết 4.000 won.'
      }
    ],
    vocab: [
      { kr: '빵', vi: 'bánh mì', type: 'Danh từ', pron: '[빵]' },
      { kr: '사과', vi: 'quả táo', type: 'Danh từ', pron: '[사과]' },
      { kr: '우유', vi: 'sữa tươi', type: 'Danh từ', pron: '[우유]' },
      { kr: '물 / 주스', vi: 'nước lọc / nước ép', type: 'Danh từ', pron: '[물 / 주스]' },
      { kr: '개', vi: 'cái, quả (đơn vị đếm chung)', type: 'Đơn vị đếm', pron: '[개]' },
      { kr: '병', vi: 'chai (nước, sữa)', type: 'Đơn vị đếm', pron: '[병]' },
      { kr: '잔', vi: 'ly, tách (trà, cà phê)', type: 'Đơn vị đếm', pron: '[잔]' },
      { kr: '권', vi: 'quyển (sách, vở)', type: 'Đơn vị đếm', pron: '[권]' },
      { kr: '마리', vi: 'con (động vật)', type: 'Đơn vị đếm', pron: '[마리]' },
      { kr: '명 / 분', vi: 'người (thường / kính ngữ)', type: 'Đơn vị đếm', pron: '[명 / 분]' },
      { kr: '얼마예요?', vi: 'Bao nhiêu tiền vậy ạ?', type: 'Mẫu câu', pron: '[얼마예요]' },
      { kr: '주세요', vi: 'Xin hãy cho tôi / Cho cháu...', type: 'Mẫu câu', pron: '[주세요]' }
    ],
    grammarNotes: [
      {
        title: '1. Số thuần Hàn kết hợp danh từ đơn vị đếm',
        desc: 'Khi đếm số lượng đồ vật, người ta dùng SỐ THUẦN HÀN. Các số 1, 2, 3, 4 biến đổi thành 한, 두, 세, 네 khi đứng trước danh từ đơn vị.',
        formula: 'Danh từ + Số thuần Hàn biến đổi + Đơn vị đếm',
        examples: [
          { kr: '사과 한 개 (1 quả táo)', vi: '하나 -> 한 개' },
          { kr: '물 두 병 (2 chai nước)', vi: '둘 -> 두 병' },
          { kr: '주스 세 잔 (3 ly nước ép)', vi: '셋 -> 세 잔' },
          { kr: '책 네 권 (4 quyển sách)', vi: '넷 -> 네 권' },
          { kr: '고양이 다섯 마리 (5 con mèo)', vi: '다섯 마리' }
        ],
        tip: 'Số đếm: 1(한), 2(두), 3(세), 4(네), 5(다섯), 6(여섯), 7(일곱), 8(여덟), 9(아홉), 10(열).'
      },
      {
        title: '2. Mẫu câu mua hàng lịch sự: ... 주세요 (Cho tôi / Cho cháu...)',
        desc: 'Được sử dụng khi gọi món ở nhà hàng hoặc mua hàng tại tiệm.',
        formula: 'Món đồ + Số lượng + 주세요',
        examples: [
          { kr: '김밥 한 줄 주세요.', vi: 'Cho cháu một phần kimbap ạ.' },
          { kr: '콜라 한 캔 주세요.', vi: 'Cho tôi một lon coca ạ.' },
          { kr: '이것 주세요.', vi: 'Lấy cho tôi cái này ạ.' }
        ],
        tip: 'Hỏi giá tiền: "이거 얼마예요?" (Cái này bao nhiêu tiền ạ?).'
      }
    ],
    reading: {
      title: '과일 가게에서 (Ở cửa hàng hoa quả)',
      contentKr: '어머니와 지수는 과일 가게에 갔습니다. 과일 가게에는 사과, 배, 포도, 바나나가 많이 있었습니다. 어머니는 사과 다섯 개와 바나나 한 송이를 골랐습니다. 사과는 한 개에 1,000원이었습니다. 바나나는 3,000원이었습니다. 어머니는 가게 주인에게 8,000원을 드렸습니다.',
      contentVi: 'Mẹ và Jisoo đã đến cửa hàng hoa quả. Ở tiệm có rất nhiều táo, lê, nho và chuối. Mẹ đã chọn 5 quả táo và một nải chuối. Táo có giá 1.000 won một quả. Chuối có giá 3.000 won. Mẹ đã gửi trả cho bác chủ quán 8.000 won.',
      question: '어머니는 사과를 몇 개 샀습니까? (Mẹ đã mua mấy quả táo?)',
      answer: '다섯 개 샀습니다 (Đã mua 5 quả).'
    },
    quizzes: [
      {
        q: 'Khi nói "3 ly nước hoa quả", cách nói nào đúng chuẩn?',
        options: ['주스 삼 잔', '주스 세 잔', '주스 셋 잔', '주스 세 개'],
        ans: 1,
        exp: 'Ly/tách dùng đơn vị "잔", số 3 thuần Hàn biến đổi thành "세" -> "주스 세 잔".'
      },
      {
        q: 'Đơn vị đếm thích hợp cho "sách, vở" (quyển) là:',
        options: ['개', '명', '권', '병'],
        ans: 2,
        exp: '"권" là đơn vị đếm quyển sách, quyển vở.'
      },
      {
        q: 'Dịch câu sau: "Cho cháu hai chai nước lọc ạ."',
        options: ['물 두 병 주세요.', '물 둘 병 주세요.', '물 이 병 주세요.', '물 두 잔 주세요.'],
        ans: 0,
        exp: 'Chai nước là "병", số 2 biến đổi là "두" -> "물 두 병 주세요".'
      },
      {
        q: 'Để hỏi giá tiền của một món đồ, ta dùng câu hỏi nào?',
        options: ['어디예요?', '몇 시예요?', '얼마예요?', '누구예요?'],
        ans: 2,
        exp: '"얼마예요?" có nghĩa là "Bao nhiêu tiền ạ?".'
      }
    ]
  },

  {
    num: 7,
    book: 1,
    titleKr: '오른쪽으로 가세요.',
    titleVi: 'Cháu hãy rẽ phải',
    topic: 'Phương hướng, chỉ đường, mẫu câu yêu cầu',
    summary: 'Học các từ vựng chỉ phương hướng (trái, phải, trước, sau, thẳng), cách hỏi và chỉ đường và mẫu câu mệnh lệnh yêu cầu lịch sự "-(으)세요".',
    grammarSummary: 'Danh từ phương hướng + (으)로: Chỉ hướng di chuyển (오른쪽으로, 앞으로). Động từ + -(으)세요: Mẫu câu yêu cầu lịch sự "Hãy làm gì".',
    dialogues: [
      {
        speaker1: '관광객 (Khách du lịch)',
        speaker2: '민수 (Minsu)',
        kr1: '실례합니다, 학생. 한국 박물관이 어디에 있어요?',
        vi1: 'Xin lỗi em học sinh, bảo tàng Hàn Quốc ở đâu vậy em?',
        kr2: '저쪽 사거리에서 오른쪽으로 가세요.',
        vi2: 'Ở ngã tư đằng kia, bác hãy rẽ sang bên phải ạ.',
        kr3: '오른쪽으로 간 후에 얼마나 더 가야 하나요?',
        vi3: 'Sau khi rẽ phải thì phải đi thêm bao xa nữa hả em?',
        kr4: '앞으로 100미터쯤 똑바로 가세요. 그러면 왼쪽에 박물관이 보여요. - 고마워요, 학생!',
        vi4: 'Bác hãy đi thẳng về phía trước khoảng 100 mét ạ. Khi đó bảo tàng sẽ ở bên tay trái. - Cảm ơn cháu nhiều nhé!'
      }
    ],
    vocab: [
      { kr: '오른쪽', vi: 'bên phải', type: 'Danh từ', pron: '[오른쪽]' },
      { kr: '왼쪽', vi: 'bên trái', type: 'Danh từ', pron: '[왼쪽]' },
      { kr: '앞 / 뒤', vi: 'phía trước / phía sau', type: 'Danh từ', pron: '[압 / 뒤]' },
      { kr: '위 / 아래 (밑)', vi: 'phía trên / phía dưới', type: 'Danh từ', pron: '[위 / 아래]' },
      { kr: '똑바로 / 곧장', vi: 'đi thẳng', type: 'Phó từ', pron: '[똑빠로 / 곧짱]' },
      { kr: '사거리 / 삼거리', vi: 'ngã tư / ngã ba', type: 'Danh từ', pron: '[사거리 / 삼거리]' },
      { kr: '횡단보도', vi: 'vạch qua đường cho người đi bộ', type: 'Danh từ', pron: '[횡단보도]' },
      { kr: '건너다', vi: 'sang đường / băng qua', type: 'Động từ', pron: '[건너다]' },
      { kr: '돌다', vi: 'quay / rẽ', type: 'Động từ', pron: '[돌다]' },
      { kr: '가세요 / 오세요', vi: 'hãy đi / hãy đến', type: 'Mẫu câu', pron: '[가세요 / 오세요]' },
      { kr: '길', vi: 'con đường', type: 'Danh từ', pron: '[길]' },
      { kr: '근처', vi: 'gần đây / lân cận', type: 'Danh từ', pron: '[근처]' }
    ],
    grammarNotes: [
      {
        title: '1. Tiểu từ chỉ phương hướng "-(으)로" (về hướng / sang phía)',
        desc: 'Gắn sau danh từ chỉ phương hướng để xác định chiều hướng chuyển động.',
        formula: 'Danh từ phương hướng + (으)로 (Có patchim dùng 으로, không patchim hoặc patchim ㄹ dùng 로)',
        examples: [
          { kr: '오른쪽으로 가세요.', vi: 'Hãy đi về phía bên phải / Hãy rẽ phải.' },
          { kr: '왼쪽으로 도세요.', vi: 'Hãy rẽ sang bên trái.' },
          { kr: '앞으로 똑바로 가세요.', vi: 'Hãy đi thẳng về phía trước.' }
        ],
        tip: 'Lưu ý: Nếu danh từ có patchim là "ㄹ" (như 서울) thì chỉ cộng với "로": 서울로 가요.'
      },
      {
        title: '2. Đuôi câu mệnh lệnh yêu cầu lịch sự "-(으)세요" (Hãy...)',
        desc: 'Dùng để yêu cầu, khuyên nhủ hoặc hướng dẫn ai đó làm việc gì một cách lịch sự, nhã nhặn.',
        formula: 'Thân Động từ + -(으)세요 (Có patchim: -으세요; Không patchim: -세요)',
        examples: [
          { kr: '앉다 -> 앉으세요', vi: 'Xin mời ngồi.' },
          { kr: '읽다 -> 읽으세요', vi: 'Xin hãy đọc.' },
          { kr: '보다 -> 보세요', vi: 'Xin hãy nhìn xem.' },
          { kr: '조용히 하세요.', vi: 'Xin hãy giữ trật tự.' }
        ],
        tip: 'Khi chỉ đường: "건너가세요" (Hãy qua đường), "올라가세요" (Hãy đi lên trên).'
      }
    ],
    reading: {
      title: '우체국을 찾는 방법 (Cách tìm bưu điện)',
      contentKr: '여기는 학교 앞입니다. 학교 근처에 우체국이 있습니다. 학교 정문에서 나와서 오른쪽으로 가세요. 사거리가 나오면 횡단보도를 건너세요. 그리고 왼쪽으로 50미터쯤 가세요. 약국 옆에 큰 우체국이 있습니다. 우체국은 찾기 아주 쉽습니다.',
      contentVi: 'Đây là phía trước cổng trường. Gần trường có một bưu điện. Ra khỏi cổng chính của trường, bạn hãy rẽ sang bên phải. Khi gặp ngã tư, hãy băng qua vạch sang đường. Sau đó hãy đi sang bên trái khoảng 50 mét. Bên cạnh tiệm thuốc tây có một bưu điện lớn. Bưu điện rất dễ tìm.',
      question: '우체국은 어디 옆에 있습니까? (Bưu điện nằm ở bên cạnh cái gì?)',
      answer: '약국 옆에 있습니다 (Nằm bên cạnh tiệm thuốc tây).'
    },
    quizzes: [
      {
        q: 'Muốn nói "Hãy rẽ trái", ta dùng câu nào sau đây?',
        options: ['오른쪽으로 가세요.', '왼쪽으로 가세요.', '앞으로 가세요.', '뒤로 가세요.'],
        ans: 1,
        exp: '"왼쪽" là bên trái, "왼쪽으로 가세요" nghĩa là Hãy đi sang bên trái / Hãy rẽ trái.'
      },
      {
        q: 'Chọn dạng chia đúng của động từ "앉다" (ngồi) với đuôi "- (으)세요":',
        options: ['앉세요', '앉으세요', '앉아세요', '앉어세요'],
        ans: 1,
        exp: '"앉다" có phụ âm cuối (patchim ㄵ) nên kết hợp với "-으세요" -> "앉으세요".'
      },
      {
        q: 'Từ "똑바로" trong hướng dẫn chỉ đường mang nghĩa là gì?',
        options: ['Rẽ sang phải', 'Quay lại phía sau', 'Đi thẳng', 'Băng qua đường'],
        ans: 2,
        exp: '"똑바로" có nghĩa là đi thẳng một mạch về phía trước.'
      },
      {
        q: 'Điền tiểu từ thích hợp: "앞____ 똑바로 가세요."',
        options: ['으로', '로', '에', '에서'],
        ans: 0,
        exp: '"앞" có patchim ㅍ nên đi kèm với "으로" -> "앞으로".'
      }
    ]
  },

  {
    num: 8,
    book: 1,
    titleKr: '자전거로 와요.',
    titleVi: 'Mình đến bằng xe đạp',
    topic: 'Phương tiện giao thông, tiểu từ chỉ phương tiện -(으)로',
    summary: 'Học tên các phương tiện giao thông thông dụng (xe buýt, xe đạp, tàu điện ngầm, taxi, máy bay...), cách nói phương tiện di chuyển với tiểu từ "-(으)로" và hỏi thời gian đi lại.',
    grammarSummary: 'Phương tiện giao thông + (으)로: Chỉ phương tiện, công cụ di chuyển (자전거로, 버스로, 지하철로). Đi bộ dùng cụm từ cố định: "걸어서 가요".',
    dialogues: [
      {
        speaker1: '준 (Tuấn)',
        speaker2: '란 (Lan)',
        kr1: '란 씨는 학교에 어떻게 와요?',
        vi1: 'Lan đến trường bằng phương tiện gì thế?',
        kr2: '저는 보통 자전거로 와요. 준 씨는요?',
        vi2: 'Mình thường đến trường bằng xe đạp. Còn Tuấn thì sao?',
        kr3: '우리 집은 학교에서 조금 멀어서 버스로 와요.',
        vi3: 'Nhà mình hơi xa trường nên mình đi bằng xe buýt.',
        kr4: '집에서 학교까지 버스로 얼마나 걸려요? - 20분쯤 걸려요.',
        vi4: 'Từ nhà đến trường đi bằng xe buýt mất bao lâu? - Mất khoảng 20 phút.'
      }
    ],
    vocab: [
      { kr: '자전거', vi: 'xe đạp', type: 'Danh từ', pron: '[자전거]' },
      { kr: '버스', vi: 'xe buýt', type: 'Danh từ', pron: '[버스]' },
      { kr: '지하철', vi: 'tàu điện ngầm', type: 'Danh từ', pron: '[지하철]' },
      { kr: '택시', vi: 'xe taxi', type: 'Danh từ', pron: '[택씨]' },
      { kr: '비행기', vi: 'máy bay', type: 'Danh từ', pron: '[비행기]' },
      { kr: '기차', vi: 'tàu hỏa / xe lửa', type: 'Danh từ', pron: '[기차]' },
      { kr: '오토바이', vi: 'xe máy', type: 'Danh từ', pron: '[오토바이]' },
      { kr: '배', vi: 'tàu thủy / thuyền', type: 'Danh từ', pron: '[배]' },
      { kr: '걸어서 가다/오다', vi: 'đi bộ đi / đi bộ đến', type: 'Cụm ĐT', pron: '[거러서 가다]' },
      { kr: '타다 / 내리다', vi: 'lên xe / xuống xe', type: 'Động từ', pron: '[타다 / 내리다]' },
      { kr: '얼마나 걸려요?', vi: 'Mất bao lâu thời gian?', type: 'Mẫu câu', pron: '[얼마나 걸려요]' },
      { kr: '시간 / 분', vi: 'tiếng (giờ đồng hồ) / phút', type: 'Danh từ', pron: '[시간 / 분]' }
    ],
    grammarNotes: [
      {
        title: '1. Tiểu từ chỉ phương tiện, công cụ "-(으)로" (bằng xe gì, bằng cách nào)',
        desc: 'Gắn sau danh từ chỉ phương tiện giao thông hoặc phương thức để chỉ cách thức di chuyển.',
        formula: 'Phương tiện + (으)로 (Có patchim: 으로; Không patchim hoặc patchim ㄹ: 로)',
        examples: [
          { kr: '자전거로 학교에 가요.', vi: 'Tôi đến trường bằng xe đạp.' },
          { kr: '지하철로 출근해요. (지하철 có patchim ㄹ nên cộng 로)', vi: 'Tôi đi làm bằng tàu điện ngầm.' },
          { kr: '비행기로 제주도에 갔어요.', vi: 'Tôi đã đến đảo Jeju bằng máy bay.' }
        ],
        tip: 'Lưu ý đặc biệt: Khi đi bộ, người Hàn KHÔNG nói "발로 가요" mà dùng cụm từ "걸어서 가요/와요".'
      },
      {
        title: '2. Mẫu câu hỏi thời gian di chuyển: 얼마나 걸려요?',
        desc: 'Hỏi khoảng thời gian cần thiết để đi từ điểm A đến điểm B.',
        formula: 'Từ nơi A + 에서 + Đến nơi B + 까지 + Phương tiện + (으)로 얼마나 걸려요?',
        examples: [
          { kr: '하노이에서 다낭까지 비행기로 1시간 20분 걸려요.', vi: 'Từ Hà Nội đến Đà Nẵng đi bằng máy bay mất 1 tiếng 20 phút.' },
          { kr: '집에서 학교까지 걸어서 10분 걸려요.', vi: 'Từ nhà đến trường đi bộ mất 10 phút.' }
        ],
        tip: 'Thời gian dùng số thuần Hàn: 1시간 (한 시간 - 1 tiếng), 2시간 (두 시간 - 2 tiếng).'
      }
    ],
    reading: {
      title: '한국 학생들의 등교 (Học sinh Hàn Quốc đến trường)',
      contentKr: '한국 학생들은 학교에 어떻게 갈까요? 집이 학교와 가까운 학생들은 걸어서 학교에 갑니다. 자전거를 타고 오는 학생들도 있습니다. 집이 먼 학생들은 보통 버스나 지하철로 학교에 갑니다. 서울에는 지하철이 아주 편리해서 많은 사람들이 지하철로 이동합니다.',
      contentVi: 'Học sinh Hàn Quốc đến trường bằng cách nào? Những bạn học sinh có nhà gần trường thường đi bộ đến trường. Cũng có những bạn đến bằng xe đạp. Những bạn nhà xa thường đi học bằng xe buýt hoặc tàu điện ngầm. Ở Seoul tàu điện ngầm rất tiện lợi nên nhiều người di chuyển bằng tàu điện ngầm.',
      question: '집이 학교와 가까운 학생들은 보통 어떻게 학교에 갑니까? (Học sinh nhà gần trường thường đến trường bằng cách nào?)',
      answer: '걸어서 학교에 갑니다 (Đi bộ đến trường).'
    },
    quizzes: [
      {
        q: 'Điền tiểu từ thích hợp: "저는 매일 지하철____ 회사에 가요."',
        options: ['로', '으로', '에', '에서'],
        ans: 0,
        exp: '"지하철" có phụ âm cuối là "ㄹ" nên chỉ kết hợp với "로" (không dùng 으로) -> 지하철로.'
      },
      {
        q: 'Cách nói nào đúng để diễn đạt "Tôi đi bộ đến trường"?',
        options: ['발로 학교에 가요.', '다리로 학교에 가요.', '걸어서 학교에 가요.', '걷기로 학교에 가요.'],
        ans: 2,
        exp: 'Người Hàn dùng cụm từ cố định "걸어서 가요" để chỉ việc đi bộ.'
      },
      {
        q: '"Từ nhà đến rạp chiếu phim mất 30 phút" được viết là:',
        options: ['집에서 영화관까지 30분 걸려요.', '집까지 영화관에서 30분 가요.', '집하고 영화관에 30분 걸려요.', '집으로 영화관으로 30분 타요.'],
        ans: 0,
        exp: 'Cấu trúc nơi A에서 nơi B까지: "집에서 영화관까지 30분 걸려요".'
      },
      {
        q: 'Phương tiện "비행기" có nghĩa là gì?',
        options: ['Tàu hỏa', 'Máy bay', 'Tàu thủy', 'Xe buýt'],
        ans: 1,
        exp: '"비행기" chính là máy bay.'
      }
    ]
  },

  // TẬP 2 (BÀI 9 - 16)
  {
    num: 9,
    book: 2,
    titleKr: '7시부터 8시 30분까지 공부해요.',
    titleVi: 'Mình học từ 7 giờ đến 8 giờ 30 phút',
    topic: 'Các thứ trong tuần, thời gian biểu, cấu trúc 부터 ... 까지',
    summary: 'Nắm vững tên các thứ trong tuần (từ thứ Hai đến Chủ nhật), cách biểu đạt khoảng thời gian xuất phát và kết thúc với cặp tiểu từ "부터 ... 까지" (từ ... đến ...).',
    grammarSummary: 'Thời gian 1 + 부터 + Thời gian 2 + 까지: Chỉ mốc thời gian bắt đầu và kết thúc của một hoạt động. Khi dùng cho địa điểm: Nơi chốn + 에서 + Nơi chốn + 까지.',
    dialogues: [
      {
        speaker1: '지수 (Jisoo)',
        speaker2: '민수 (Minsu)',
        kr1: '민수 씨는 저녁에 몇 시부터 몇 시까지 공부해요?',
        vi1: 'Minsu ơi, buổi tối cậu học từ mấy giờ đến mấy giờ thế?',
        kr2: '저는 저녁 7시부터 8시 30분까지 공부해요.',
        vi2: 'Mình học từ 7 giờ tối đến 8 giờ 30 phút.',
        kr3: '월요일부터 금요일까지 매일 공부해요?',
        vi3: 'Cậu học bài mỗi ngày từ thứ Hai đến thứ Sáu luôn à?',
        kr4: '네, 평일에는 매일 공부하고 주말에는 푹 쉬어요. - 대단해요!',
        vi4: 'Ừ, ngày thường mình học mỗi ngày còn cuối tuần thì mình nghỉ ngơi thoải mái. - Cậu cừ thật đấy!'
      }
    ],
    vocab: [
      { kr: '월요일 / 화요일', vi: 'thứ Hai / thứ Ba', type: 'Danh từ', pron: '[워료일 / 화요일]' },
      { kr: '수요일 / 목요일', vi: 'thứ Tư / thứ Năm', type: 'Danh từ', pron: '[수요일 / 모교일]' },
      { kr: '금요일 / 토요일', vi: 'thứ Sáu / thứ Bảy', type: 'Danh từ', pron: '[그묘일 / 토요일]' },
      { kr: '일요일', vi: 'Chủ nhật', type: 'Danh từ', pron: '[이료일]' },
      { kr: '평일 / 주말', vi: 'ngày trong tuần / cuối tuần', type: 'Danh từ', pron: '[평일 / 주말]' },
      { kr: '시간표', vi: 'thời khóa biểu / lịch trình', type: 'Danh từ', pron: '[시간표]' },
      { kr: '부터', vi: 'từ (mốc thời gian bắt đầu)', type: 'Tiểu từ', pron: '[부터]' },
      { kr: '까지', vi: 'đến (mốc thời gian kết thúc)', type: 'Tiểu từ', pron: '[까지]' },
      { kr: '점심시간', vi: 'giờ ăn trưa / giờ nghỉ trưa', type: 'Danh từ', pron: '[점심시간]' },
      { kr: '쉬다', vi: 'nghỉ ngơi', type: 'Động từ', pron: '[쉬다]' },
      { kr: '매일', vi: 'mỗi ngày / hằng ngày', type: 'Phó từ', pron: '[매일]' },
      { kr: '방과 후', vi: 'sau giờ tan trường', type: 'Danh từ', pron: '[방과 후]' }
    ],
    grammarNotes: [
      {
        title: '1. Cấu trúc thời gian: Danh từ thời gian + 부터 ... 까지 (Từ ... đến ...)',
        desc: '"부터" gắn vào danh từ thời gian bắt đầu, còn "까지" gắn vào danh từ thời gian kết thúc.',
        formula: 'Thời gian bắt đầu + 부터 + Thời gian kết thúc + 까지 + Động từ',
        examples: [
          { kr: '9시부터 12시까지 수업이 있어요.', vi: 'Có tiết học từ 9 giờ đến 12 giờ.' },
          { kr: '월요일부터 금요일까지 학교에 가요.', vi: 'Tôi đi học từ thứ Hai đến thứ Sáu.' },
          { kr: '1시부터 2시까지 점심시간이에요.', vi: 'Từ 1 giờ đến 2 giờ là giờ nghỉ trưa.' }
        ],
        tip: 'Phân biệt: Với thời gian ta dùng "부터 ... 까지", nhưng với địa điểm ta thường dùng "에서 ... 까지" (Ví dụ: 하노이에서 서울까지).'
      },
      {
        title: '2. Cách ghi nhớ 7 thứ trong tuần theo ngũ hành tự nhiên',
        desc: 'Tên các thứ trong tiếng Hàn bắt nguồn từ Mặt trăng, Lửa, Nước, Cây cối, Kim loại, Đất, Mặt trời:',
        formula: 'Nguyệt(월) - Hỏa(화) - Thủy(수) - Mộc(목) - Kim(금) - Thổ(토) - Nhật(일)',
        examples: [
          { kr: '월요일 [워료일]', vi: 'Thứ Hai (Mặt trăng / Nguyệt)' },
          { kr: '화요일 [화요일]', vi: 'Thứ Ba (Lửa / Hỏa)' },
          { kr: '수요일 [수요일]', vi: 'Thứ Tư (Nước / Thủy)' },
          { kr: '목요일 [모교일]', vi: 'Thứ Năm (Cây / Mộc)' },
          { kr: '금요일 [그묘일]', vi: 'Thứ Sáu (Vàng / Kim)' },
          { kr: '토요일 [토요일]', vi: 'Thứ Bảy (Đất / Thổ)' },
          { kr: '일요일 [이료일]', vi: 'Chủ nhật (Mặt trời / Nhật)' }
        ],
        tip: 'Chú ý hiện tượng nối âm khi phát âm: 월요일 đọc là [워료일], 목요일 đọc là [모교일], 금요일 đọc là [그묘일], 일요일 đọc là [이료일].'
      }
    ],
    reading: {
      title: '지수의 방과 후 일정 (Lịch trình sau giờ học của Jisoo)',
      contentKr: '지수의 학교 수업은 오후 1시에 끝납니다. 수업이 끝난 후에 지수는 다양한 활동을 합니다. 월요일과 수요일에는 오후 2시부터 3시까지 피아노를 배웁니다. 화요일과 목요일에는 3시부터 4시 30분까지 수영을 연습합니다. 금요일에는 도서관에서 책을 읽습니다. 주말에는 가족과 함께 시간을 보냅니다.',
      contentVi: 'Tiết học ở trường của Jisoo kết thúc lúc 1 giờ chiều. Sau khi tan học, Jisoo tham gia nhiều hoạt động đa dạng. Vào thứ Hai và thứ Tư, bạn học đàn piano từ 2 giờ đến 3 giờ chiều. Vào thứ Ba và thứ Năm, bạn tập bơi từ 3 giờ đến 4 giờ 30 phút. Thứ Sáu bạn đọc sách ở thư viện. Cuối tuần bạn dành thời gian bên gia đình.',
      question: '지수는 화요일에 몇 시부터 몇 시까지 수영을 합니까? (Jisoo tập bơi vào thứ Ba từ mấy giờ đến mấy giờ?)',
      answer: '오후 3시부터 4시 30분까지 합니다 (Từ 3 giờ đến 4 giờ 30 phút chiều).'
    },
    quizzes: [
      {
        q: 'Điền cặp từ thích hợp: "우리는 1시____ 2시____ 점심을 먹어요."',
        options: ['부터 / 까지', '에서 / 까지', '하고 / 에', '로 / 에'],
        ans: 0,
        exp: 'Chỉ khoảng thời gian từ mấy giờ đến mấy giờ dùng cặp từ "부터 ... 까지".'
      },
      {
        q: '"Thứ Năm" trong tiếng Hàn là thứ nào?',
        options: ['화요일', '수요일', '목요일', '금요일'],
        ans: 2,
        exp: '"목요일" (Mộc diệu nhật) là thứ Năm.'
      },
      {
        q: 'Từ "일요일" (Chủ nhật) được phát âm chuẩn nối âm là:',
        options: ['[일요일]', '[이료일]', '[일료일]', '[이요일]'],
        ans: 1,
        exp: 'Phụ âm ㄹ gặp nguyên âm 요 nối âm thành [이료일].'
      },
      {
        q: 'Câu nào nói về lịch làm việc: "Từ thứ Hai đến thứ Sáu"?',
        options: ['월요일에서 금요일에', '월요일부터 금요일까지', '월요일하고 금요일로', '월요일도 금요일도'],
        ans: 1,
        exp: '"월요일부터 금요일까지" nghĩa là từ thứ Hai đến thứ Sáu.'
      }
    ]
  },

  {
    num: 10,
    book: 2,
    titleKr: '열심히 공부해야 해요.',
    titleVi: 'Chúng em phải học chăm chỉ ạ',
    topic: 'Nội quy trường học, nghĩa vụ và yêu cầu với -아/어/여야 되다/하다',
    summary: 'Tìm hiểu về các nội quy trường học và nghĩa vụ của học sinh (đến đúng giờ, làm bài tập, giữ trật tự) thông qua cấu trúc ngữ pháp bắt buộc "-아/어/여야 하다/되다" (phải làm gì).',
    grammarSummary: 'Thân Động từ + -아/어/여야 하다 (hoặc 되다): Biểu thị nghĩa vụ, bổn phận hoặc việc bắt buộc phải làm. Thân từ có ㅏ, ㅗ dùng -아야 하다; còn lại dùng -어야 하다; đuôi 하다 thành 해야 하다.',
    dialogues: [
      {
        speaker1: '선생님 (Thầy giáo)',
        speaker2: '학생들 (Các bạn học sinh)',
        kr1: '여러분, 새 학기가 시작되었어요. 학교에서는 교칙을 잘 지켜야 해요.',
        vi1: 'Các em ơi, học kỳ mới đã bắt đầu rồi. Ở trường chúng ta phải tuân thủ tốt nội quy nhé.',
        kr2: '선생님, 학교에서 무엇을 지켜야 하나요?',
        vi2: 'Thưa thầy, ở trường chúng em phải tuân thủ những điều gì ạ?',
        kr3: '수업 시간에 늦지 않아야 하고, 열심히 공부해야 해요. 그리고 교실에서는 조용히 해야 해요.',
        vi3: 'Các em không được đi học muộn, phải chăm chỉ học tập. Và trong lớp học phải giữ trật tự.',
        kr4: '네, 알겠습니다! 매일 숙제도 잘해야 해요? - 그럼요, 숙제도 꼭 해야 해요.',
        vi4: 'Dạ, chúng em hiểu rồi ạ! Hằng ngày cũng phải làm bài tập đầy đủ đúng không thầy? - Đương nhiên rồi, bài tập cũng nhất định phải làm nhé.'
      }
    ],
    vocab: [
      { kr: '열심히', vi: 'chăm chỉ / siêng năng', type: 'Phó từ', pron: '[열심히]' },
      { kr: '교칙 / 규칙', vi: 'nội quy trường học / quy tắc', type: 'Danh từ', pron: '[교칙 / 규칙]' },
      { kr: '지키다', vi: 'tuân thủ / giữ gìn', type: 'Động từ', pron: '[지키다]' },
      { kr: '지각하다', vi: 'đi muộn / trễ giờ', type: 'Động từ', pron: '[지가카다]' },
      { kr: '일찍 오다', vi: 'đến sớm', type: 'Cụm ĐT', pron: '[일찍 오다]' },
      { kr: '조용히 하다', vi: 'giữ yên lặng / trật tự', type: 'Cụm ĐT', pron: '[조용히 하다]' },
      { kr: '떠들다', vi: 'làm ồn / nói chuyện riêng', type: 'Động từ', pron: '[떠들다]' },
      { kr: '청소하다', vi: 'vệ sinh / dọn dẹp', type: 'Động từ', pron: '[청소하다]' },
      { kr: '손을 들다', vi: 'giơ tay phát biểu', type: 'Cụm ĐT', pron: '[소늘 들다]' },
      { kr: '인사하다', vi: 'chào hỏi lễ phép', type: 'Động từ', pron: '[인사하다]' },
      { kr: '숙제를 내다', vi: 'nộp bài tập về nhà', type: 'Cụm ĐT', pron: '[숙쩨를 내다]' },
      { kr: '꼭', vi: 'nhất định / chắc chắn', type: 'Phó từ', pron: '[꼭]' }
    ],
    grammarNotes: [
      {
        title: '1. Cấu trúc nghĩa vụ: -아/어/여야 하다 (phải làm gì)',
        desc: 'Diễn tả một hành động mang tính nghĩa vụ, bổn phận hoặc cần thiết bắt buộc phải thực hiện.',
        formula: 'Thân Động từ + -아/어/여야 하다 (hoặc 되다)',
        examples: [
          { kr: '학생은 열심히 공부해야 해요.', vi: 'Học sinh thì phải học tập chăm chỉ.' },
          { kr: '내일 시험이 있어서 일찍 자야 해요. (자다 -> 자야 해요)', vi: 'Ngày mai có bài kiểm tra nên tôi phải đi ngủ sớm.' },
          { kr: '수업 전에 교실을 청소해야 해요.', vi: 'Trước giờ học phải dọn dẹp lớp học.' }
        ],
        tip: 'Quy tắc kết hợp giống đuôi -아요/어요: gặp ㅏ/ㅗ dùng -아야 하다 (가야 해요, 봐야 해요); nguyên âm khác dùng -어야 하다 (먹어야 해요, 읽어야 해요); 하다 đổi thành 해야 해요.'
      },
      {
        title: '2. Dạng phủ định: -지 않아야 하다 (không được / không nên làm)',
        desc: 'Diễn tả điều cấm kỵ hoặc không được phép làm.',
        formula: 'Thân Động từ + -지 않아야 하다',
        examples: [
          { kr: '수업 시간에 떠들지 않아야 해요.', vi: 'Trong giờ học không được làm ồn.' },
          { kr: '학교에 지각하지 않아야 해요.', vi: 'Không được đi học muộn.' }
        ],
        tip: 'Trong đời sống hằng ngày, "-아/어야 되다" cũng được dùng phổ biến tương đương với "-아/어야 하다".'
      }
    ],
    reading: {
      title: '우리 교실의 규칙 (Nội quy lớp học chúng mình)',
      contentKr: '우리 5학년 1반에는 모두가 지켜야 할 규칙이 있습니다. 첫째, 아침 8시 20분까지 교실에 와야 합니다. 둘째, 선생님과 친구들에게 바르게 인사해야 합니다. 셋째, 수업 시간에는 손을 들고 말해야 합니다. 넷째, 교실을 깨끗하게 청소해야 합니다. 우리 반 친구들은 모두 규칙을 잘 지킵니다.',
      contentVi: 'Lớp 5A1 của chúng mình có những nội quy mà mọi người đều phải tuân thủ. Thứ nhất, phải đến lớp trước 8 giờ 20 phút sáng. Thứ hai, phải chào hỏi lễ phép với thầy cô và bạn bè. Thứ ba, trong giờ học phải giơ tay phát biểu trước khi nói. Thứ tư, phải dọn dẹp vệ sinh lớp học thật sạch sẽ. Các bạn lớp mình ai cũng tuân thủ tốt nội quy.',
      question: '수업 시간에 말을 할 때는 어떻게 해야 합니까? (Khi nói trong giờ học thì phải làm thế nào?)',
      answer: '손을 들고 말해야 합니다 (Phải giơ tay trước khi nói).'
    },
    quizzes: [
      {
        q: 'Chia động từ "먹다" (ăn) với cấu trúc "phải làm gì" (-아/어야 해요):',
        options: ['먹아야 해요', '먹어야 해요', '먹해야 해요', '먹여야 해요'],
        ans: 1,
        exp: '"먹다" có nguyên âm ㅓ (không phải ㅏ hay ㅗ) nên kết hợp với "-어야 해요" -> "먹어야 해요".'
      },
      {
        q: 'Dịch câu: "Học sinh phải đến trường đúng giờ."',
        options: ['학생은 제시간에 학교에 가야 해요.', '학생은 학교에 안 가요.', '학생은 학교에 가고 싶어요.', '학생은 학교에 갈 수 있어요.'],
        ans: 0,
        exp: '"가야 해요" thể hiện nghĩa vụ "phải đến / phải đi".'
      },
      {
        q: 'Từ nào đồng nghĩa với "giữ trật tự, yên lặng"?',
        options: ['떠들다', '조용히 하다', '노래하다', '운동하다'],
        ans: 1,
        exp: '"조용히 하다" nghĩa là giữ im lặng, giữ trật tự.'
      },
      {
        q: 'Động từ "운동하다" khi chuyển sang dạng "phải tập thể dục" sẽ là:',
        options: ['운동아야 해요', '운동어야 해요', '운동해야 해요', '운동하지 않아요'],
        ans: 2,
        exp: 'Các động từ có "하다" chuyển thành "해야 해요" -> "운동해야 해요".'
      }
    ]
  },

  {
    num: 11,
    book: 2,
    titleKr: '캠핑을 가기 전에 무엇을 준비해야 해요?',
    titleVi: 'Trước khi đi cắm trại, chúng em phải chuẩn bị gì ạ?',
    topic: 'Hoạt động ngoại khóa, chuẩn bị đồ dùng, cấu trúc -기 전에',
    summary: 'Chuẩn bị cho các hoạt động dã ngoại ngoài trời và học cấu trúc thời gian biểu thị trình tự trước sau "-기 전에" (trước khi làm một hành động nào đó).',
    grammarSummary: 'Động từ + -기 전에: Mang nghĩa "trước khi làm V". Luôn gắn trực tiếp vào thân động từ bất kể có patchim hay không.',
    dialogues: [
      {
        speaker1: '민 (Minh)',
        speaker2: '지수 (Jisoo)',
        kr1: '지수야, 이번 주말에 학교에서 캠핑을 가잖아. 가기 전에 무엇을 준비해야 해?',
        vi1: 'Jisoo ơi, cuối tuần này trường mình đi cắm trại mà. Trước khi đi chúng mình phải chuẩn bị những gì thế?',
        kr2: '텐트하고 침낭, 그리고 밤에 쓸 손전등을 꼭 챙겨야 해.',
        vi2: 'Phải soạn sẵn lều trại, túi ngủ và nhất định phải mang đèn pin dùng cho ban đêm nhé.',
        kr3: '물하고 간단한 간식도 가져가야 하지?',
        vi3: 'Nước uống và đồ ăn vặt đơn giản cũng phải mang theo đúng không cậu?',
        kr4: '응, 맞아. 그리고 출발하기 전에 날씨를 꼭 확인해야 해!',
        vi4: 'Ừ, đúng rồi. Và trước khi xuất phát tụi mình nhất định phải kiểm tra thời tiết nữa đấy!'
      }
    ],
    vocab: [
      { kr: '캠핑', vi: 'cắm trại / dã ngoại', type: 'Danh từ', pron: '[캠핑]' },
      { kr: '야외 활동', vi: 'hoạt động ngoài trời', type: 'Danh từ', pron: '[야ː외 활똥]' },
      { kr: '텐트', vi: 'lều cắm trại', type: 'Danh từ', pron: '[텐트]' },
      { kr: '침낭', vi: 'túi ngủ du lịch', type: 'Danh từ', pron: '[침낭]' },
      { kr: '손전등', vi: 'đèn pin cầm tay', type: 'Danh từ', pron: '[손전등]' },
      { kr: '배낭', vi: 'ba lô', type: 'Danh từ', pron: '[배낭]' },
      { kr: '물병', vi: 'bình đựng nước', type: 'Danh từ', pron: '[물뼝]' },
      { kr: '구급약', vi: 'thuốc y tế cấp cứu', type: 'Danh từ', pron: '[구ː그뱍]' },
      { kr: '준비하다', vi: 'chuẩn bị', type: 'Động từ', pron: '[준ː비하다]' },
      { kr: '챙기다', vi: 'soạn đồ / mang theo', type: 'Động từ', pron: '[챙기다]' },
      { kr: '출발하다', vi: 'xuất phát / khởi hành', type: 'Động từ', pron: '[출발하다]' },
      { kr: '확인하다', vi: 'kiểm tra / xác nhận', type: 'Động từ', pron: '[화긴하다]' }
    ],
    grammarNotes: [
      {
        title: '1. Cấu trúc trình tự thời gian: Động từ + -기 전에 (Trước khi...)',
        desc: 'Diễn tả một hành động xảy ra trước một hành động hoặc thời điểm khác.',
        formula: 'Thân Động từ + -기 전에',
        examples: [
          { kr: '밥을 먹기 전에 손을 씻어요.', vi: 'Trước khi ăn cơm tôi rửa tay.' },
          { kr: '자기 전에 양치질을 해요.', vi: 'Trước khi đi ngủ tôi đánh răng.' },
          { kr: '캠핑을 가기 전에 텐트를 준비했어요.', vi: 'Trước khi đi cắm trại tôi đã chuẩn bị lều.' }
        ],
        tip: 'Nếu đi với Danh từ thì dùng dạng "Danh từ + 전에" (Ví dụ: 수업 전에 - Trước giờ học, 식사 전에 - Trước bữa ăn).'
      },
      {
        title: '2. Cách dùng từ "챙기다" khi chuẩn bị đồ đạc',
        desc: '"챙기다" có nghĩa là gom góp, mang theo đầy đủ, không để quên vật dụng cần thiết.',
        formula: 'Đồ dùng + 을/를 챙기다',
        examples: [
          { kr: '우산을 챙기세요.', vi: 'Hãy nhớ mang theo ô (dù).' },
          { kr: '숙제를 가방에 잘 챙겼어요.', vi: 'Tôi đã cất cẩn thận bài tập vào cặp rồi.' }
        ],
        tip: 'Người Hàn rất hay chúc nhau: "건강 잘 챙기세요" (Hãy luôn chú ý giữ gìn sức khỏe nhé).'
      }
    ],
    reading: {
      title: '신나는 숲속 캠핑 준비 (Chuẩn bị cắm trại trong rừng vui vẻ)',
      contentKr: '내일은 우리 반 친구들이 숲으로 캠핑을 가는 날입니다. 친구들은 각자 맡은 물건을 준비하기로 했습니다. 민수는 큰 텐트와 손전등을 챙겼습니다. 지수는 친구들이 마실 시원한 물과 간식을 챙겼습니다. 선생님께서는 비상약과 구급상자를 준비하셨습니다. 모두 출발하기 전에 배낭을 다시 한번 확인했습니다.',
      contentVi: 'Ngày mai là ngày các bạn lớp mình đi cắm trại trong rừng. Mỗi bạn quyết định chuẩn bị những món đồ được phân công. Minsu đã mang theo lều to và đèn pin. Jisoo mang theo nước mát và bánh ăn vặt cho các bạn uống. Thầy giáo đã chuẩn bị sẵn thuốc dự phòng và hộp sơ cứu y tế. Mọi người đều kiểm tra lại ba lô một lần nữa trước khi xuất phát.',
      question: '선생님께서는 무엇을 준비하셨습니까? (Thầy giáo đã chuẩn bị món đồ gì?)',
      answer: '비상약과 구급상자를 준비하셨습니다 (Thầy đã chuẩn bị thuốc dự phòng và hộp sơ cứu).'
    },
    quizzes: [
      {
        q: 'Điền cấu trúc thích hợp: "밥을 먹____ 손을 깨끗이 씻어야 해요."',
        options: ['기 전에', '은 후에', '으면서', '지만'],
        ans: 0,
        exp: '"Trước khi ăn cơm" dùng cấu trúc "먹기 전에".'
      },
      {
        q: 'Nếu đi cùng Danh từ "수업" (giờ học), ta dùng dạng nào để nói "Trước giờ học"?',
        options: ['수업하기 전에', '수업 전에', '수업은 전에', '수업으로 전에'],
        ans: 1,
        exp: 'Với danh từ, chỉ cần gắn trực tiếp "전에" -> "수업 전에".'
      },
      {
        q: 'Vật dụng nào sau đây có nghĩa là "túi ngủ"?',
        options: ['텐트', '배낭', '침낭', '손전등'],
        ans: 2,
        exp: '"침낭" (tẩm nang) là túi ngủ dã ngoại.'
      },
      {
        q: '"자기 전에 책을 읽어요" có nghĩa là gì?',
        options: ['Đọc sách sau khi ngủ dậy.', 'Đọc sách trước khi đi ngủ.', 'Đọc sách trong khi ngủ.', 'Không đọc sách trước khi ngủ.'],
        ans: 1,
        exp: '"자기 전에" nghĩa là trước khi ngủ, "책을 읽어요" là đọc sách.'
      }
    ]
  },

  {
    num: 12,
    book: 2,
    titleKr: '그러면 영어를 같이 배웁시다.',
    titleVi: 'Vậy thì cùng học tiếng Anh nhé!',
    topic: 'Hoạt động trong kỳ nghỉ, lời đề nghị cùng làm việc với -(으)ㅂ시다',
    summary: 'Lên kế hoạch cho kỳ nghỉ hè, thảo luận các khóa học ngoại khóa yêu thích và rủ rê, đề nghị bạn bè cùng làm việc gì đó bằng đuôi câu "-(으)ㅂ시다" (chúng ta hãy cùng...).',
    grammarSummary: 'Thân Động từ + -(으)ㅂ시다: Mẫu câu đề nghị, rủ rê thực hiện hành động chung. Có patchim dùng -읍시다; không patchim dùng -ㅂ시다. Thường đi kèm với phó từ "같이" hoặc "함께" (cùng nhau).',
    dialogues: [
      {
        speaker1: '란 (Lan)',
        speaker2: '민수 (Minsu)',
        kr1: '민수 씨, 이번 여름방학에 특별한 계획이 있어요?',
        vi1: 'Minsu ơi, kỳ nghỉ hè lần này cậu có kế hoạch đặc biệt gì chưa?',
        kr2: '저는 외국어 학원에 다니고 싶어요. 란 씨는요?',
        vi2: 'Mình muốn đi học ở trung tâm ngoại ngữ. Còn Lan thì sao?',
        kr3: '저도 방학 동안 영어를 더 열심히 공부하고 싶어요.',
        vi3: 'Mình cũng muốn học tiếng Anh chăm chỉ hơn trong suốt kỳ nghỉ hè.',
        kr4: '좋아요! 그러면 우리 영어를 같이 배웁시다. 내일 학원에 같이 가요! - 좋아요, 내일 만나요!',
        vi4: 'Tuyệt quá! Vậy thì chúng mình cùng học tiếng Anh nhé. Ngày mai cùng đến trung tâm nha! - Nhất trí, mai gặp lại nhé!'
      }
    ],
    vocab: [
      { kr: '방학', vi: 'kỳ nghỉ học', type: 'Danh từ', pron: '[방학]' },
      { kr: '여름방학 / 겨울방학', vi: 'nghỉ hè / nghỉ đông', type: 'Danh từ', pron: '[여름방학 / 겨울방학]' },
      { kr: '계획', vi: 'kế hoạch', type: 'Danh từ', pron: '[계ː획]' },
      { kr: '같이 / 함께', vi: 'cùng nhau / cùng với', type: 'Phó từ', pron: '[가치 / 함께]' },
      { kr: '영어', vi: 'tiếng Anh', type: 'Danh từ', pron: '[영어]' },
      { kr: '한국어', vi: 'tiếng Hàn', type: 'Danh từ', pron: '[한구거]' },
      { kr: '수영', vi: 'môn bơi lội', type: 'Danh từ', pron: '[수영]' },
      { kr: '피아노', vi: 'đàn piano', type: 'Danh từ', pron: '[피아노]' },
      { kr: '그림을 그리다', vi: 'vẽ tranh', type: 'Cụm ĐT', pron: '[그리믈 그리다]' },
      { kr: '배우다', vi: 'học / học tập môn gì', type: 'Động từ', pron: '[배우다]' },
      { kr: '연습하다', vi: 'luyện tập', type: 'Động từ', pron: '[연ː습하다]' },
      { kr: '신청하다', vi: 'đăng ký', type: 'Động từ', pron: '[신청하다]' }
    ],
    grammarNotes: [
      {
        title: '1. Đuôi câu đề nghị, rủ rê: -(으)ㅂ시다 (Chúng ta hãy cùng...)',
        desc: 'Dùng khi người nói muốn đề xuất hoặc rủ người nghe cùng làm một hành động nào đó.',
        formula: 'Thân Động từ + -(으)ㅂ시다 (Có patchim: -읍시다; Không patchim: -ㅂ시다)',
        examples: [
          { kr: '가다 -> 갑시다 (Chúng ta đi thôi!)', vi: 'Không patchim thêm -ㅂ시다' },
          { kr: '먹다 -> 먹읍시다 (Cùng ăn nào!)', vi: 'Có patchim thêm -읍시다' },
          { kr: '배우다 -> 배웁시다 (Cùng học nhé!)', vi: '배우 + ㅂ시다 = 배웁시다' },
          { kr: '도서관에서 같이 공부합시다.', vi: 'Chúng mình hãy cùng học ở thư viện nhé.' }
        ],
        tip: 'Lưu ý: Đuôi "-(으)ㅂ시다" dùng với bạn bè đồng trang lứa hoặc người dưới. Không dùng đuôi này để rủ người lớn tuổi hơn (với người lớn dùng mẫu câu kính cẩn hơn như "-시겠어요?").'
      },
      {
        title: '2. Phó từ "같이" và cách phát âm biến âm [가치]',
        desc: '"같이" mang nghĩa là cùng nhau. Khi phát âm, patchim ㅌ gặp nguyên âm ㅣ bị biến âm hàm ếch hóa (구개음화) đọc thành [ㅊ].',
        formula: '같이 + Động từ',
        examples: [
          { kr: '같이 가요. [가치 가요]', vi: 'Cùng đi nào.' },
          { kr: '같이 밥을 먹어요. [가치 바블 머거요]', vi: 'Cùng ăn cơm nhé.' }
        ],
        tip: 'Quy tắc phát âm: viết là "같이" nhưng phát âm chuẩn là [가치].'
      }
    ],
    reading: {
      title: '신나는 여름방학 계획 (Kế hoạch nghỉ hè sôi động)',
      contentKr: '내일부터 신나는 여름방학이 시작됩니다. 민수와 친구들은 모여서 방학 계획을 이야기했습니다. 민수는 "우리 이번 방학에 건강을 위해 수영을 같이 배웁시다"라고 말했습니다. 지수는 "수영도 배우고 주말에는 산으로 등산도 갑시다"라고 덧붙였습니다. 친구들은 모두 박수를 치며 즐거운 방학을 기대했습니다.',
      contentVi: 'Từ ngày mai kỳ nghỉ hè sôi động bắt đầu. Minsu và các bạn tụ họp lại nói về kế hoạch nghỉ hè. Minsu nói: "Kỳ nghỉ này tụi mình hãy cùng học bơi vì sức khỏe nhé". Jisoo nói thêm: "Vừa học bơi, cuối tuần tụi mình hãy cùng đi leo núi nữa nha". Các bạn đều vỗ tay tán thành và mong chờ một kỳ nghỉ hè thật vui.',
      question: '민수는 친구들에게 방학 때 무엇을 같이 배우자고 했습니까? (Minsu đã rủ các bạn cùng học môn gì vào kỳ nghỉ?)',
      answer: '수영을 같이 배우자고 했습니다 (Rủ cùng học môn bơi lội).'
    },
    quizzes: [
      {
        q: 'Chia động từ "공부하다" (học tập) sang đuôi câu đề nghị "-(으)ㅂ시다":',
        options: ['공부합시다', '공부읍시다', '공부하읍시다', '공부하ㅂ시다'],
        ans: 0,
        exp: '"공부하다" có thân từ "공부하" không có patchim nên gắn "-ㅂ시다" -> "공부합시다".'
      },
      {
        q: 'Từ "같이" (cùng nhau) được phát âm chính xác là:',
        options: ['[갇이]', '[가티]', '[가치]', '[가지]'],
        ans: 2,
        exp: 'Theo quy tắc biến âm vòm họng (구개음화), ㅌ khi gặp ㅣ sẽ phát âm thành [ㅊ] -> [가치].'
      },
      {
        q: 'Chọn câu có ý nghĩa "Chúng ta hãy cùng xem phim nhé!":',
        options: ['영화를 봤어요.', '영화를 봅니다.', '영화를 같이 봅시다.', '영화를 안 봐요.'],
        ans: 2,
        exp: '"영화를 같이 봅시다." là câu rủ rê, đề nghị cùng xem phim.'
      },
      {
        q: 'Đuôi câu "-(으)ㅂ시다" phù hợp sử dụng trong ngữ cảnh nào nhất?',
        options: ['Rủ bạn bè cùng trang lứa làm việc chung', 'Nói chuyện kính cẩn với ông bà', 'Hỏi bài thầy cô giáo', 'Ra lệnh cho người lạ'],
        ans: 0,
        exp: '"-(으)ㅂ시다" dùng trong quan hệ thân mật, rủ bạn bè đồng trang lứa cùng làm gì.'
      }
    ]
  },

  {
    num: 13,
    book: 2,
    titleKr: '언제까지 신청서를 제출해야 해요?',
    titleVi: 'Đến khi nào phải nộp đơn đăng ký ạ?',
    topic: 'Hoạt động trải nghiệm, hỏi thời hạn, cấu trúc -아/어서 (nguyên nhân)',
    summary: 'Tìm hiểu về các hoạt động trải nghiệm thực tế của học sinh, cách hỏi về hạn chót hoàn thành nhiệm vụ và sử dụng cấu trúc chỉ nguyên nhân lý do "-아/어서" (vì... nên...).',
    grammarSummary: 'Thân Động từ/Tính từ + -아/어서: Biểu thị nguyên nhân, lý do của mệnh đề sau ("vì... nên..."). Nguyên âm ㅏ, ㅗ dùng -아서; nguyên âm khác dùng -어서; 하다 đổi thành 해서.',
    dialogues: [
      {
        speaker1: '란 (Lan)',
        speaker2: '선생님 (Cô giáo)',
        kr1: '선생님, 이번 주 박물관 체험 활동에 참가하고 싶어요.',
        vi1: 'Thưa cô, em muốn đăng ký tham gia hoạt động trải nghiệm bảo tàng tuần này ạ.',
        kr2: '그래, 란아. 참 좋은 생각이야. 신청서를 작성했니?',
        vi2: 'Được chứ Lan. Ý tưởng hay đấy. Em đã viết đơn đăng ký chưa?',
        kr3: '네, 다 썼어요. 그런데 언제까지 신청서를 제출해야 해요?',
        vi3: 'Dạ, em viết xong rồi ạ. Nhưng đến khi nào thì phải nộp đơn đăng ký ạ cô?',
        kr4: '이번 주 목요일 5시까지 내야 해. 금요일에는 버스를 예약해야 해서 서둘러야 해.',
        vi4: 'Phải nộp trước 5 giờ chiều thứ Năm tuần này nhé. Vì thứ Sáu cô phải đặt xe buýt nên cần khẩn trương em nhé.'
      }
    ],
    vocab: [
      { kr: '신청서', vi: 'đơn đăng ký', type: 'Danh từ', pron: '[신청서]' },
      { kr: '제출하다 / 내다', vi: 'nộp / gửi nộp', type: 'Động từ', pron: '[제ː출하다 / 내다]' },
      { kr: '언제까지', vi: 'đến khi nào / hạn chót khi nào', type: 'Cụm từ', pron: '[언제까지]' },
      { kr: '체험 활동', vi: 'hoạt động trải nghiệm thực tế', type: 'Danh từ', pron: '[체험 활똥]' },
      { kr: '견학', vi: 'tham quan học tập ngoại khóa', type: 'Danh từ', pron: '[견ː학]' },
      { kr: '참가하다', vi: 'tham gia', type: 'Động từ', pron: '[참가하다]' },
      { kr: '마감일', vi: 'ngày hết hạn / hạn chót', type: 'Danh từ', pron: '[마가밀]' },
      { kr: '늦다', vi: 'trễ / muộn', type: 'Tính từ', pron: '[늳따]' },
      { kr: '바쁘다', vi: 'bận rộn', type: 'Tính từ', pron: '[바쁘다]' },
      { kr: '이유', vi: 'lý do / nguyên nhân', type: 'Danh từ', pron: '[이유]' },
      { kr: '예약하다', vi: 'đặt trước (chỗ, vé)', type: 'Động từ', pron: '[예ː약하다]' },
      { kr: '안내문', vi: 'bản thông báo / tờ hướng dẫn', type: 'Danh từ', pron: '[안ː내문]' }
    ],
    grammarNotes: [
      {
        title: '1. Cấu trúc chỉ nguyên nhân, lý do: -아/어서 (Vì... nên...)',
        desc: 'Mệnh đề trước đưa ra nguyên nhân, mệnh đề sau là kết quả phát sinh.',
        formula: 'Thân từ + -아/어서 (Không dùng thì quá khứ ở trước -아/어서)',
        examples: [
          { kr: '비가 와서 공원에 못 갔어요. (비가 오다 -> 와서)', vi: 'Vì trời mưa nên tôi đã không thể đến công viên.' },
          { kr: '배가 아파서 병원에 가요. (아프다 -> 아파서)', vi: 'Vì đau bụng nên tôi đi bệnh viện.' },
          { kr: '숙제가 많아서 바빠요. (많다 -> 많아서)', vi: 'Vì có nhiều bài tập nên tôi rất bận.' },
          { kr: '늦어서 죄송합니다. (늦다 -> 늦어서)', vi: 'Xin lỗi vì em đến muộn ạ.' }
        ],
        tip: 'Lưu ý vàng: Trước "-아/어서" KHÔNG ĐƯỢC CHIA THÌ QUÁ KHỨ (-았/었). Câu "비가 왔어서..." là SAI ngữ pháp, phải viết là "비가 와서...". Đuôi mệnh lệnh (-(으)세요) và rủ rê (-(으)ㅂ시다) cũng không đi với -아/어서.'
      },
      {
        title: '2. Cách hỏi thời hạn: 언제까지 ... -(으)ㄹ 수 있어요 / -아/어야 해요?',
        desc: 'Hỏi về mốc thời gian tối đa để hoàn thành công việc.',
        formula: '언제까지 + Động từ + -아/어야 해요?',
        examples: [
          { kr: '언제까지 숙제를 내야 해요?', vi: 'Đến khi nào phải nộp bài tập về nhà ạ?' },
          { kr: '오늘 5시까지 제출하세요.', vi: 'Hãy nộp trước 5 giờ hôm nay.' }
        ],
        tip: '"언제까지" là "đến khi nào", còn "몇 시까지" là "đến mấy giờ".'
      }
    ],
    reading: {
      title: '도자기 마을 체험 견학 안내 (Thông báo tham quan trải nghiệm làng gốm)',
      contentKr: '우리 5학년 학생들은 다음 주 금요일에 경기도 이천 도자기 마을로 체험 견학을 떠납니다. 직접 흙을 만지고 나만의 예쁜 컵을 만드는 체험입니다. 참가를 원하는 학생은 신청서를 작성해서 이번 주 수요일 오후 4시까지 담임 선생님께 제출해야 합니다. 버스 좌석이 정해져 있어서 늦게 내면 참가할 수 없습니다.',
      contentVi: 'Học sinh khối 5 chúng ta sẽ có chuyến đi tham quan trải nghiệm làng gốm Icheon, tỉnh Gyeonggi vào thứ Sáu tuần sau. Đây là hoạt động tự tay nặn đất và làm chiếc cốc xinh xắn của riêng mình. Các em muốn tham gia hãy điền đơn đăng ký và nộp cho giáo viên chủ nhiệm trước 4 giờ chiều thứ Tư tuần này. Vì số ghế trên xe buýt có hạn nên nếu nộp muộn sẽ không thể tham gia.',
      question: '신청서는 언제까지 제출해야 합니까? (Phải nộp đơn đăng ký trước khi nào?)',
      answer: '이번 주 수요일 오후 4시까지 제출해야 합니다 (Trước 4 giờ chiều thứ Tư tuần này).'
    },
    quizzes: [
      {
        q: 'Chọn câu viết đúng ngữ pháp nguyên nhân - kết quả:',
        options: ['어제 날씨가 좋았어서 산책했어요.', '어제 날씨가 좋아서 산책했어요.', '어제 날씨가 좋아해서 산책했어요.', '어제 날씨가 좋은 후에 산책했어요.'],
        ans: 1,
        exp: 'Trước "-아/어서" tuyệt đối không chia thì quá khứ, nên câu đúng là "날씨가 좋아서 산책했어요".'
      },
      {
        q: 'Từ "신청서" trong tiếng Hàn có nghĩa là:',
        options: ['Bản thông báo', 'Đơn đăng ký', 'Thời khóa biểu', 'Vé xe buýt'],
        ans: 1,
        exp: '"신청서" (thân thỉnh thư) nghĩa là tờ đơn đăng ký.'
      },
      {
        q: 'Điền từ thích hợp: "머리가 ____ 일찍 잠을 잤어요."',
        options: ['아파서', '아프고', '아프기 전에', '아픈 후에'],
        ans: 0,
        exp: '"머리가 아파서" mang nghĩa "Vì bị đau đầu nên tôi đã đi ngủ sớm".'
      },
      {
        q: 'Mẫu câu "언제까지 제출해야 해요?" có nghĩa là:',
        options: ['Bao giờ thì lớp học bắt đầu?', 'Bao giờ thì có kết quả thi?', 'Đến khi nào phải nộp vậy ạ?', 'Ai là người nộp đơn đăng ký?'],
        ans: 2,
        exp: '"제출하다" là nộp, "언제까지 제출해야 해요?" nghĩa là Đến khi nào phải nộp vậy ạ?'
      }
    ]
  },

  {
    num: 14,
    book: 2,
    titleKr: '오늘 날씨가 좋고 따뜻해요.',
    titleVi: 'Hôm nay trời đẹp và ấm áp',
    topic: 'Thời tiết, nối tính từ và động từ bằng -고',
    summary: 'Khám phá từ vựng miêu tả bốn mùa (xuân, hạ, thu, đông) và các hiện tượng thời tiết; học liên từ liên kết vĩ tố "-고" để nối hai hay nhiều tính từ/động từ trong câu.',
    grammarSummary: 'Thân Tính từ/Động từ + -고: Nối hai mệnh đề có quan hệ liệt kê hoặc thứ tự nối tiếp nhau ("và / vừa... vừa..."). Dùng trực tiếp sau thân từ không phân biệt patchim.',
    dialogues: [
      {
        speaker1: '민 (Minh)',
        speaker2: '준 (Tuấn)',
        kr1: '준 씨, 창밖을 보세요. 오늘 날씨가 정말 좋아요!',
        vi1: 'Tuấn ơi, nhìn ra ngoài cửa sổ xem. Hôm nay thời tiết thật sự rất đẹp!',
        kr2: '와, 하늘이 정말 맑고 파래요! 바람도 시원하게 불어요.',
        vi2: 'Oa, bầu trời thật quang đãng và xanh biếc! Gió cũng thổi mát rượi nữa.',
        kr3: '요즘 하노이 날씨는 따뜻하고 여행하기에 아주 좋아요.',
        vi3: 'Dạo này thời tiết Hà Nội ấm áp và rất thích hợp để đi du lịch.',
        kr4: '맞아요. 한국의 봄 날씨도 꽃이 많이 피고 따뜻해요.',
        vi4: 'Đúng vậy đó. Thời tiết mùa xuân Hàn Quốc cũng nở rất nhiều hoa và rất ấm áp.'
      }
    ],
    vocab: [
      { kr: '날씨', vi: 'thời tiết', type: 'Danh từ', pron: '[날씨]' },
      { kr: '봄 / 여름', vi: 'mùa xuân / mùa hè', type: 'Danh từ', pron: '[봄 / 여름]' },
      { kr: '가을 / 겨울', vi: 'mùa thu / mùa đông', type: 'Danh từ', pron: '[가을 / 겨울]' },
      { kr: '따뜻하다', vi: 'ấm áp', type: 'Tính từ', pron: '[따뜨타다]' },
      { kr: '덥다 / 춥다', vi: 'nóng / lạnh', type: 'Tính từ', pron: '[덥따 / 춥따]' },
      { kr: '시원하다', vi: 'mát mẻ / sảng khoái', type: 'Tính từ', pron: '[시원하다]' },
      { kr: '맑다', vi: 'trong lành / quang đãng', type: 'Tính từ', pron: '[막따]' },
      { kr: '비가 오다 (내리다)', vi: 'trời mưa', type: 'Cụm từ', pron: '[비가 오다]' },
      { kr: '눈이 오다 (내리다)', vi: 'tuyết rơi', type: 'Cụm từ', pron: '[누니 오다]' },
      { kr: '바람이 불다', vi: 'gió thổi', type: 'Cụm từ', pron: '[바라미 불다]' },
      { kr: '하늘', vi: 'bầu trời', type: 'Danh từ', pron: '[하늘]' },
      { kr: '흐리다', vi: 'âm u / nhiều mây', type: 'Tính từ', pron: '[흐리다]' }
    ],
    grammarNotes: [
      {
        title: '1. Liên từ nối tính từ, động từ: -고 (và, vừa... vừa...)',
        desc: 'Dùng để liên kết hai hay nhiều hành động hoặc đặc điểm tính chất trong cùng một câu theo kiểu liệt kê.',
        formula: 'Thân từ 1 + -고 + Thân từ 2',
        examples: [
          { kr: '오늘 날씨가 좋고 따뜻해요. (좋다 + 따뜻하다)', vi: 'Hôm nay thời tiết tốt và ấm áp.' },
          { kr: '이 방은 넓고 깨끗해요. (넓다 + 깨끗하다)', vi: 'Căn phòng này rộng và sạch sẽ.' },
          { kr: '저는 밥을 먹고 친구를 만났어요.', vi: 'Tôi đã ăn cơm và gặp bạn bè.' }
        ],
        tip: 'Khác với "하고" (chỉ nối danh từ với danh từ), "-고" gắn trực tiếp vào thân ĐỘNG TỪ hoặc TÍNH TỪ: 크다 -> 크고, 예쁘다 -> 예쁘고.'
      },
      {
        title: '2. Đặc trưng 4 mùa ở Hàn Quốc (사계절)',
        desc: 'Hàn Quốc có 4 mùa rõ rệt, là chủ đề rất quen thuộc trong giao tiếp.',
        formula: '봄 - 여름 - 가을 - 겨울',
        examples: [
          { kr: '봄에는 벚꽃이 피어요.', vi: 'Vào mùa xuân hoa anh đào nở rộ.' },
          { kr: '여름에는 비가 많이 오고 더워요.', vi: 'Vào mùa hè mưa nhiều và nóng.' },
          { kr: '가을에는 단풍이 들고 시원해요.', vi: 'Vào mùa thu lá phong chuyển đỏ và mát mẻ.' },
          { kr: '겨울에는 눈이 오고 추워요.', vi: 'Vào mùa đông tuyết rơi và lạnh giá.' }
        ],
        tip: 'Chú ý phát âm: 맑다 phát âm là [막따], nhưng khi gặp 고 thì đọc là [말꼬].'
      }
    ],
    reading: {
      title: '한국의 사계절 이야기 (Chuyện bốn mùa Hàn Quốc)',
      contentKr: '한국에는 아름다운 사계절이 있습니다. 봄은 3월부터 5월까지입니다. 날씨가 따뜻하고 예쁜 꽃이 많이 핍니다. 여름은 덥고 비가 자주 옵니다. 그래서 사람들은 바다로 휴가를 갑니다. 가을은 하늘이 맑고 시원합니다. 산에 빨간 단풍이 아름답습니다. 겨울은 춥고 눈이 내립니다. 아이들은 눈사람을 만듭니다.',
      contentVi: 'Hàn Quốc có bốn mùa tươi đẹp. Mùa xuân từ tháng 3 đến tháng 5. Thời tiết ấm áp và có nhiều hoa đẹp nở rộ. Mùa hè nóng và thường xuyên có mưa. Vì vậy mọi người hay đi nghỉ mát ở biển. Mùa thu bầu trời trong xanh và mát mẻ. Trên núi lá phong đỏ rực rất đẹp. Mùa đông lạnh và có tuyết rơi. Trẻ em cùng nhau đắp người tuyết.',
      question: '한국의 가을 날씨는 어떠합니까? (Thời tiết mùa thu Hàn Quốc thế nào?)',
      answer: '하늘이 맑고 시원합니다 (Bầu trời quang đãng và mát mẻ).'
    },
    quizzes: [
      {
        q: 'Nối hai câu sau thành một câu bằng "-고": "방이 넓어요. 방이 깨끗해요."',
        options: ['방이 넓하고 깨끗해요.', '방이 넓고 깨끗해요.', '방이 넓어서 깨끗해요.', '방이 넓기 전에 깨끗해요.'],
        ans: 1,
        exp: 'Thân tính từ "넓다" là "넓" + "-고" -> "넓고 깨끗해요".'
      },
      {
        q: 'Mùa nào trong năm ở Hàn Quốc có hoa nở và thời tiết ấm áp?',
        options: ['여름', '가을', '겨울', '봄'],
        ans: 3,
        exp: '"봄" là mùa xuân (tháng 3 - tháng 5).'
      },
      {
        q: 'Hiện tượng thời tiết "눈이 오다" có nghĩa là gì?',
        options: ['Trời đổ mưa', 'Tuyết rơi', 'Gió lớn', 'Sương mù'],
        ans: 1,
        exp: '"눈이 오다" nghĩa là tuyết rơi.'
      },
      {
        q: 'Từ nào mang nghĩa "mát mẻ, dễ chịu"?',
        options: ['덥다', '춥다', '시원하다', '따뜻하다'],
        ans: 2,
        exp: '"시원하다" có nghĩa là mát mẻ, sảng khoái.'
      }
    ]
  },

  {
    num: 15,
    book: 2,
    titleKr: '피곤할 때 주스를 마실 수 있어요.',
    titleVi: 'Khi mệt cậu có thể uống nước ép đúng không?',
    topic: 'Hoạt động khi mệt, khả năng và điều kiện',
    summary: 'Học cách diễn tả trạng thái sức khỏe cơ thể, đưa ra lời khuyên phục hồi năng lượng qua cấu trúc thời điểm "-(으)ㄹ 때" (khi/lúc) và cấu trúc khả năng "-(으)ㄹ 수 있다/없다" (có thể / không thể).',
    grammarSummary: '1. Thân từ + -(으)ㄹ 때: Biểu thị thời điểm diễn ra sự việc ("khi, lúc"). 2. Thân Động từ + -(으)ㄹ 수 있다/없다: Biểu thị khả năng hoặc điều kiện cho phép thực hiện việc gì ("có thể / không thể làm V").',
    dialogues: [
      {
        speaker1: '지수 (Jisoo)',
        speaker2: '민수 (Minsu)',
        kr1: '민수 씨, 얼굴이 조금 창백해 보여요. 어디 아파요?',
        vi1: 'Minsu ơi, sắc mặt cậu trông hơi nhợt nhạt đấy. Cậu bị đau ở đâu à?',
        kr2: '어제 늦게까지 공부해서 오늘 조금 피곤해요.',
        vi2: 'Hôm qua mình học bài đến tận khuya nên hôm nay hơi mệt một chút.',
        kr3: '피곤할 때는 비타민이 많은 오렌지 주스를 마시면 좋아요.',
        vi3: 'Khi bị mệt mỏi thì uống nước cam có nhiều vitamin sẽ rất tốt đấy.',
        kr4: '고마워요, 지수 씨. 오늘 수업이 끝난 후에 집에서 푹 쉴 수 있어요.',
        vi4: 'Cảm ơn Jisoo nhé. Sau khi tan học hôm nay mình có thể nghỉ ngơi thoải mái ở nhà rồi.'
      }
    ],
    vocab: [
      { kr: '피곤하다', vi: 'mệt mỏi', type: 'Tính từ', pron: '[피곤하다]' },
      { kr: '아프다', vi: 'đau / ốm', type: 'Tính từ', pron: '[아프다]' },
      { kr: '감기에 걸리다', vi: 'bị cảm cúm', type: 'Cụm ĐT', pron: '[감기에 걸리다]' },
      { kr: '약', vi: 'thuốc tây / thuốc uống', type: 'Danh từ', pron: '[약]' },
      { kr: '주스', vi: 'nước ép trái cây', type: 'Danh từ', pron: '[주스]' },
      { kr: '따뜻한 물', vi: 'nước ấm', type: 'Danh từ', pron: '[따뜨탄 물]' },
      { kr: '음악을 듣다', vi: 'nghe nhạc', type: 'Cụm ĐT', pron: '[으마글 듣따]' },
      { kr: '스트레칭', vi: 'bài tập giãn cơ thư giãn', type: 'Danh từ', pron: '[스트레칭]' },
      { kr: '푹 쉬다', vi: 'nghỉ ngơi tĩnh dưỡng thoải mái', type: 'Cụm từ', pron: '[푹 쉬다]' },
      { kr: '병원에 가다', vi: 'đi đến bệnh viện', type: 'Cụm từ', pron: '[병원에 가다]' },
      { kr: '건강', vi: 'sức khỏe', type: 'Danh từ', pron: '[건강]' },
      { kr: '비타민', vi: 'vitamin', type: 'Danh từ', pron: '[비타민]' }
    ],
    grammarNotes: [
      {
        title: '1. Cấu trúc thời điểm: -(으)ㄹ 때 (Khi / Vào lúc...)',
        desc: 'Diễn tả thời điểm mà một hành động hoặc trạng thái xảy ra.',
        formula: 'Thân từ + -(으)ㄹ 때 (Có patchim: -을 때; Không patchim: -ㄹ 때)',
        examples: [
          { kr: '피곤할 때 비타민을 먹어요. (피곤하다 -> 피곤할 때)', vi: 'Khi mệt mỏi tôi uống vitamin.' },
          { kr: '시간이 있을 때 음악을 들어요.', vi: 'Khi có thời gian rảnh tôi nghe nhạc.' },
          { kr: '비가 올 때 우산을 써요.', vi: 'Khi trời mưa tôi che ô.' }
        ],
        tip: 'Bất quy tắc: 듣다 -> 들을 때 (khi nghe), 살다 -> 살 때 (khi sống).'
      },
      {
        title: '2. Cấu trúc khả năng: -(으)ㄹ 수 있다 / 없다 (Có thể / Không thể...)',
        desc: 'Biểu thị năng lực bản thân hoặc điều kiện hoàn cảnh có cho phép thực hiện hành động hay không.',
        formula: 'Thân Động từ + -(으)ㄹ 수 있다 (có thể) / 없다 (không thể)',
        examples: [
          { kr: '저는 한국어를 말할 수 있어요.', vi: 'Tôi có thể nói tiếng Hàn.' },
          { kr: '오늘은 바빠서 축구를 할 수 없어요.', vi: 'Hôm nay tôi bận nên không thể đá bóng.' },
          { kr: '매운 음식을 먹을 수 있어요? - 네, 잘 먹어요.', vi: 'Cậu có ăn được đồ cay không? - Có, mình ăn giỏi lắm.' }
        ],
        tip: 'Khẳng định dùng "수 있다", phủ định dùng "수 없다" hoặc thêm phó từ "못" trước động từ (Ví dụ: 못 가요 = 갈 수 없어요).'
      }
    ],
    reading: {
      title: '건강을 지키는 좋은 습관 (Thói quen tốt để giữ gìn sức khỏe)',
      contentKr: '우리가 건강하게 생활하기 위해서는 좋은 습관이 필요합니다. 첫째, 피곤할 때는 무리하게 운동하지 말고 푹 쉬어야 합니다. 둘째, 감기에 걸렸을 때는 따뜻한 물을 자주 마시고 비타민을 섭취해야 합니다. 셋째, 스트레스를 받을 때 좋아하는 음악을 듣거나 친구와 대화할 수 있습니다. 건강한 몸이 있어야 공부도 열심히 할 수 있습니다.',
      contentVi: 'Để chúng ta sống khỏe mạnh thì cần những thói quen tốt. Thứ nhất, khi bị mệt mỏi thì không nên vận động quá sức mà phải nghỉ ngơi đầy đủ. Thứ hai, khi bị cảm cúm thì phải thường xuyên uống nước ấm và bổ sung vitamin. Thứ ba, khi bị căng thẳng, các em có thể nghe bài nhạc mình yêu thích hoặc trò chuyện cùng bạn bè. Có một cơ thể khỏe mạnh thì mới có thể học tập chăm chỉ được.',
      question: '감기에 걸렸을 때는 무엇을 자주 마셔야 합니까? (Khi bị cảm cúm thì nên thường xuyên uống cái gì?)',
      answer: '따뜻한 물을 자주 마셔야 합니다 (Nên thường xuyên uống nước ấm).'
    },
    quizzes: [
      {
        q: 'Chia động từ "수영하다" (bơi lội) sang dạng "có thể bơi":',
        options: ['수영할 수 있어요', '수영을 수 있어요', '수영하는 수 있어요', '수영했 수 있어요'],
        ans: 0,
        exp: '"수영하다" không có patchim nên kết hợp "-ㄹ 수 있어요" -> "수영할 수 있어요".'
      },
      {
        q: 'Điền cấu trúc thích hợp: "시간이 있____ 책을 읽어요."',
        options: ['을 때', '기 전에', '은 후에', '어서'],
        ans: 0,
        exp: '"시간이 있을 때" nghĩa là "Khi / Lúc có thời gian rảnh".'
      },
      {
        q: 'Câu nào diễn đạt: "Hôm nay tôi không thể đến trường"?',
        options: ['오늘 학교에 갈 수 있어요.', '오늘 학교에 갈 수 없어요.', '오늘 학교에 가야 해요.', '오늘 학교에 갔어요.'],
        ans: 1,
        exp: '"갈 수 없어요" diễn đạt sự không thể / không có khả năng đi.'
      },
      {
        q: 'Khi bị mệt mỏi hoặc cảm cúm, cụm từ "푹 쉬다" mang nghĩa là gì?',
        options: ['Uống nhiều nước lạnh', 'Tập thể thao nặng', 'Nghỉ ngơi tĩnh dưỡng thoải mái', 'Thức khuya làm bài tập'],
        ans: 2,
        exp: '"푹 쉬다" nghĩa là nghỉ ngơi thật thoải mái, tĩnh dưỡng trọn vẹn.'
      }
    ]
  },

  {
    num: 16,
    book: 2,
    titleKr: '수영한 후에 시내에서 해산물을 먹었어요.',
    titleVi: 'Sau khi đi bơi, mình đã ăn hải sản trong thành phố',
    topic: 'Hoạt động du lịch, trình tự trước – sau, cấu trúc -(으)ㄴ 후에',
    summary: 'Kể về trải nghiệm du lịch biển thú vị, các món ăn đặc sản địa phương và sử dụng cấu trúc ngữ pháp biểu thị trình tự trước sau "-(으)ㄴ 후에" (sau khi làm xong việc gì).',
    grammarSummary: 'Thân Động từ + -(으)ㄴ 후에 (hoặc 뒤에, 다음): Diễn tả hành động xảy ra sau khi một hành động khác đã hoàn tất. Có patchim dùng -은 후에; không patchim dùng -ㄴ 후에.',
    dialogues: [
      {
        speaker1: '준 (Tuấn)',
        speaker2: '란 (Lan)',
        kr1: '란 씨, 지난 방학에 다낭 여행 잘 다녀왔어요?',
        vi1: 'Lan ơi, chuyến du lịch Đà Nẵng kỳ nghỉ vừa rồi cậu đi chơi vui chứ?',
        kr2: '네! 바다에서 수영한 후에 시내에서 맛있는 해산물을 많이 먹었어요.',
        vi2: 'Tuyệt lắm Tuấn! Sau khi tắm biển xong tụi mình đã vào trung tâm thành phố ăn rất nhiều hải sản ngon.',
        kr3: '해산물 중에서 무엇이 제일 맛있었어요?',
        vi3: 'Trong các món hải sản thì món nào ngon nhất vậy cậu?',
        kr4: '새우구이가 정말 맛있었어요. 밥을 먹은 후에 야시장에서 예쁜 기념품도 샀어요.',
        vi4: 'Món tôm nướng thật sự rất ngon. Sau khi ăn cơm xong tụi mình còn ghé chợ đêm mua cả quà lưu niệm xinh xắn nữa.'
      }
    ],
    vocab: [
      { kr: '여행', vi: 'chuyến du lịch', type: 'Danh từ', pron: '[여행]' },
      { kr: '바다', vi: 'biển', type: 'Danh từ', pron: '[바다]' },
      { kr: '수영하다', vi: 'bơi lội', type: 'Động từ', pron: '[수영화다]' },
      { kr: '시내', vi: 'trung tâm thành phố / nội thành', type: 'Danh từ', pron: '[시ː내]' },
      { kr: '해산물', vi: 'hải sản / đồ biển', type: 'Danh từ', pron: '[해ː산물]' },
      { kr: '새우', vi: 'con tôm', type: 'Danh từ', pron: '[새우]' },
      { kr: '생선', vi: 'cá (đồ ăn)', type: 'Danh từ', pron: '[생선]' },
      { kr: '사진을 찍다', vi: 'chụp ảnh', type: 'Cụm ĐT', pron: '[사지늘 찍따]' },
      { kr: '기념품', vi: 'quà lưu niệm', type: 'Danh từ', pron: '[기념품]' },
      { kr: '구경하다', vi: 'ngắm cảnh / tham quan', type: 'Động từ', pron: '[구ː경하다]' },
      { kr: '야시장', vi: 'chợ đêm', type: 'Danh từ', pron: '[야ː시장]' },
      { kr: '추억', vi: 'kỷ niệm đẹp / ký ức', type: 'Danh từ', pron: '[추억]' }
    ],
    grammarNotes: [
      {
        title: '1. Cấu trúc trình tự: Động từ + -(으)ㄴ 후에 (Sau khi...)',
        desc: 'Diễn tả một hành động xảy ra sau khi hành động ở mệnh đề trước đã hoàn thành trọn vẹn.',
        formula: 'Thân Động từ + -(으)ㄴ 후에 (Có patchim: -은 후에; Không patchim: -ㄴ 후에)',
        examples: [
          { kr: '수영하다 -> 수영한 후에 (sau khi bơi)', vi: 'Không patchim thêm -ㄴ 후에' },
          { kr: '밥을 먹다 -> 밥을 먹은 후에 (sau khi ăn cơm)', vi: 'Có patchim thêm -은 후에' },
          { kr: '숙제를 끝낸 후에 게임을 했어요.', vi: 'Sau khi làm xong bài tập tôi đã chơi game.' }
        ],
        tip: 'Có thể thay "후에" bằng "뒤에" hoặc "다음에": 밥을 먹은 뒤에, 밥을 먹은 다음에 đều mang nghĩa tương đương.'
      },
      {
        title: '2. Phân biệt cặp cấu trúc đối lập: "-기 전에" và "-(으)ㄴ 후에"',
        desc: 'Hai cấu trúc cực kỳ thông dụng diễn đạt tiến trình thời gian:',
        formula: '-기 전에 (Trước khi)  <--->  -(으)ㄴ 후에 (Sau khi)',
        examples: [
          { kr: '밥을 먹기 전에 손을 씻어요.', vi: 'Trước khi ăn cơm thì rửa tay.' },
          { kr: '밥을 먹은 후에 양치질을 해요.', vi: 'Sau khi ăn cơm thì đánh răng.' }
        ],
        tip: 'Ghi nhớ: Trước động từ luôn ở dạng nguyên thể cộng "-기 전에"; còn sau động từ luôn chia vĩ tố định từ quá khứ "-(으)ㄴ 후에".'
      }
    ],
    reading: {
      title: '민의 부산 바다 여행 (Chuyến du lịch biển Busan của Minh)',
      contentKr: '지난 주말에 민은 가족과 함께 부산에 다녀왔습니다. 부산 해운대 바다는 넓고 아름다웠습니다. 민은 바다에서 시원하게 수영한 후에 모래사장에서 사진을 많이 찍었습니다. 저녁에는 자갈치 시장에 가서 싱싱한 생선회와 해산물을 맛있게 먹었습니다. 식사를 마친 후에 광안리 야경을 구경했습니다. 잊지 못할 멋진 여행이었습니다.',
      contentVi: 'Cuối tuần trước Minh đã cùng gia đình đi Busan. Bãi biển Haeundae ở Busan thật rộng lớn và tuyệt đẹp. Sau khi tắm biển mát rượi, Minh đã chụp rất nhiều ảnh trên bãi cát. Buổi tối mọi người đến chợ Jagalchi thưởng thức món gỏi cá tươi và hải sản rất ngon. Sau khi dùng bữa xong, cả nhà đã ngắm cảnh đêm lung linh ở biển Gwangalli. Đó là một chuyến đi tuyệt vời không thể nào quên.',
      question: '민은 바다에서 수영한 후에 무엇을 했습니까? (Sau khi tắm biển xong Minh đã làm gì?)',
      answer: '모래사장에서 사진을 많이 찍었습니다 (Đã chụp rất nhiều ảnh trên bãi cát).'
    },
    quizzes: [
      {
        q: 'Chia động từ "끝내다" (hoàn thành) với cấu trúc "-(으)ㄴ 후에":',
        options: ['끝낸 후에', '끝내은 후에', '끝내기 후에', '끝낸 전에'],
        ans: 0,
        exp: '"끝내다" không có patchim nên kết hợp "-ㄴ 후에" -> "끝낸 후에".'
      },
      {
        q: 'Cặp từ nào sau đây có mối quan hệ đối nghĩa (Trước - Sau)?',
        options: ['-기 전에 <-> -(으)ㄴ 후에', '-아서 <-> -어서', '-고 <-> 하고', '-부터 <-> -까지'],
        ans: 0,
        exp: '"-기 전에" (trước khi) và "-(으)ㄴ 후에" (sau khi) là cặp cấu trúc đối lập về trình tự thời gian.'
      },
      {
        q: 'Dịch câu: "Sau khi học bài xong tôi đã xem tivi."',
        options: ['공부하기 전에 텔레비전을 봤어요.', '공부한 후에 텔레비전을 봤어요.', '공부하고 텔레비전을 안 봐요.', '공부해서 텔레비전을 봐요.'],
        ans: 1,
        exp: '"공부한 후에" diễn tả hành động sau khi học bài xong.'
      },
      {
        q: 'Từ "해산물" trong tiếng Hàn có nghĩa là gì?',
        options: ['Hoa quả tươi', 'Rau củ sạch', 'Hải sản / đồ biển', 'Bánh kẹo ngọt'],
        ans: 2,
        exp: '"해산물" (hải sản vật) có nghĩa là hải sản đồ biển.'
      }
    ]
  }
];

const pronunciations = [
  {
    num: 1,
    book: 1,
    title: 'Phát âm 1: Quy tắc Nối âm (연음 법칙)',
    desc: 'Khi một từ kết thúc bằng phụ âm dưới (patchim) và từ liền kề sau đó bắt đầu bằng nguyên âm không có phụ âm đầu (ký tự "ㅇ"), phụ âm dưới sẽ được chuyển sang đọc nối trực tiếp vào nguyên âm của âm tiết sau.',
    rules: [
      { kr: '한국어', pron: '[한구거]', explain: 'Patchim ㄱ của "국" nối sang "어" thành [거]' },
      { kr: '밥을', pron: '[바블]', explain: 'Patchim ㅂ của "밥" nối sang "을" thành [블]' },
      { kr: '음악', pron: '[으막]', explain: 'Patchim ㅁ của "음" nối sang "악" thành [막]' },
      { kr: '책이', pron: '[채기]', explain: 'Patchim ㄱ của "책" nối sang "이" thành [기]' },
      { kr: '옷을', pron: '[오슬]', explain: 'Patchim ㅅ của "옷" nối sang "을" thành [슬]' }
    ],
    tip: 'Luyện tập: Đọc liền mạch, không ngắt quãng giữa phụ âm cuối và nguyên âm đứng sau.'
  },
  {
    num: 2,
    book: 1,
    title: 'Phát âm 2: Phân biệt Âm thường, Âm bật hơi và Âm căng (평음, 격음, 경음)',
    desc: 'Trong tiếng Hàn có 3 nhóm phụ âm cần phân biệt rõ bằng độ căng của cơ miệng và lượng hơi thở bật ra khi phát âm.',
    rules: [
      { kr: 'ㅂ - ㅍ - ㅃ', pron: '방 (phòng) - 팡 (nổ) - 빵 (bánh mì)', explain: 'ㅂ âm thường nhẹ; ㅍ bật luồng hơi mạnh ra ngoài; ㅃ siết chặt cơ môi không bật hơi' },
      { kr: 'ㄱ - ㅋ - ㄲ', pron: '가다 (đi) - 카드 (thẻ) - 까치 (chim ác là)', explain: 'ㄱ âm thường; ㅋ bật hơi mạnh từ cuống họng; ㄲ âm căng cổ' },
      { kr: 'ㄷ - ㅌ - ㄸ', pron: '달 (mặt trăng) - 탈 (mặt nạ) - 딸 (con gái)', explain: 'ㄷ âm thường nhẹ; ㅌ bật hơi mạnh ở đầu lưỡi; ㄸ âm căng đầu lưỡi' },
      { kr: 'ㅈ - ㅊ - ㅉ', pron: '자다 (ngủ) - 차다 (đá/lạnh) - 짜다 (mặn/vắt)', explain: 'ㅈ âm thường; ㅊ bật luồng gió mạnh; ㅉ âm căng khép chặt' },
      { kr: 'ㅅ - ㅆ', pron: '사다 (mua) - 싸다 (rẻ/gói)', explain: 'ㅅ âm thường nhẹ; ㅆ âm căng luồng gió xát mạnh' }
    ],
    tip: 'Thử nghiệm với tờ giấy mỏng trước miệng: khi phát âm âm bật hơi (ㅍ, ㅋ, ㅌ, ㅊ), tờ giấy sẽ bay mạnh; khi phát âm âm căng (ㅃ, ㄲ, ㄸ, ㅉ, ㅆ) tờ giấy hầu như không chuyển động.'
  },
  {
    num: 3,
    book: 2,
    title: 'Phát âm 3: Hiện tượng Mũi hóa (비음화)',
    desc: 'Khi các phụ âm tắc [ㄱ, ㄷ, ㅂ] đứng ở vị trí patchim đi trước các phụ âm mũi [ㄴ, ㅁ], chúng sẽ bị đồng hóa và biến âm thành các phụ âm mũi tương ứng là [ㅇ, ㄴ, ㅁ].',
    rules: [
      { kr: 'ㄱ + ㄴ/ㅁ -> [ㅇ]', pron: '국물 -> [궁물], 한국말 -> [한궁말], 작년 -> [장년]', explain: 'ㄱ biến thành âm ng [ㅇ]' },
      { kr: 'ㄷ + ㄴ/ㅁ -> [ㄴ]', pron: '낱말 -> [난말], 닫는다 -> [단는다], 끝물 -> [끈물]', explain: 'ㄷ biến thành âm n [ㄴ]' },
      { kr: 'ㅂ + ㄴ/ㅁ -> [ㅁ]', pron: '십년 -> [심년], 감사합니다 -> [감사함니다], 밥맛 -> [밤맏]', explain: 'ㅂ biến thành âm m [ㅁ]' }
    ],
    tip: 'Hiện tượng này giúp việc phát âm các phụ âm nặng trở nên mềm mại, trôi chảy và đỡ tốn sức hơn.'
  },
  {
    num: 4,
    book: 2,
    title: 'Phát âm 4: Hiện tượng Nhũ âm hóa & Biến âm "ㅎ" (유음화 & ㅎ 법칙)',
    desc: '1. Nhũ âm hóa (유음화): Khi phụ âm [ㄴ] gặp phụ âm [ㄹ] (hoặc ngược lại [ㄹ] gặp [ㄴ]), âm [ㄴ] sẽ biến thành âm [ㄹ]. 2. Quy tắc âm "ㅎ": "ㅎ" bị giản lược khi gặp nguyên âm hoặc kết hợp tạo thành âm bật hơi.',
    rules: [
      { kr: 'ㄴ + ㄹ -> [ㄹ + ㄹ]', pron: '신라 -> [실라], 연락 -> [열락], 난로 -> [날로]', explain: 'Âm n biến thành âm l để nối liền mạch' },
      { kr: 'ㄹ + ㄴ -> [ㄹ + ㄹ]', pron: '칼날 -> [칼랄], 설날 -> [설랄], 일년 -> [일련]', explain: 'Âm n đi sau âm l cũng biến thành âm l' },
      { kr: 'ㅎ giản lược (탈락)', pron: '좋은 -> [조은], 많아 -> [마나], 넣어 -> [너어]', explain: 'Patchim ㅎ hoặc ㄶ đứng trước nguyên âm thì ㅎ câm không phát âm' },
      { kr: 'ㅎ bật hơi (축약)', pron: '축하 -> [추카], 입학 -> [이팍], 맞히다 -> [마치다]', explain: 'ㄱ, ㄷ, ㅂ, ㅈ gặp ㅎ kết hợp thành âm bật hơi ㅋ, ㅌ, ㅍ, ㅊ' }
    ],
    tip: 'Các hiện tượng biến âm này là chìa khóa để nghe người Hàn bản xứ nói chuyện một cách tự nhiên và chính xác nhất!'
  }
];

const cultures = [
  {
    num: 1,
    book: 1,
    title: 'Văn hóa 1: Lời chào và Văn hóa Kính ngữ Hàn Quốc (한국의 인사 예절)',
    desc: 'Văn hóa cúi chào (Insa - 인사) là nét đẹp đặc trưng và tối quan trọng trong giao tiếp xã hội Hàn Quốc, thể hiện sự khiêm nhường, tôn trọng người lớn tuổi và bạn bè.',
    sections: [
      {
        heading: '1. Các tư thế cúi chào chuẩn mực',
        content: 'Khi gặp người lớn tuổi, thầy cô giáo hoặc người có địa vị cao, người Hàn Quốc thường gập người chào ở góc từ 30 đến 45 độ (thậm chí 90 độ trong nghi lễ trang trọng). Đối với bạn bè thân thiết, có thể gật đầu nhẹ và mỉm cười giơ tay vẫy chào.'
      },
      {
        heading: '2. Quy tắc dùng hai tay khi trao - nhận đồ',
        content: 'Khi nhận hoặc trao đồ vật (tiền, quà, sách vở) cho thầy cô hoặc người lớn tuổi, học sinh luôn phải dùng cả hai tay (hoặc tay phải đưa ra và tay trái đỡ nhẹ dưới cùi chỏ tay phải). Đây là phép lịch sự cơ bản mà mọi trẻ em Hàn Quốc đều được dạy từ mẫu giáo.'
      },
      {
        heading: '3. Lời chào cửa miệng',
        content: '"안녕하세요" (Xin chào), "감사합니다" (Xin cảm ơn), "죄송합니다" (Xin lỗi). Thầy cô giáo khi bước vào lớp sẽ được học sinh đứng nghiêm chào đồng thanh: "선생님, 안녕하세요!".'
      }
    ]
  },
  {
    num: 2,
    book: 1,
    title: 'Văn hóa 2: Trang phục Hanbok và Ngày Tết cổ truyền (한복과 전통 명절)',
    desc: 'Trang phục truyền thống Hanbok (한복) cùng các ngày lễ lớn như Tết Nguyên đán Seollal và Tết Trung thu Chuseok phản ánh chiều sâu văn hóa gia đình sum vầy của xứ sở kim chi.',
    sections: [
      {
        heading: '1. Vẻ đẹp của Hanbok truyền thống',
        content: 'Hanbok của nữ gồm áo trên Jeogori (저고리) và váy xòe rộng Chima (치마). Hanbok của nam gồm áo Jeogori và quần rộng Baji (바지). Màu sắc Hanbok cho trẻ em thường rất tươi sáng, rực rỡ với áo cánh nhiều màu (Saekdongjeogori) mang ý nghĩa xua đuổi điều xấu và chúc phúc may mắn.'
      },
      {
        heading: '2. Tết Nguyên Đán Seollal (설날)',
        content: 'Vào ngày mùng một Tết, các thế hệ gia đình quây quần thực hiện nghi thức chúc tết cúi lạy người lớn Sebae (세배) và được nhận tiền mừng tuổi Sebaetdon (세뱃돈). Bữa ăn đầu năm không thể thiếu bát canh bánh gạo Tteokguk (떡국) tượng trưng cho sự thuần khiết và đón thêm một tuổi mới may mắn.'
      },
      {
        heading: '3. Tết Trung Thu Chuseok (추석)',
        content: 'Là Tết tạ ơn mùa màng bội thu lớn nhất năm, gia đình tụ họp nặn và hấp bánh Songpyeon (송편) hình bán nguyệt gói nhân vừng đường ngọt ngào, cùng nhau ngắm trăng rằm tròn và chơi các trò chơi dân gian rộn ràng.'
      }
    ]
  },
  {
    num: 3,
    book: 2,
    title: 'Văn hóa 3: Ẩm thực truyền thống và Phép lịch sự trên bàn ăn (한국의 식사 문화와 예절)',
    desc: 'Bữa cơm truyền thống Hàn Quốc không chỉ phong phú về hương vị mà còn chứa đựng nhiều triết lý âm dương ngũ hành và quy tắc tôn kính người lớn tuổi.',
    sections: [
      {
        heading: '1. Cấu trúc bữa ăn cơm và các món phụ (Banchan)',
        content: 'Bữa cơm tiêu chuẩn gồm cơm trắng (bap), canh nóng (guk), và rất nhiều đĩa món ăn kèm nhỏ gọi là Banchan (반찬) như kim chi, củ cải muối, cá cơm rim, rau bina trộn dầu mè... Banchan được bày thịnh soạn ở giữa bàn để mọi người cùng thưởng thức.'
      },
      {
        heading: '2. Phép lịch sự trên bàn ăn (식사 예절)',
        content: 'Quy tắc kính trên nhường dưới: Đợi người lớn tuổi nhất trên bàn cầm đũa/thìa trước thì người nhỏ tuổi mới bắt đầu ăn. Không cầm bát cơm hay bát canh lên khỏi mặt bàn (khác với tập quán của Việt Nam hay Nhật Bản). Dùng thìa để múc cơm và canh, dùng đũa để gắp các món ăn kèm.'
      },
      {
        heading: '3. Văn hóa chia sẻ và món ăn đường phố',
        content: 'Văn hóa ẩm thực đường phố (Bunsik - 분식) rất được các bạn học sinh yêu thích sau giờ tan học: cùng nhau đứng bên quầy thưởng thức xiên chả cá Eomuk nóng hổi, chấm bánh gạo cay Tteokbokki và cơm cuộn Kimbap ngon lành.'
      }
    ]
  },
  {
    num: 4,
    book: 2,
    title: 'Văn hóa 4: Trò chơi dân gian và Đời sống học đường Hàn Quốc (전통 놀이와 한국의 학교생활)',
    desc: 'Những trò chơi dân gian rèn luyện sự khéo léo kết hợp cùng không gian học tập hiện đại, kỷ luật và năng động tại các trường tiểu học Hàn Quốc.',
    sections: [
      {
        heading: '1. Các trò chơi dân gian truyền thống quen thuộc',
        content: 'Trò chơi ném que gỗ Yutnori (윷놀이) sôi động cả nhà cùng chơi; trò ném tên vào bình Tuho (투호) đòi hỏi sự tập trung khéo léo; trò đá cầu lông chân Jegichagi (제기차기) và trò quay con quay Paengi-chigi (팽이치기) rất phổ biến trong các dịp lễ hội.'
      },
      {
        heading: '2. Đôi dép đi trong nhà (Silnae-hwa - 실내화)',
        content: 'Tại tất cả các trường học ở Hàn Quốc, khi bước vào sảnh trường, học sinh sẽ tháo giày đi ngoài đường và đổi sang đôi dép vải đi trong nhà màu trắng gọi là Silnaehwa cất trong tủ giày riêng. Điều này giúp giữ cho sàn lớp học luôn sạch bóng và tạo cảm giác thoải mái như ở nhà.'
      },
      {
        heading: '3. Bữa trưa học đường đầy đủ dưỡng chất (Geupsik - 급식)',
        content: 'Học sinh tiểu học được phục vụ bữa trưa nóng hổi ngay tại căn tin trường trên khay inox chia 5 ngăn: cơm, canh, món đạm, món rau và tráng miệng. Tất cả các bạn đều tự giác xếp hàng, ăn hết khẩu phần và tự tay phân loại rác, khay ăn sau khi dùng bữa.'
      }
    ]
  }
];

const trangNguyenQuizzes = [
  { q: 'Trong câu "저는 아침 7시____ 일어나요", tiểu từ chỉ thời gian cần điền là:', options: ['에', '에서', '를', '하고'], ans: 0, exp: 'Tiểu từ "에" đi sau danh từ thời gian chỉ thời điểm diễn ra hành động.' },
  { q: '"Tháng 6" và "Tháng 10" trong tiếng Hàn được đọc là:', options: ['육월, 십월', '유월, 시월', '육월, 시월', '유월, 십월'], ans: 1, exp: 'Theo quy tắc biến đổi âm đọc, tháng 6 là 유월 và tháng 10 là 시월.' },
  { q: 'Cặp tiểu từ chỉ khoảng thời gian "Từ ... đến ..." là:', options: ['부터 ... 까지', '에서 ... 까지', '하고 ... 에', '로 ... 에'], ans: 0, exp: 'Mốc thời gian bắt đầu và kết thúc dùng "부터 ... 까지".' },
  { q: 'Cấu trúc biểu thị nghĩa vụ "phải làm gì" trong tiếng Hàn là:', options: ['-고 싶다', '-아/어야 하다', '-(으)ㄹ 수 있다', '-기 전에'], ans: 1, exp: '"-아/어야 하다" mang nghĩa phải làm gì.' },
  { q: 'Để rủ bạn bè "Chúng ta cùng học tiếng Hàn nhé!", ta dùng câu:', options: ['한국어를 배웠어요.', '한국어를 같이 배웁시다.', '한국어를 배울 수 없어요.', '한국어를 배우지 마세요.'], ans: 1, exp: 'Đuôi "-(으)ㅂ시다" là câu đề nghị rủ rê cùng làm gì.' },
  { q: 'Trước khi ăn cơm phải rửa tay: "밥을 ____ 손을 씻어요."', options: ['먹기 전에', '먹은 후에', '먹어서', '먹고'], ans: 0, exp: '"-기 전에" nghĩa là trước khi làm gì.' },
  { q: 'Sau khi bơi lội, mình đã ăn hải sản: "수영한 ____ 해산물을 먹었어요."', options: ['전에', '후에', '때', '까지'], ans: 1, exp: '"-(으)ㄴ 후에" nghĩa là sau khi làm gì.' },
  { q: 'Tiểu từ "도" có ý nghĩa là gì?', options: ['Và', 'Ở tại', 'Cũng', 'Bằng'], ans: 2, exp: '"도" gắn sau danh từ mang nghĩa là "cũng".' },
  { q: 'Đơn vị đếm "chai" (nước, sữa) trong tiếng Hàn là:', options: ['개', '병', '잔', '권'], ans: 1, exp: '"병" là đơn vị đếm chai.' },
  { q: 'Khi nói "bằng xe đạp", tiểu từ phương tiện là:', options: ['자전거에', '자전거로', '자전거에서', '자전거를'], ans: 1, exp: 'Phương tiện không patchim kết hợp với "로" -> "자전거로".' },
  { q: 'Tính từ "따뜻하다" có nghĩa là gì?', options: ['Lạnh giá', 'Nóng bức', 'Mát mẻ', 'Ấm áp'], ans: 3, exp: '"따뜻하다" nghĩa là ấm áp.' },
  { q: 'Hiện tượng phát âm "한국어 -> [한구거]" là quy tắc gì?', options: ['Mũi hóa', 'Nối âm (연음)', 'Nhũ âm hóa', 'Âm căng'], ans: 1, exp: 'Quy tắc nối âm (연음 법칙) đưa patchim sang âm tiết sau có nguyên âm.' },
  { q: 'Động từ "가다" (đi) chia ở thì quá khứ là:', options: ['갔어요', '가았어요', '가었어요', '가했어요'], ans: 0, exp: '가 + 았어요 rút gọn thành "갔어요".' },
  { q: 'Liên từ nối hai danh từ "침대____ 책상이 있어요" là:', options: ['하고', '고', '에서', '부터'], ans: 0, exp: '"하고" dùng để nối 2 danh từ với nhau.' },
  { q: 'Khi bị mệt mỏi ta có thể dùng mẫu câu nào?', options: ['피곤할 때', '피곤하기 전에', '피곤한 후에', '피곤하러'], ans: 0, exp: '"-(으)ㄹ 때" chỉ thời điểm: "피곤할 때" = khi mệt mỏi.' },
  { q: 'Câu "저는 김치를 먹을 수 있어요" mang ý nghĩa gì?', options: ['Tôi phải ăn kim chi.', 'Tôi không thể ăn kim chi.', 'Tôi có thể ăn kim chi.', 'Tôi đã ăn kim chi.'], ans: 2, exp: '"-(으)ㄹ 수 있다" diễn tả khả năng có thể làm được việc gì.' },
  { q: 'Món ăn truyền thống ăn vào ngày Tết Seollal của Hàn Quốc là:', options: ['송편 (Songpyeon)', '떡국 (Tteokguk)', '비빔밥 (Bibimbap)', '삼계탕 (Samgyetang)'], ans: 1, exp: 'Canh bánh gạo Tteokguk là món ăn tượng trưng đón tuổi mới vào ngày Tết Seollal.' },
  { q: 'Từ "신청서" trong tiếng Hàn là:', options: ['Thời khóa biểu', 'Đơn đăng ký', 'Hóa đơn', 'Bản đồ'], ans: 1, exp: '"신청서" là đơn đăng ký tham gia.' },
  { q: 'Trước cấu trúc chỉ nguyên nhân "-아/어서", điều nào sau đây là ĐÚNG?',
    options: ['Được chia thì quá khứ tự do', 'Không được chia thì quá khứ (-았/었)', 'Phải dùng câu mệnh lệnh', 'Bắt buộc chia thì tương lai'],
    ans: 1, exp: 'Trước "-아/어서" tuyệt đối không chia thì quá khứ.' },
  { q: 'Đôi dép vải đi trong trường học của học sinh Hàn Quốc tên là:', options: ['운동화', '실내화', '구두', '슬리퍼'], ans: 1, exp: '"실내화" (thất nội hoa) là dép đi trong nhà / trường học.' },
  { q: 'Số 3 thuần Hàn khi đứng trước đơn vị đếm biến đổi thành:', options: ['삼', '셋', '세', '석'], ans: 2, exp: '하나 -> 한, 둘 -> 두, 셋 -> 세, 넷 -> 네.' },
  { q: '"오른쪽으로 가세요" nghĩa là gì?', options: ['Hãy đi thẳng', 'Hãy rẽ trái', 'Hãy rẽ phải', 'Hãy lùi lại'], ans: 2, exp: '"오른쪽" là bên phải, "오른쪽으로 가세요" là hãy rẽ phải.' },
  { q: 'Từ nào sau đây là thứ Sáu trong tiếng Hàn?', options: ['화요일', '목요일', '금요일', '토요일'], ans: 2, exp: '"금요일" là thứ Sáu.' },
  { q: 'Trang phục truyền thống của người Hàn Quốc tên là:', options: ['Áo dài', 'Kimono', 'Hanbok', 'Sari'], ans: 2, exp: 'Hanbok (한복) là quốc phục truyền thống của Hàn Quốc.' },
  { q: 'Hiện tượng phát âm "국물 -> [궁물]" là minh họa cho:', options: ['Biến âm Mũi hóa (비음화)', 'Nhũ âm hóa', 'Nối âm', 'Âm bật hơi'], ans: 0, exp: 'Patchim ㄱ gặp ㅁ biến âm thành [ㅇ] là hiện tượng mũi hóa.' }
];

console.log(`Loaded ${lessons.length} lessons, ${pronunciations.length} pronunciations, ${cultures.length} culture sections, ${trangNguyenQuizzes.length} contest questions.`);

module.exports = { lessons, pronunciations, cultures, trangNguyenQuizzes };
