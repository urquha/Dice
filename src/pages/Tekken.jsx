import React, { useState } from 'react';
import MyButton from '../components/MyButton';
import SplitPane, { Pane } from 'react-split-pane';
import './Tekken.css';


const Tekken = () => {
    const [blueDice, setBlueDice] = useState([0,0,0]);
    const [redDice, setRedDice] = useState([0,0,0]);
    const [blueHP, setBlueHP] = useState(100);
    const [redHP, setRedHP] = useState(100);
    const [roll1, setRoll1] = useState(false)
    const [roll2, setRoll2] = useState(false)
    const [roll3, setRoll3] = useState(false)
    // True is blue, false is red
    const [turn, setTurn] = useState(true)

    const diceRoll = (dice) => {
        console.log(blueDice)
        const colour = dice.substring(0,1)
        const diceNo = dice.substring(1,2)
        console.log(roll1, roll2, roll3)
        if(colour === "b"){
            setRedDice([0,0,0])
            if(diceNo === "1") setRoll1(true)
            else if(diceNo === "2") setRoll2(true)
            else if(diceNo === "3") setRoll3(true)
            var currentRoll = blueDice
            currentRoll[parseInt(diceNo) - 1] = rollDie()
            console.log("currentRoll " + currentRoll)
            setBlueDice(currentRoll);
            console.log(roll1, roll2, roll3)
            if((roll1 &&  roll2 === true) || (roll1 && roll3 === true) || (roll2 && roll3 === true)){
                console.log("hello")
                if(currentRoll[0] === currentRoll[1] === currentRoll[2]){
                    setRollsFalse()
                    setTurn(true)
                    setRedHP(redHP - currentRoll[0] - currentRoll[1] - currentRoll[2])
                    return  
                } 
                if(currentRoll[0] === currentRoll[1]){
                    setRollsFalse()
                    setTurn(true)
                    setRedHP(redHP - currentRoll[0] - currentRoll[1])
                    return  
                } 
                if(currentRoll[1] === currentRoll[2]){
                    setRollsFalse()
                    setTurn(true)
                    setRedHP(redHP - currentRoll[1] - currentRoll[2])
                    return  
                }
                if(currentRoll[0] === currentRoll[2]){
                    setRollsFalse()
                    setTurn(true)
                    setRedHP(redHP - currentRoll[0] - currentRoll[2])
                    return  
                }
                setRollsFalse()
                setTurn(false)
            }
        }else if(colour === "r"){
            setBlueDice([0,0,0])
            if(diceNo === "1") setRoll1(true)
            else if(diceNo === "2") setRoll2(true)
            else if(diceNo === "3") setRoll3(true)
            var currentRoll = redDice
            currentRoll[parseInt(diceNo) - 1] = rollDie()
            console.log(currentRoll)
            setRedDice(currentRoll);
            console.log(roll1, roll2, roll3)
            if((roll1 &&  roll2 === true) || (roll1 && roll3 === true) || (roll2 && roll3 === true)){
                console.log("hello")
                if(currentRoll[0] === currentRoll[1] === currentRoll[2]){
                    setRollsFalse()
                    setTurn(false)
                    setBlueHP(blueHP - currentRoll[0] - currentRoll[1] - currentRoll[2])
                    return  
                } 
                if(currentRoll[0] === currentRoll[1]){
                    setRollsFalse()
                    setTurn(false)
                    setBlueHP(blueHP - currentRoll[0] - currentRoll[1])
                    return  
                } 
                if(currentRoll[1] === currentRoll[2]){
                    setRollsFalse()
                    setTurn(false)
                    setBlueHP(blueHP - currentRoll[1] - currentRoll[2])
                    return  
                }
                if(currentRoll[0] === currentRoll[2]){
                    setRollsFalse()
                    setTurn(false)
                    setBlueHP(blueHP - currentRoll[0] - currentRoll[2])
                    return  
                }
                setRollsFalse()
                setTurn(true)
            }
        }
        return;
    };

    function setRollsFalse() {
        setRoll1(false)
        setRoll2(false)
        setRoll3(false)
    }
    function rollDie() {
        const current_date = new Date();
        return parseInt(current_date.getMilliseconds()) % 6 + 1;
    }
    
    function isThereAWinner() {
        if(blueHP < 1){
            return redWinner
        }else if(redHP < 1){
            return blueWinner
        }
        return mainBit
    }

    const blueWinner = 
        <div>
            <br/>
            <h1>Blue Winnnneeerrrrrr!!!!!!!</h1>
        </div>
    
    const redWinner = 
        <div>
            <br/>
            <h1>Red Winnnneeerrrrrr!!!!!!!</h1>
        </div>

    function disabled(button){
        const colour = button.substring(0,1)
        const die = button.substring(1,2)
        console.log(button, turn)
        if(colour === "b"){
            if(turn === false) return true
            else if(die === "1") return roll1
            else if(die === "2") return roll2
            else if(die === "3") return roll3
        }else if(colour === "r"){
            if(turn === true) return true
            else if(die === "1") return roll1
            else if(die === "2") return roll2
            else if(die === "3") return roll3
        }
    }

    const mainBit = 
        <div>
            <SplitPane split='vertical' minSize={50} defaultSize="50%" >
                    <Pane className="">
                        <p>HP: {blueHP}</p>
                        <MyButton disabled={disabled("b1")} className="rollButton" label="Hit Me" style={{backgroundColor:"Blue"}} onClick={() => diceRoll("b1")}/>
                        <MyButton disabled={disabled("b2")} className="rollButton" label="Hit Me" style={{backgroundColor:"Blue"}} onClick={() => diceRoll("b2")}/>
                        <MyButton disabled={disabled("b3")} className="rollButton" label="Hit Me" style={{backgroundColor:"Blue"}} onClick={() => diceRoll("b3")}/>
                        <br/>
                        <br/>
                        <p>{blueDice[0]} {blueDice[1]} {blueDice[2]}</p>
                    </Pane>
                    <Pane className="">
                        <p>HP: {redHP}</p>
                        <MyButton disabled={disabled("r1")} className="rollButton" label="Hit Me" style={{backgroundColor:"Red"}} onClick={() => diceRoll("r1")}/>
                        <MyButton disabled={disabled("r2")} className="rollButton" label="Hit Me" style={{backgroundColor:"Red"}} onClick={() => diceRoll("r2")}/>
                        <MyButton disabled={disabled("r3")} className="rollButton" label="Hit Me" style={{backgroundColor:"Red"}} onClick={() => diceRoll("r3")}/>
                        <br/>
                        <br/>
                        <p>{redDice[0]}     {redDice[1]}       {redDice[2]}</p>
                    </Pane>
            </SplitPane>
        </div>



    return (
        <div>
            <h1>Dice Tekken</h1>
            <MyButton link="/" label="Dont you dare fucking click me you little..."></MyButton>
            <p>3 Die each. A double or triple roll is a hit, dealing the damage of all die with the same number combined.</p>
            <p>If a hit is recorded then the player gets another roll.</p>
            <br/>
            {isThereAWinner()}
        </div>
    )
}

export default Tekken
