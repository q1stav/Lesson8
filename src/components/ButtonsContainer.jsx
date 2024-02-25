import React from 'react';
import styles from '../styles/Buttons.module.css'
import ButtonsLayout from './ButtonsLayout';

export const ButtonsContainer=(props)=>{
    return(
    <ButtonsLayout style={styles.button} click={props.onClick} value={props.value}/>
    )
}
