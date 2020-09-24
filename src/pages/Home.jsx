import React from "react"

import MyButton from "../components/MyButton"

function Home() {
    return (
        <div>
            <h1>Dice Games</h1>
            <div>
                <MyButton link="/Bowls"  style={{backgroundColor:"#ff6762"}} label="Dice Bowls"/>
            </div>
            <br></br>
            <div>
                <MyButton link="/Darts" style={{backgroundColor:"#ff6762"}} label="Dice Darts"/>
            </div>
            <br></br>
            <div>
                <MyButton link="/Driving-Range" style={{backgroundColor:"#ff6762"}} label="Dice Driving Range"/>
            </div>
            <br></br>
            <div>
                <MyButton link="/Golf" style={{backgroundColor:"#ff6762"}} label="Dice Golf"/>
            </div>
            <br></br>
            <div>
                <MyButton link="/Penalty-Shootout" style={{backgroundColor:"#ff6762"}} label="Dice Penalty Shootout"/>
            </div>
            <br></br>
            <div>
                <MyButton link="/Tekken" style={{backgroundColor:"#ff6762"}} label="Dice Tekken"/>
            </div>
        </div>
    )
}

export default Home