import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const rollDice = (sides) => {
  return Math.floor(Math.random() * sides + 1);
}

const Dice = ({ sides }) => {
  const [rollValue, setRollValue] = useState(null)

  const handleClick = () => {
    setRollValue(rollDice(sides))
  }

  return (
    <div class="diceArea">
      <button
        id={"d" + sides}
        onClick={handleClick}
      >
        {`Roll d${sides}`}
      </button>
      <p id={"d" + sides + "Result"}>{rollValue}</p>
    </div>
  )
}

const dValues = [20, 12, 10, 8, 6, 4]

const headerImageSource = `https://cdn.clipart.email/daba945fa7ca50ca28460feb716e3fbe_d20-system-dungeons-dragons-set-dice-role-playing-game-white-_800-905.jpeg`

const DiceHeading = () => {
  return (
    <h2>
      Dice Roller
      <a
        class="moveimage"
        href="https://www.clipart.email/download/18402559.html"
        title="Image from clipart.email">
        <img
          src={headerImageSource}
          width="40" class="rounded" alt="D20 Dice D20 Clipart"
        />
      </a>
    </h2>
  )
}

const DiceContainer = () => {
  return (
    <div class="diceContainer">
      {dValues.map(dValue => {
        return (
          <Dice sides={dValue} key={dValue}/>
        )
      })}
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <body>
        <DiceHeading />
        <DiceContainer />
      </body>
    </div>
  );
}

export default App;
