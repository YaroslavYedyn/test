import React from 'react'
import styles from './item.module.css'

export const Item = ({item, id, notes, removeNote, update}) => {

    return (
        <div className={styles.item}>
            <div className={styles.note}>
                <a>NAME:{item.name}</a>
                <a> TEXT: {item.text}</a>
                <a> STATUS: {item.text}</a>
                <a> PRIORITY: {item.text}</a>
            </div>
            <div>
                <button className={styles.btn} onClick={() => removeNote(id)}>remove</button>
                <button className={styles.btn} onClick={() => update(item)}>update</button>
            </div>
        </div>
    )
}
