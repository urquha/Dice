import React from 'react'
import { Link } from 'react-router-dom';
import './MyButton.css'

function MyButton(props) {
    const label = props.label
    if(props.Link){
        return (
            <Link to={props.link}>
                <button className="btn" onClick={props.onClick} style={props.style}>{label}</button>
            </Link>
        );
    }else return (
        <button className="btn" onClick={props.onClick} style={props.style}>{label}</button>
    )

}

export default MyButton