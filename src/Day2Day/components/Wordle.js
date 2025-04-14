import { Link } from 'react-router-dom';
import '../assets/Wordle.css';
import React, { useState } from 'react';

function Wordle() {
  const [secretWord, setSecretWord] = useState('');
  const [chancesLeft, setChancesLeft] = useState(0);
  const [guessedWords, setGuessedWords] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const fetchRandomWord = () => {
    const startSound = document.getElementById('startsound');
    startSound.play();

    fetch("https://random-word-api.vercel.app/api?words=1&length=5")
      .then((response) => response.json())
      .then((data) => {
        const word = data[0].toUpperCase();
        setSecretWord(word);
        setChancesLeft(word.length);
        setGuessedWords([]);
        setFeedback([]);
        setGameOver(false);
        console.log("Secret Word: ", word);
      })
      .catch((error) => {
        console.error("Error: ", error.message);
      });
  };

  const checkWordle = (guess) => {
    const originalWord = secretWord;
    let secretLetters = {};
    let guessLetters = {};
    let feedback = guess.split("").map((letter, index) => {
      const correctLetter = originalWord[index];
      if (letter === correctLetter) {
        return "C";
      } else {
        secretLetters[correctLetter] = (secretLetters[correctLetter] || 0) + 1;
        guessLetters[letter] = (guessLetters[letter] || 0) + 1;
      }
    });

    feedback.forEach((result, index) => {
      const letter = guess[index];
      if (
        result !== "C" &&
        secretLetters[letter] > 0 &&
        guessLetters[letter] > 0
      ) {
        feedback[index] = "E";
        secretLetters[letter]--;
      } else if (result !== "C") {
        feedback[index] = "W";
      }
    });

    return feedback;
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length === secretWord.length) {
      const newFeedback = checkWordle(inputValue.toUpperCase());
      setFeedback(newFeedback);
      setGuessedWords((prev) => [...prev, inputValue.toUpperCase()]);
      setChancesLeft((prev) => prev - 1);

      if (newFeedback.every((val) => val === "C") || chancesLeft === 0) {
        setGameOver(true);
        const endSound = document.getElementById(
          newFeedback.every((val) => val === "C") ? 'endsuccesssound' : 'endfailsound'
        );
        endSound.play();
      }
    } else {
      alert(`Please enter a ${secretWord.length}-letter word.`);
    }
    setInputValue('');
  };

  const handleStartGame = () => {
    fetchRandomWord();
  };

  const handleReloadGame = () => {
    window.location.reload();
  };

  return (
    <div className="container">
        <button aria-label='On Click' id='wordleButton'>
            <Link to='/'>Home</Link>
        </button>
      <h1>Guess the Word</h1>
      <button onClick={handleStartGame} disabled={gameOver} id='wordleButton'>
        Start Game
      </button>
      <div id="word-container">
        <WordContainer secretWord={secretWord} feedback={feedback} />
      </div>
      <p>Chances left: {gameOver ? "Game Over" : chancesLeft}</p>
      <p>Word Length: {secretWord.length}</p>
      <div id="feedback">
        {feedback.map((f, index) => (
          <span key={index} className={f === 'C' ? 'correct' : f === 'E' ? 'exists' : 'wrong'}>
            {secretWord[index]}
          </span>
        ))}
      </div>
      <div id="history-container">
        <HistoryList guessedWords={guessedWords} checkWordle={checkWordle} />
      </div>
      <form id="guess-form" onSubmit={handleGuessSubmit}>
        <input
          type="text"
          id="guess-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button id="wordleButton" type="submit" disabled={gameOver}>
          Guess
        </button>
      </form>
      <button id="wordleButton" onClick={handleReloadGame}>
        Reload Game
      </button>

      <audio id="startsound">
        <source src="https://cdn.codechef.com/Learning/startsound.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <audio id="endsuccesssound">
        <source src="https://cdn.codechef.com/Learning/endsuccesssound.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <audio id="endfailsound">
        <source src="https://cdn.codechef.com/Learning/endfailsound.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

// WordContainer Component
const WordContainer = ({ secretWord, feedback }) => {
  return (
    <>
      {secretWord.split('').map((letter, index) => (
        <span
          key={index}
          className={`letter ${feedback[index] === 'C' ? 'correct' : feedback[index] === 'E' ? 'exists' : feedback[index] === 'W' ? 'wrong' : ''}`}
        >
          {feedback[index] ? letter : '?'}
        </span>
      ))}
    </>
  );
};

// HistoryList Component
const HistoryList = ({ guessedWords, checkWordle }) => {
  return (
    <ul id="history-list">
      {guessedWords.map((word, index) => {
        const feedback = checkWordle(word);
        return (
          <li key={index} className={feedback.every((val) => val === 'C') ? 'correct-word' : 'incorrect-word'}>
            {word.split('').map((letter, i) => (
              <span key={i} className={`letter ${feedback[i] === 'C' ? 'correct' : feedback[i] === 'E' ? 'exists' : feedback[i] === 'W' ? 'wrong' : ''}`}>
                {letter}
              </span>
            ))}
          </li>
        );
      })}
    </ul>
  );
};

export default Wordle;
