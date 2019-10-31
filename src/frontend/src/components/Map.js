import React from 'react';

export const Map = (props) => {    
    return(
        <div className="imageDiv">
            {props.floor && <img src={`../Plan${props.floor}.png`} alt="image"/> }
        </div>
    )
}