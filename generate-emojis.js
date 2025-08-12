import * as unicodeEmoji from 'unicode-emoji';
import fs from 'fs';

// カテゴリマッピング（unicode-emojiのgroupを日本語カテゴリにマップ）
const categoryMapping = {
  'smileys-emotion': 'faces',
  'people-body': 'people',
  'animals-nature': 'animals', 
  'food-drink': 'food',
  'travel-places': 'vehicles',
  'activities': 'activities',
  'objects': 'objects'
};

// 絵文字データを生成
function generateEmojiData() {
  const allEmojis = unicodeEmoji.getEmojis();
  
  // 基本絵文字のみを抽出（バリエーションを除外）
  const basicEmojis = allEmojis
    .filter(emoji => !emoji.emoji.includes('🏻') && !emoji.emoji.includes('🏼') && !emoji.emoji.includes('🏽') && !emoji.emoji.includes('🏾') && !emoji.emoji.includes('🏿')) // 肌色バリエーションを除外
    .filter(emoji => emoji.emoji.length <= 4) // 複雑すぎる組み合わせ絵文字を除外
    .filter(emoji => !emoji.emoji.includes('‍')) // ZWJ（ゼロ幅結合子）を含む複合絵文字を除外
    .map(emoji => ({
      emoji: emoji.emoji,
      name: emoji.description,
      category: categoryMapping[emoji.group] || 'others'
    }))
    .filter(emoji => emoji.category !== 'others'); // othersカテゴリを除外

  // カテゴリ別に整理
  const categorized = {};
  basicEmojis.forEach(emoji => {
    if (!categorized[emoji.category]) {
      categorized[emoji.category] = [];
    }
    categorized[emoji.category].push(emoji);
  });

  // 各カテゴリから適度な数を選択
  const selectedEmojis = [];
  const maxPerCategory = 20;
  
  Object.entries(categorized).forEach(([category, emojis]) => {
    const selected = emojis
      .sort(() => 0.5 - Math.random()) // ランダムに並び替え
      .slice(0, maxPerCategory);
    selectedEmojis.push(...selected);
  });

  return selectedEmojis;
}

// ファイルを生成
const emojiData = generateEmojiData();

const fileContent = `export const emojis = [
${emojiData.map(emoji => {
  return `  { emoji: "${emoji.emoji}", name: "${emoji.name}", category: "${emoji.category}" }`;
}).join(',\n')}
];

export const getRandomOptions = (correctAnswer, count = 4) => {
  // まず同じカテゴリの絵文字を取得
  const sameCategory = emojis.filter(emoji => 
    emoji.category === correctAnswer.category && emoji.name !== correctAnswer.name
  );
  
  // 同じカテゴリから不正解の選択肢を選ぶ
  let incorrect = [];
  if (sameCategory.length >= count - 1) {
    // 同じカテゴリに十分な選択肢がある場合
    incorrect = sameCategory
      .sort(() => 0.5 - Math.random())
      .slice(0, count - 1);
  } else {
    // 同じカテゴリの絵文字が少ない場合は、全ての同じカテゴリを使い、足りない分は他のカテゴリから補う
    incorrect = [...sameCategory];
    const needed = count - 1 - sameCategory.length;
    if (needed > 0) {
      const otherEmojis = emojis.filter(emoji => 
        emoji.category !== correctAnswer.category && emoji.name !== correctAnswer.name
      );
      const additionalOptions = otherEmojis
        .sort(() => 0.5 - Math.random())
        .slice(0, needed);
      incorrect = [...incorrect, ...additionalOptions];
    }
  }
  
  const options = [correctAnswer, ...incorrect].sort(() => 0.5 - Math.random());
  return options;
};
`;

fs.writeFileSync('./src/data/emojis.js', fileContent);
console.log(`Generated ${emojiData.length} emojis across ${new Set(emojiData.map(e => e.category)).size} categories`);
console.log('Categories:', [...new Set(emojiData.map(e => e.category))].sort());