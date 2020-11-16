import React from 'react'
import OutputScreenRow   from  './OutputScreenRow'

const   OutputScreen= (props) => {
    return(
        <div className="screen-row">
            <OutputScreenRow  value = {props.problem}/>
            <OutputScreenRow value = {props.solution}/>
        </div>
    )
}

export default OutputScreen;