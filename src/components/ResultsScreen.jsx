const ResultsScreen = ({ results = [], onRestart, onBackToTitle }) => {
  const totalQuestions = results.length;
  const score = results.filter(r => r.isCorrect).length;
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getScoreMessage = () => {
    if (percentage >= 90) return { message: "完璧です！", emoji: "🏆" };
    if (percentage >= 70) return { message: "素晴らしい！", emoji: "🎉" };
    if (percentage >= 50) return { message: "よくできました！", emoji: "👏" };
    if (percentage >= 30) return { message: "もう少し！", emoji: "💪" };
    return { message: "練習あるのみ！", emoji: "📚" };
  };

  const { message, emoji } = getScoreMessage();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-gray-800">
      <div className="text-center mb-8">
        <div className="text-8xl mb-4">{emoji}</div>
        <h1 className="text-3xl font-bold mb-2">ゲーム終了！</h1>
        <p className="text-xl opacity-90">{message}</p>
      </div>
      
      {/* スコア表示 */}
      <div className="bg-gray-100 rounded-3xl p-6 mb-8 text-center max-w-sm w-full">
        <div className="text-5xl font-bold mb-2">{score}</div>
        <div className="text-lg opacity-90">/ {totalQuestions} 問正解</div>
      </div>
      
      {/* 問題別結果一覧 */}
      {results.length > 0 && (
        <div className="w-full max-w-md mb-8">
          <h2 className="text-xl font-bold text-center mb-4">問題別結果</h2>
          <div className="bg-gray-50 rounded-2xl p-4 max-h-64 overflow-y-auto">
            {results.map((result, index) => (
              <div key={index} className="flex items-center gap-3 p-3 border-b border-gray-200 last:border-b-0">
                <div className="text-2xl">{result.question.emoji.emoji}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">{result.question.emoji.name}</div>
                  <div className="text-xs text-gray-600">
                    {result.question.mode === 'emojiToName' ? '絵文字→名前' : '名前→絵文字'}
                  </div>
                </div>
                <div className="text-xl">
                  {result.isCorrect ? '✅' : '❌'}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* ボタン */}
      <div className="space-y-4 w-full max-w-sm">
        <button
          onClick={onRestart}
          className="w-full bg-blue-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all duration-200 min-h-[60px]"
        >
          もう一度プレイ
        </button>
        
        <button
          onClick={onBackToTitle}
          className="w-full bg-gray-100 border border-gray-300 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all duration-200 min-h-[60px]"
        >
          タイトルに戻る
        </button>
      </div>
      
      {/* シェア要素（将来の拡張用） */}
      <div className="mt-8 text-center opacity-75">
        <p className="text-sm">絵文字クイズで{percentage}%の正解率でした！</p>
      </div>
    </div>
  );
};

export default ResultsScreen;