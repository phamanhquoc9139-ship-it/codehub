// Comprehensive Data for Am Nhac 8 (16 Lessons across 8 Topics)
// Bo sach Ket noi tri thuc voi cuoc song (Chuan Chuong trinh GDPT 2018)
// Bien soan theo dung khung kien thuc cot loi Am nhac 8 nguoi dung yeu cau

const topics = [
  {
    num: 1,
    id: "chude-1",
    term: "Học kì 1",
    termBadge: "HK1",
    title: "Chủ đề 1: Chào năm học mới",
    desc: "Hát tập thể; nghe nhạc; gam/giọng trưởng, Đô trưởng; đọc nhạc số 1",
    icon: "fa-bell",
    gradient: "from-purple-600 via-indigo-700 to-slate-900",
    badgeColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    lessonNums: [1, 2]
  },
  {
    num: 2,
    id: "chude-2",
    term: "Học kì 1",
    termBadge: "HK1",
    title: "Chủ đề 2: Tôi yêu Việt Nam",
    desc: "Bài hát về Việt Nam; nhạc cụ recorder/kèn phím; dân ca Quan họ Bắc Ninh",
    icon: "fa-flag",
    gradient: "from-red-600 via-rose-700 to-slate-900",
    badgeColor: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300",
    lessonNums: [3, 4]
  },
  {
    num: 3,
    id: "chude-3",
    term: "Học kì 1",
    termBadge: "HK1",
    title: "Chủ đề 3: Hòa ca",
    desc: "Hát về ước mơ; thể loại hợp xướng; nhịp 3/8 và so sánh với 3/4",
    icon: "fa-users-line",
    gradient: "from-blue-600 via-cyan-700 to-slate-900",
    badgeColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    lessonNums: [5, 6]
  },
  {
    num: 4,
    id: "chude-4",
    term: "Học kì 1",
    termBadge: "HK1",
    title: "Chủ đề 4: Biển đảo quê hương",
    desc: "Hát về Trường Sa; nghe nhạc về biển đảo; đàn guitar/ukulele; recorder/kèn phím",
    icon: "fa-water",
    gradient: "from-teal-600 via-cyan-700 to-slate-900",
    badgeColor: "bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300",
    lessonNums: [7, 8]
  },
  {
    num: 5,
    id: "chude-5",
    term: "Học kì 2",
    termBadge: "HK2",
    title: "Chủ đề 5: Chào xuân",
    desc: "Bài hát ngày Tết; nhạc sĩ Trần Hoàn; nhịp 6/8; đọc nhạc số 3",
    icon: "fa-seedling",
    gradient: "from-emerald-600 via-green-700 to-slate-900",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    lessonNums: [9, 10]
  },
  {
    num: 6,
    id: "chude-6",
    term: "Học kì 2",
    termBadge: "HK2",
    title: "Chủ đề 6: Âm nhạc nước ngoài",
    desc: "Bài hát nước ngoài; Trở về Surriento; recorder/kèn phím; gam/giọng thứ, La thứ; đọc nhạc số 4",
    icon: "fa-earth-americas",
    gradient: "from-amber-600 via-orange-700 to-slate-900",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    lessonNums: [11, 12]
  },
  {
    num: 7,
    id: "chude-7",
    term: "Học kì 2",
    termBadge: "HK2",
    title: "Chủ đề 7: Giai điệu quê hương",
    desc: "Bài hát dân ca; đàn nguyệt và đàn tính; đảo phách; đọc nhạc số 5",
    icon: "fa-guitar",
    gradient: "from-orange-600 via-amber-700 to-stone-900",
    badgeColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300",
    lessonNums: [13, 14]
  },
  {
    num: 8,
    id: "chude-8",
    term: "Học kì 2",
    termBadge: "HK2",
    title: "Chủ đề 8: Nhịp điệu mùa hè",
    desc: "Bài hát mùa hè; Frédéric Chopin và tác phẩm piano; recorder/kèn phím",
    icon: "fa-sun",
    gradient: "from-rose-600 via-purple-700 to-slate-900",
    badgeColor: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300",
    lessonNums: [15, 16]
  }
];

module.exports = { topics };
