import React, { useState } from 'react';
import MyButton from '../components/MyButton';
import SplitPane, { Pane } from 'react-split-pane';
import './Tekken.css';


const Tekken = () => {
    const [blueDice, setBlueDice] = useState("");
    const [redDice, setRedDice] = useState("")

    const diceRoll = (colour) => {
        const current_date = new Date();
        const roll = parseInt(current_date.getMilliseconds()) % 6 + 1;
        console.log(roll);
        if(colour === "blue"){
            setBlueDice(roll);
        }else if(colour === "red"){
            setRedDice(roll)
        }
        return;
    };

    return (
        <div>
            <h1>Dice Tekken</h1>
            <MyButton link="" label="Dont you dare fucking click me you little..."></MyButton>
            
            <div>
                <SplitPane split='vertical' minSize={50} defaultSize="50%" >
                        <Pane className="">
                            <p>{blueDice}</p>
                            <MyButton label="Hit Me" style={{backgroundColor:"Blue"}} onClick={() => diceRoll("blue")}/>
                        </Pane>
                        <Pane className="">
                            <p>{redDice}</p>
                            <MyButton label="Hit Me" style={{backgroundColor:"Red"}} onClick={() => diceRoll("red")}/>
                        </Pane>
                </SplitPane>
            </div>
        </div>
    )
}

export default Tekken
