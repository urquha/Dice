import React from 'react'
import { Link } from 'react-router-dom';
import './MyButton.css'

function MyButton(props) {
    const label = props.label
    console.log(props.link)
    if(props.link){
        return (
            <Link to={props.link}>
                <button className={"btn " + props.className} onClick={props.onClick} style={props.style}>{label}</button>
            </Link>
        );
    }else return (
        <button className={"btn " + props.className} onClick={props.onClick} style={props.style} align="center">{label}</button>
    )

}

export default MyButton