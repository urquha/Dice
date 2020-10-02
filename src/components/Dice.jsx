import React from 'react'
import './Dice.css'

export default function Dice(props) {
    const rollOne = <div class={"dice first-face " + props.colour}>
                        <span class="dot"> </span>
                    </div>

    const rollTwo = <div class={"dice second-face " + props.colour}>
                        <span class="dot"> </span>
                        <span class="dot"> </span>
                    </div>

    const rollThree = <div class={"dice third-face " + props.colour}>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>

    const rollFour = <div class={"fourth-face dice " + props.colour}>
                        <div class="column">
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                        <div class="column">
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                    </div>

    const rollFive = <div class={"fifth-face dice " + props.colour}>
                        <div class="column">
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                        
                        <div class="column">
                            <span class="dot"></span>
                        </div>
                        
                        <div class="column">
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                    </div>


    const rollSix = <div class={"fourth-face dice " + props.colour}>
                        <div class="column">
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                        <div class="column">
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                    </div>
    
    switch(props.roll) {
            case 1:
                return rollOne
            case 2:
                return rollTwo
            case 3:
                return rollThree
            case 4:
                return rollFour
            case 5:
                return rollFive
            case 6:
                return rollSix
            default:
                return <></>
        }



}