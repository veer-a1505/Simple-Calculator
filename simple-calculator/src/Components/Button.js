import React from 'react'

const Button = (props) => {
    // console.log(props)
    return(
        <input type="button" onClick = {props.handleClick} value={props.label}></input>
    )
}


export default Button