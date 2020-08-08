import React from 'react';
import {Button} from 'react-bootstrap';
import DiceResults from './DiceResults';

class DiceRoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rolledDice: [],
      keptDice: [],
      display: 'none'
    }
  }

  handleDiceRoll = (props) => {
    var diceArray = [];
    for (var i = this.state.keptDice.length; i < 5; i++) {
      var diceRoll = Math.floor(Math.random() * 6) + 1;
      diceArray.push(diceRoll)
    }
    diceArray = diceArray.concat(this.state.keptDice)
    this.setState({rolledDice: diceArray.sort()})
    this.handleDisplayDice()
  }

  handleDisplayDice = () => {
    this.setState({
      display: 'block'
    })
  }

  handleHideDice = () => {
    this.setState({
      display: 'none'
    })
  }

  handleDiceSelection = () => {
    var diceToKeep = [];
    diceToKeep.push(2, 3, 4)
    this.setState({
      keptDice: diceToKeep.sort()
    })
  }

  render() {
    return (
      <div>
          <Button onClick={this.handleDiceRoll}>Roll your dice</Button>
          <DiceResults diceRolled={this.state.rolledDice} display={this.state.display} diceSelection={this.handleDiceSelection} />
      </div>
    );
  }
}

export default DiceRoll;
