const ResultsScreen = ({ score, onRestart, onBackToTitle }) => {
  const totalQuestions = 10;
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
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-pink-600 flex flex-col items-center justify-center p-6 text-white">
      <div className="text-center mb-8">
        <div className="text-8xl mb-4">{emoji}</div>
        <h1 className="text-3xl font-bold mb-2">ゲーム終了！</h1>
        <p className="text-xl opacity-90">{message}</p>
      </div>
      
      {/* スコア表示 */}
      <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mb-8 text-center max-w-sm w-full">
        <div className="mb-6">
          <div className="text-6xl font-bold mb-2">{score}</div>
          <div className="text-xl opacity-90">/ {totalQuestions} 問</div>
        </div>
        
        <div className="mb-4">
          <div className="bg-white/20 rounded-full h-4 overflow-hidden">
            <div 
              className="bg-white h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="text-2xl font-bold mt-2">{percentage}%</div>
        </div>
        
        {/* 詳細スコア */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-green-500/30 rounded-xl p-3">
            <div className="text-2xl mb-1">✅</div>
            <div className="font-semibold">正解</div>
            <div className="text-lg font-bold">{score}</div>
          </div>
          <div className="bg-red-500/30 rounded-xl p-3">
            <div className="text-2xl mb-1">❌</div>
            <div className="font-semibold">不正解</div>
            <div className="text-lg font-bold">{totalQuestions - score}</div>
          </div>
        </div>
      </div>
      
      {/* ボタン */}
      <div className="space-y-4 w-full max-w-sm">
        <button
          onClick={onRestart}
          className="w-full bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 min-h-[60px]"
        >
          もう一度プレイ
        </button>
        
        <button
          onClick={onBackToTitle}
          className="w-full bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-200 min-h-[60px]"
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