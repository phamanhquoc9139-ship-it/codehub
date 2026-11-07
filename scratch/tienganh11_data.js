// tienganh11_data.js
// Master Data File for Tiếng Anh 11 Global Success
const { themes, unitsP1 } = require('./tienganh11_data_p1.js');
const { unitsP2, grammarCheatsheet, communicationHandbook, writingGenres } = require('./tienganh11_data_p2.js');

const units = {
  ...unitsP1,
  ...unitsP2
};

// Build Master Glossary from all units
const masterGlossary = [];
Object.keys(units).forEach(k => {
  const u = units[k];
  if (u.vocab && Array.isArray(u.vocab)) {
    u.vocab.forEach(v => {
      masterGlossary.push({
        unitNum: u.num,
        unitTitle: u.title,
        word: v.word,
        ipa: v.ipa,
        type: v.type,
        meaning: v.meaning,
        eg: v.eg
      });
    });
  }
});

// Build 45-Minute Exam Question Bank from all Unit quizzes
const allExamQuestions = [];
Object.keys(units).forEach(k => {
  const u = units[k];
  if (u.quiz && Array.isArray(u.quiz)) {
    u.quiz.forEach(q => {
      allExamQuestions.push({
        unitKey: k,
        unitNum: u.num,
        unitTitle: u.title,
        q: q.q,
        options: q.options,
        ans: q.ans,
        exp: q.exp
      });
    });
  }
});

module.exports = {
  themes,
  units,
  grammarCheatsheet,
  communicationHandbook,
  writingGenres,
  masterGlossary,
  allExamQuestions
};
