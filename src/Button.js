import React from 'react'

function Button(props) {
    return (
        <button 
            className={'btn ' + props.name}
            type={props.type}
            onClick={props.functiOnClick}
        >
            {props.name}
        </button>
    )
}

export default Button