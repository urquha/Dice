import React from 'react'
import { Link } from 'react-router-dom';
import './MyButton.css'

function MyButton(props) {
    const label = props.label



    if(props.link){
        return (
            <Link to={props.link}>
                <button disabled={props.disabled} className={"btn " + props.className} onClick={props.onClick} style={props.style}>{label}</button>
            </Link>
        );
    }else return (
        <button disabled={props.disabled} className={"btn " + props.className} onClick={props.onClick} align="center">{label}</button>
    )

}

export default MyButton