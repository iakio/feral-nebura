import { useState, useEffect, useCallback } from 'react';
import { emojis, getRandomOptions } from '../data/emojis';

const GameScreen = ({ onGameEnd }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [gameMode, setGameMode] = useState('emojiToName'); // 'emojiToName' or 'nameToEmoji'
  const [currentEmoji, setCurrentEmoji] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  const totalQuestions = 10;

  useEffect(() => {
    generateQuestion();
  }, [currentQuestion]);

  const handleTimeUp = useCallback(() => {
    setSelectedAnswer({ name: '', emoji: '' });
    setShowResult(true);
    
    setTimeout(() => {
      if (currentQuestion < totalQuestions) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        onGameEnd(score);
      }
    }, 1500);
  }, [currentQuestion, score, onGameEnd]);

  useEffect(() => {
    if (timeLeft > 0 && !showResult && !selectedAnswer) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !selectedAnswer) {
      handleTimeUp();
    }
  }, [timeLeft, showResult, selectedAnswer, currentQuestion, score, onGameEnd, handleTimeUp]);

  const generateQuestion = () => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const mode = Math.random() > 0.5 ? 'emojiToName' : 'nameToEmoji';
    
    setGameMode(mode);
    setCurrentEmoji(randomEmoji);
    setOptions(getRandomOptions(randomEmoji, 4));
    setSelectedAnswer(null);
    setShowResult(false);
    setTimeLeft(10);
  };

  const handleAnswer = (answer) => {
    if (selectedAnswer) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer.name === currentEmoji.name) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < totalQuestions) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        onGameEnd(score + (answer.name === currentEmoji.name ? 1 : 0));
      }
    }, 1500);
  };

  if (!currentEmoji) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-blue-600 p-6 text-white">
      {/* ヘッダー */}
      <div className="flex justify-between items-center mb-8">
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
          <span className="text-sm font-semibold">
            {currentQuestion} / {totalQuestions}
          </span>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
          <span className="text-sm font-semibold">スコア: {score}</span>
        </div>
      </div>

      {/* タイマー */}
      <div className="text-center mb-6">
        <div className={`text-2xl font-bold ${timeLeft <= 3 ? 'text-red-300 animate-pulse' : ''}`}>
          ⏰ {timeLeft}
        </div>
      </div>

      {/* 問題 */}
      <div className="text-center mb-8">
        {gameMode === 'emojiToName' ? (
          <div>
            <div className="text-8xl mb-4">{currentEmoji.emoji}</div>
            <p className="text-xl font-semibold">この絵文字の名前は？</p>
          </div>
        ) : (
          <div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
              <p className="text-2xl font-bold">{currentEmoji.name}</p>
            </div>
            <p className="text-xl font-semibold">この名前の絵文字は？</p>
          </div>
        )}
      </div>

      {/* 選択肢 */}
      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        {options.map((option, index) => {
          let buttonClass = "w-full p-4 rounded-2xl font-semibold text-lg min-h-[60px] transition-all duration-200 ";
          
          if (showResult) {
            if (option.name === currentEmoji.name) {
              buttonClass += "bg-green-500 text-white shadow-lg";
            } else if (selectedAnswer && option.name === selectedAnswer.name) {
              buttonClass += "bg-red-500 text-white shadow-lg";
            } else {
              buttonClass += "bg-white/30 text-white/60";
            }
          } else {
            buttonClass += "bg-white text-gray-800 hover:shadow-lg hover:scale-105 active:scale-95";
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={buttonClass}
              disabled={showResult || selectedAnswer}
            >
              {gameMode === 'emojiToName' ? (
                option.name
              ) : (
                <span className="text-3xl">{option.emoji}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* 結果表示 */}
      {showResult && (
        <div className="text-center mt-6">
          {selectedAnswer && selectedAnswer.name === currentEmoji.name ? (
            <div className="text-2xl">🎉 正解！</div>
          ) : timeLeft === 0 ? (
            <div className="text-2xl">⏰ 時間切れ！</div>
          ) : (
            <div className="text-2xl">❌ 不正解</div>
          )}
        </div>
      )}
    </div>
  );
};

export default GameScreen;