import React from 'react';

const userInput = (props)=>{
    return(
        <div>
            <input type="text" onChange={props.fruitHandler} value={props.fruit} />
           

        </div>
    )
}

export default userInput;