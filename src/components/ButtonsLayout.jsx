import PropTypes from 'prop-types'
import React from "react";

const ButtonsLayout=({style, click, value})=>{   
    return(
        <button className={style} onClick={click}>{value}</button> 
    )
}

ButtonsLayout.protoTypes={
    style : PropTypes.array,
    click : PropTypes.func,
    value : PropTypes.string
}

export default ButtonsLayout;