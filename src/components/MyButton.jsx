import React from 'react'
import { Link } from 'react-router-dom';

function MyButton(props) {
    const label = props.label
    
    return (
        <Link to={props.link}>
            <button style={props.style}>{label}</button>
        </Link>
    );
}

export default MyButton