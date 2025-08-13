import { emojis } from './emojiData.js';

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

export const generateAllQuestions = (totalQuestions = 10) => {
  const selectedEmojis = [];
  const generatedQuestions = [];
  
  // 指定された数の問題を生成
  for (let i = 0; i < totalQuestions; i++) {
    // 未使用の絵文字を取得
    const availableEmojis = emojis.filter(emoji => 
      !selectedEmojis.some(used => used.name === emoji.name)
    );
    
    if (availableEmojis.length === 0) {
      console.warn('No more available emojis');
      break;
    }
    
    const randomEmoji = availableEmojis[Math.floor(Math.random() * availableEmojis.length)];
    const mode = Math.random() > 0.5 ? 'emojiToName' : 'nameToEmoji';
    
    generatedQuestions.push({
      emoji: randomEmoji,
      mode: mode,
      options: getRandomOptions(randomEmoji, 4)
    });
    
    selectedEmojis.push(randomEmoji);
  }
  
  return generatedQuestions;
};