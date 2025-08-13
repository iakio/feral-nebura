import { useState } from 'react'
import TitleScreen from './components/TitleScreen'
import GameScreen from './components/GameScreen'
import ResultsScreen from './components/ResultsScreen'

function App() {
  const [gameState, setGameState] = useState('title') // 'title', 'playing', 'results'
  const [gameResults, setGameResults] = useState([])

  const handleStartGame = () => {
    setGameState('playing')
  }

  const handleGameEnd = (results) => {
    setGameResults(results)
    setGameState('results')
  }

  const handleRestart = () => {
    setGameState('playing')
  }

  const handleBackToTitle = () => {
    setGameState('title')
    setGameResults([])
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
          results={gameResults}
          onRestart={handleRestart}
          onBackToTitle={handleBackToTitle}
        />
      )}
    </div>
  )
}

export default App
