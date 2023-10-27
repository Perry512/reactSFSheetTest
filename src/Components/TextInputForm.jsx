import React, { useState } from 'react';

const TextInputForm = ({ onAddGame }) => {
  const handleAddGames = () => {
    const weekNumber = prompt('Enter the week number:');
    if (weekNumber) {
      const gamesData = [];
      for (let i = 0; i < 5; i++) {
        const game = prompt(`Enter information for Game ${i + 1} (Player Name, Character Name, Outcome, Games Won, Games Lost) separated by commas:`);
        if (game) {
          const gameData = [weekNumber, ...game.split(',').map(item => item.trim())];
          gamesData.push(gameData);
        }
      }
      onAddGame(gamesData);
    }
  }

  return (
    <form>
      <button type="button" onClick={handleAddGames}>Add Games</button>
    </form>
  );
}

export default TextInputForm;
