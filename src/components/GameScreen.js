import React from 'react';
import DiceRoll from './DiceRoll';

function GameScreen() {
  return (
      <div className="game-screen">
          <p>This is the game screen</p>
          <p>This is where all of the stuff in the game happens</p>
          <p>Such as displaying the players and their score</p>
          <p>Player turn order</p>
          <p>Button to roll the dice on the players turn</p>
          <DiceRoll />
      </div>
  );
}

export default GameScreen;
