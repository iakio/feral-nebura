import { useState, useEffect } from 'react';
import { generateAllQuestions } from '../data/emojiHelpers';

const GameScreen = ({ onGameEnd }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const totalQuestions = 10;

  useEffect(() => {
    const generatedQuestions = generateAllQuestions(totalQuestions);
    setQuestions(generatedQuestions);
  }, []);

  const handleAnswer = (answer) => {
    if (selectedAnswer) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    const currentQuestionData = questions[currentQuestion];
    if (answer.name === currentQuestionData.emoji.name) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        onGameEnd(score + (answer.name === currentQuestionData.emoji.name ? 1 : 0));
      }
    }, 1500);
  };

  if (questions.length === 0) return null;

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-white p-6 text-gray-800">
      {/* ヘッダー */}
      <div className="flex justify-between items-center mb-8">
        <div className="bg-gray-100 rounded-full px-4 py-2">
          <span className="text-sm font-semibold">
            {currentQuestion + 1} / {totalQuestions}
          </span>
        </div>
        <div className="bg-gray-100 rounded-full px-4 py-2">
          <span className="text-sm font-semibold">スコア: {score}</span>
        </div>
      </div>


      {/* 問題 */}
      <div className="text-center mb-8">
        {currentQuestionData.mode === 'emojiToName' ? (
          <div>
            <div className="text-9xl mb-4" style={{ fontSize: '8rem' }}>{currentQuestionData.emoji.emoji}</div>
            <p className="text-xl font-semibold">この絵文字の名前は？</p>
          </div>
        ) : (
          <div>
            <div className="bg-gray-100 rounded-2xl p-6 mb-4">
              <p className="text-2xl font-bold">{currentQuestionData.emoji.name}</p>
            </div>
            <p className="text-xl font-semibold">この名前の絵文字は？</p>
          </div>
        )}
      </div>

      {/* 選択肢 */}
      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        {currentQuestionData.options.map((option, index) => {
          const isCorrect = option.name === currentQuestionData.emoji.name;
          const isSelected = selectedAnswer && option.name === selectedAnswer.name;
          
          let buttonClass = "w-full p-4 rounded-2xl font-semibold text-lg min-h-[60px] ";
          
          if (showResult) {
            if (isCorrect) {
              // 正解は緑色
              buttonClass += "bg-green-500 text-white shadow-lg";
            } else if (isSelected) {
              // 選択した不正解は赤色
              buttonClass += "bg-red-500 text-white shadow-lg";
            } else {
              // その他は薄いグレー
              buttonClass += "bg-gray-200 text-gray-500";
            }
          } else {
            buttonClass += "bg-gray-100 border border-gray-300 text-gray-800 hover:bg-gray-200";
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={buttonClass}
              disabled={showResult || selectedAnswer}
            >
              {currentQuestionData.mode === 'emojiToName' ? (
                option.name
              ) : (
                <span className="text-5xl" style={{ fontSize: '3rem' }}>{option.emoji}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* 結果表示 */}
      {showResult && (
        <div className="text-center mt-6">
          {selectedAnswer && selectedAnswer.name === currentQuestionData.emoji.name ? (
            <div className="text-2xl">🎉 正解！</div>
          ) : (
            <div className="text-2xl">❌ 不正解</div>
          )}
        </div>
      )}
    </div>
  );
};

export default GameScreen;