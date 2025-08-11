export const emojis = [
  // 顔・表情
  { emoji: "😀", name: "満面の笑み", category: "faces" },
  { emoji: "😂", name: "大笑い", category: "faces" },
  { emoji: "😊", name: "笑顔", category: "faces" },
  { emoji: "😍", name: "ハートの目", category: "faces" },
  { emoji: "🤔", name: "考えている顔", category: "faces" },
  { emoji: "😭", name: "号泣", category: "faces" },
  { emoji: "😎", name: "サングラス", category: "faces" },
  { emoji: "😴", name: "眠い顔", category: "faces" },
  { emoji: "🤗", name: "ハグ", category: "faces" },
  { emoji: "😱", name: "驚愕", category: "faces" },

  // 動物
  { emoji: "🐶", name: "犬の顔", category: "animals" },
  { emoji: "🐱", name: "猫の顔", category: "animals" },
  { emoji: "🐰", name: "うさぎの顔", category: "animals" },
  { emoji: "🐻", name: "熊の顔", category: "animals" },
  { emoji: "🐼", name: "パンダの顔", category: "animals" },
  { emoji: "🦁", name: "ライオンの顔", category: "animals" },
  { emoji: "🐸", name: "カエルの顔", category: "animals" },
  { emoji: "🐵", name: "サルの顔", category: "animals" },
  { emoji: "🐮", name: "牛の顔", category: "animals" },
  { emoji: "🐷", name: "豚の顔", category: "animals" },

  // 食べ物
  { emoji: "🍎", name: "赤いりんご", category: "food" },
  { emoji: "🍌", name: "バナナ", category: "food" },
  { emoji: "🍕", name: "ピザ", category: "food" },
  { emoji: "🍔", name: "ハンバーガー", category: "food" },
  { emoji: "🍣", name: "寿司", category: "food" },
  { emoji: "🍰", name: "ケーキ", category: "food" },
  { emoji: "🍦", name: "ソフトクリーム", category: "food" },
  { emoji: "🍪", name: "クッキー", category: "food" },
  { emoji: "🍫", name: "チョコレート", category: "food" },
  { emoji: "☕", name: "コーヒー", category: "food" },

  // 自然・天気
  { emoji: "☀️", name: "太陽", category: "nature" },
  { emoji: "🌙", name: "三日月", category: "nature" },
  { emoji: "⭐", name: "星", category: "nature" },
  { emoji: "🌈", name: "虹", category: "nature" },
  { emoji: "⚡", name: "雷", category: "nature" },
  { emoji: "❄️", name: "雪の結晶", category: "nature" },
  { emoji: "🌸", name: "桜", category: "nature" },
  { emoji: "🌳", name: "木", category: "nature" },
  { emoji: "🌊", name: "波", category: "nature" },
  { emoji: "🔥", name: "火", category: "nature" },

  // 乗り物
  { emoji: "🚗", name: "自動車", category: "vehicles" },
  { emoji: "🚌", name: "バス", category: "vehicles" },
  { emoji: "🚇", name: "地下鉄", category: "vehicles" },
  { emoji: "✈️", name: "飛行機", category: "vehicles" },
  { emoji: "🚢", name: "船", category: "vehicles" },
  { emoji: "🚴", name: "自転車に乗る人", category: "vehicles" },
  { emoji: "🚀", name: "ロケット", category: "vehicles" },
  { emoji: "🚁", name: "ヘリコプター", category: "vehicles" },
  { emoji: "🛵", name: "スクーター", category: "vehicles" },
  { emoji: "🚂", name: "機関車", category: "vehicles" },

  // オブジェクト
  { emoji: "📱", name: "スマートフォン", category: "objects" },
  { emoji: "💻", name: "ノートパソコン", category: "objects" },
  { emoji: "⌚", name: "腕時計", category: "objects" },
  { emoji: "📚", name: "本", category: "objects" },
  { emoji: "✏️", name: "鉛筆", category: "objects" },
  { emoji: "🎵", name: "音符", category: "objects" },
  { emoji: "⚽", name: "サッカーボール", category: "objects" },
  { emoji: "🎂", name: "誕生日ケーキ", category: "objects" },
  { emoji: "🎁", name: "プレゼント", category: "objects" },
  { emoji: "💡", name: "電球", category: "objects" }
];

export const getRandomEmojis = (count = 4) => {
  const shuffled = [...emojis].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getRandomOptions = (correctAnswer, count = 4) => {
  const incorrect = emojis
    .filter(emoji => emoji.name !== correctAnswer.name)
    .sort(() => 0.5 - Math.random())
    .slice(0, count - 1);
  
  const options = [correctAnswer, ...incorrect].sort(() => 0.5 - Math.random());
  return options;
};