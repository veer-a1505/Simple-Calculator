import React from 'react'

const OutputScreenRow = (props) => {
    return(
        <div>
            <input type="text" readOnly value={props.value}></input>
        </div>
    )
}


export default OutputScreenRow;
