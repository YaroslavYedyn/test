import React from 'react'
import styles from './item.module.css'

export const Item = ({item, id, notes, removeNote, update}) => {

    return (
        <div className={styles.item}>
            {item.name}
            {item.text}
            {id}
            <button className={styles.btn} onClick={() => removeNote(id)}>remove</button>
            <button className={styles.btn} onClick={() => update(item)}>update</button>
        </div>
    )
}
