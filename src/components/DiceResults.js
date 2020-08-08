import React from 'react';
import {Button} from 'react-bootstrap';
import diceOne from './images/dice-six-faces-1.png';
import diceTwo from './images/dice-six-faces-2.png';
import diceThree from './images/dice-six-faces-3.png';
import diceFour from './images/dice-six-faces-4.png';
import diceFive from './images/dice-six-faces-5.png';
import diceSix from './images/dice-six-faces-6.png';

class DiceResults extends React.Component {
  getDiceFace = (dice) => {
    if (this.props.diceRolled[dice] === 1) {
      return diceOne
    } else if (this.props.diceRolled[dice] === 2) {
      return diceTwo
    } else if (this.props.diceRolled[dice] === 3) {
      return diceThree
    } else if (this.props.diceRolled[dice] === 4) {
      return diceFour
    } else if (this.props.diceRolled[dice] === 5) {
      return diceFive
    } else if (this.props.diceRolled[dice] === 6) {
      return diceSix
    }
  }

  render() {
    return (
        <div style={{paddingTop: "20px", display: '' + this.props.display + ''}}>
            <Button onClick={this.props.diceSelection} value={this.props.diceRolled[0]} variant="outline-secondary" style={{backgroundImage: 'url(' + this.getDiceFace(0) + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '40px', height: '40px', marginRight: '15px'}}></Button>
            <Button onClick={this.props.diceSelection} value={this.props.diceRolled[1]} variant="outline-secondary" style={{backgroundImage: 'url(' + this.getDiceFace(1) + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '40px', height: '40px', marginRight: '15px'}}></Button>
            <Button onClick={this.props.diceSelection} value={this.props.diceRolled[2]} variant="outline-secondary" style={{backgroundImage: 'url(' + this.getDiceFace(2) + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '40px', height: '40px', marginRight: '15px'}}></Button>
            <Button onClick={this.props.diceSelection} value={this.props.diceRolled[3]} variant="outline-secondary" style={{backgroundImage: 'url(' + this.getDiceFace(3) + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '40px', height: '40px', marginRight: '15px'}}></Button>
            <Button onClick={this.props.diceSelection} value={this.props.diceRolled[4]} variant="outline-secondary" style={{backgroundImage: 'url(' + this.getDiceFace(4) + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '40px', height: '40px', marginRight: '15px'}}></Button>
        </div>
    );
  }
}

export default DiceResults;
