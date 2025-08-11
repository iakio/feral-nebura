const TitleScreen = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-600 flex flex-col items-center justify-center p-6 text-white">
      <div className="text-center mb-8">
        <div className="text-8xl mb-4">🎯</div>
        <h1 className="text-4xl font-bold mb-2">絵文字クイズ</h1>
        <p className="text-xl opacity-90">絵文字の名前を当てよう！</p>
      </div>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 text-center max-w-sm">
        <h2 className="text-lg font-semibold mb-3">ゲームの遊び方</h2>
        <div className="space-y-2 text-sm opacity-90">
          <p>🎮 絵文字を見て正しい名前を選ぼう</p>
          <p>📝 名前を見て正しい絵文字を選ぼう</p>
          <p>🏆 10問中何問正解できるかな？</p>
        </div>
      </div>
      
      <button
        onClick={onStart}
        className="bg-white text-purple-600 px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 min-h-[60px] min-w-[200px]"
      >
        ゲームスタート
      </button>
    </div>
  );
};

export default TitleScreen;