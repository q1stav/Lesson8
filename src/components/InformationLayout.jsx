import React from "react";
import PropTypes from 'prop-types'
import styles from "../styles/Information.module.css"

const InformationLayout=({check,turn, winner, draw})=>{
    return (
        <h1 className={styles.h1}>{check(turn, winner, draw)}</h1>
    )
}

InformationLayout.propTypes={
    check : PropTypes.func,
    turn : PropTypes.bool,
    winner : PropTypes.string,
    draw : PropTypes.bool
}

export default InformationLayout;