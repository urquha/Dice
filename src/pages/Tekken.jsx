import React, { useState } from 'react';
import MyButton from '../components/MyButton';
import SplitPane, { Pane } from 'react-split-pane';
import './Tekken.css';


const Tekken = () => {
    const [blueDice, setBlueDice] = useState("");
    const [redDice, setRedDice] = useState("");
    const [blueHP, setBlueHP] = useState(100);
    const [redHP, setRedHP] = useState(100);
    const [turn, setTurn] = useState(true)

    const diceRoll = (colour) => {
        const current_date = new Date();
        const roll = parseInt(current_date.getMilliseconds()) % 6 + 1;
        console.log(roll);
        if(colour === "blue"){
            setBlueDice(roll);
            setRedHP(redHP - roll)
            setTurn(false)
        }else if(colour === "red"){
            setRedDice(roll)
            setBlueHP(blueHP - roll)
            setTurn(true)
        }
        return;
    };
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

    const mainBit = 
        <div>
            <SplitPane split='vertical' minSize={50} defaultSize="50%" >
                    <Pane className="">
                        <p>HP: {blueHP}</p>
                        <MyButton disabled={!turn} className="rollButton" label="Hit Me" style={{backgroundColor:"Blue"}} onClick={() => diceRoll("blue")}/>
                        <br/>
                        <br/>
                        <p>{blueDice}</p>
                    </Pane>
                    <Pane className="">
                        <p>HP: {redHP}</p>
                        <MyButton disabled={turn} className="rollButton" label="Hit Me" style={{backgroundColor:"Red"}} onClick={() => diceRoll("red")}/>
                        <br/>
                        <br/>
                        <p>{redDice}</p>
                    </Pane>
            </SplitPane>
        </div>



    return (
        <div>
            <h1>Dice Tekken</h1>
            <MyButton link="/" label="Dont you dare fucking click me you little..."></MyButton>
            {isThereAWinner()}
        </div>
    )
}

export default Tekken
