export const emojis = [
  // 顔・表情
  { emoji: "😀", name: "grinning face", category: "faces" },
  { emoji: "😂", name: "face with tears of joy", category: "faces" },
  { emoji: "😊", name: "smiling face with smiling eyes", category: "faces" },
  { emoji: "😍", name: "smiling face with heart-eyes", category: "faces" },
  { emoji: "🤔", name: "thinking face", category: "faces" },
  { emoji: "😭", name: "loudly crying face", category: "faces" },
  { emoji: "😎", name: "smiling face with sunglasses", category: "faces" },
  { emoji: "😴", name: "sleeping face", category: "faces" },
  { emoji: "🤗", name: "smiling face with open hands", category: "faces" },
  { emoji: "😱", name: "face screaming in fear", category: "faces" },

  // 動物
  { emoji: "🐶", name: "dog face", category: "animals" },
  { emoji: "🐱", name: "cat face", category: "animals" },
  { emoji: "🐰", name: "rabbit face", category: "animals" },
  { emoji: "🐻", name: "bear", category: "animals" },
  { emoji: "🐼", name: "panda", category: "animals" },
  { emoji: "🦁", name: "lion", category: "animals" },
  { emoji: "🐸", name: "frog", category: "animals" },
  { emoji: "🐵", name: "monkey face", category: "animals" },
  { emoji: "🐮", name: "cow face", category: "animals" },
  { emoji: "🐷", name: "pig face", category: "animals" },

  // 食べ物
  { emoji: "🍎", name: "red apple", category: "food" },
  { emoji: "🍌", name: "banana", category: "food" },
  { emoji: "🍕", name: "pizza", category: "food" },
  { emoji: "🍔", name: "hamburger", category: "food" },
  { emoji: "🍣", name: "sushi", category: "food" },
  { emoji: "🍰", name: "shortcake", category: "food" },
  { emoji: "🍦", name: "soft ice cream", category: "food" },
  { emoji: "🍪", name: "cookie", category: "food" },
  { emoji: "🍫", name: "chocolate bar", category: "food" },
  { emoji: "☕", name: "hot beverage", category: "food" },

  // 自然・天気
  { emoji: "☀️", name: "sun", category: "nature" },
  { emoji: "🌙", name: "crescent moon", category: "nature" },
  { emoji: "⭐", name: "star", category: "nature" },
  { emoji: "🌈", name: "rainbow", category: "nature" },
  { emoji: "⚡", name: "high voltage", category: "nature" },
  { emoji: "❄️", name: "snowflake", category: "nature" },
  { emoji: "🌸", name: "cherry blossom", category: "nature" },
  { emoji: "🌳", name: "deciduous tree", category: "nature" },
  { emoji: "🌊", name: "water wave", category: "nature" },
  { emoji: "🔥", name: "fire", category: "nature" },

  // 乗り物
  { emoji: "🚗", name: "automobile", category: "vehicles" },
  { emoji: "🚌", name: "bus", category: "vehicles" },
  { emoji: "🚇", name: "metro", category: "vehicles" },
  { emoji: "✈️", name: "airplane", category: "vehicles" },
  { emoji: "🚢", name: "ship", category: "vehicles" },
  { emoji: "🚴", name: "person biking", category: "vehicles" },
  { emoji: "🚀", name: "rocket", category: "vehicles" },
  { emoji: "🚁", name: "helicopter", category: "vehicles" },
  { emoji: "🛵", name: "motor scooter", category: "vehicles" },
  { emoji: "🚂", name: "locomotive", category: "vehicles" },

  // オブジェクト
  { emoji: "📱", name: "mobile phone", category: "objects" },
  { emoji: "💻", name: "laptop computer", category: "objects" },
  { emoji: "⌚", name: "watch", category: "objects" },
  { emoji: "📚", name: "books", category: "objects" },
  { emoji: "✏️", name: "pencil", category: "objects" },
  { emoji: "🎵", name: "musical note", category: "objects" },
  { emoji: "⚽", name: "soccer ball", category: "objects" },
  { emoji: "🎂", name: "birthday cake", category: "objects" },
  { emoji: "🎁", name: "wrapped gift", category: "objects" },
  { emoji: "💡", name: "light bulb", category: "objects" }
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