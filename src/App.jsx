import { useState } from 'react'
import TitleScreen from './components/TitleScreen'
import GameScreen from './components/GameScreen'
import ResultsScreen from './components/ResultsScreen'

function App() {
  const [gameState, setGameState] = useState('title') // 'title', 'playing', 'results'
  const [finalScore, setFinalScore] = useState(0)

  const handleStartGame = () => {
    setGameState('playing')
  }

  const handleGameEnd = (score) => {
    setFinalScore(score)
    setGameState('results')
  }

  const handleRestart = () => {
    setGameState('playing')
  }

  const handleBackToTitle = () => {
    setGameState('title')
    setFinalScore(0)
  }

  return (
    <div className="App">
      {gameState === 'title' && (
        <TitleScreen onStart={handleStartGame} />
      )}
      
      {gameState === 'playing' && (
        <GameScreen onGameEnd={handleGameEnd} />
      )}
      
      {gameState === 'results' && (
        <ResultsScreen 
          score={finalScore}
          onRestart={handleRestart}
          onBackToTitle={handleBackToTitle}
        />
      )}
    </div>
  )
}

export default App
