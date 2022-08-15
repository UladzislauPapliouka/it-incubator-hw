import React from 'react'
import {AffairType} from "./HW2";
import styles from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={`${styles.affair} ${styles[props.affair.priority]}`}>
            <span>{`${props.affair.name}`}</span>
            <button className={styles.button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
