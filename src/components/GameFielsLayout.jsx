import PropTypes from 'prop-types'
import {ButtonsContainer} from './ButtonsContainer';
import styles from '../styles/GameField.module.css';
import { store } from '../store';

const GameFieldLayout=({click})=>{

    return(
        <div className={styles.gameContainer}>
            {store.getState().map((button,index)=>
            <ButtonsContainer
                key={index} 
                value={button} 
                onClick={()=>click(index)}
                /> 
            )}
        </div> 
    )
}

GameFieldLayout.propTypes={
    field : PropTypes.array,
    click : PropTypes.func
}

export default GameFieldLayout