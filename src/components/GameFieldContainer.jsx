import React from 'react';
import PropTypes from 'prop-types'
import GameFieldLayout from './GameFielsLayout'; 


const GameFieldContainer=({click})=>{    

    return(
        <GameFieldLayout  click={click}/>
    )
}

GameFieldContainer.propTypes={
    click : PropTypes.func
}

export default GameFieldContainer;