import React, { useState } from 'react';
import TextInputForm from './TextInputForm';
import GamePrediction from './GamePrediction';

const MainScreen = () => {
  const [games, setGames] = useState([]);
  const [weeklyResults, setWeeklyResults] = useState([]);

  const handleAddGame = (gameData) => {
    setGames([...games, gameData]);

    // Assuming gameData contains weekly results, add it to weeklyResults state
    setWeeklyResults([...weeklyResults, gameData]);
  }

  return (
    <div>
      <div>
        <h1>Main Screen</h1>
      </div>
      <div>
        <TextInputForm onAddGame={handleAddGame} />
      </div>
      <div>
        <GamePrediction games={games} />
      </div>
      <div>
        <h2>Weekly Results</h2>
        <table>
          <thead>
            <tr>
              <th>Week Number</th>
              <th>Player Name</th>
              <th>Character Name</th>
              <th>Outcome</th>
              <th>Games Won</th>
              <th>Games Lost</th>
            </tr>
          </thead>
          <tbody>
            {weeklyResults.map((result, index) => (
              <tr key={index}>
                <td>{result[0]}</td>
                <td>{result[2]}</td>
                <td>{result[3]}</td>
                <td>{result[4]}</td>
                <td>{result[5]}</td>
                <td>{result[6]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MainScreen;
