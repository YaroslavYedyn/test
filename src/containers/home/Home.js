import React, {useEffect, useState} from 'react'
import styles from './home.module.css'
import {Item} from "../../components/item";


export const Home = () => {
    const [notes, setNotes] = useState([])
    const [check, setCheck] = useState(false)
    const [updateNote, setUpdateNote] = useState('')
    const setData = () => {
        setNotes(JSON.parse(localStorage.getItem('notes')))
    }
    useEffect(() => {
        setData()
    }, [])
    console.log(notes);
    const removeNote = (id) => {
        const newNotes = notes.filter((value, index) => index !== +id)
        localStorage.setItem('notes', JSON.stringify(newNotes))
        setNotes(newNotes)
    }
    const update = (Item) => {
        setUpdateNote(Item)
        setCheck(true)


    }
    const save = () => {
        setCheck(false)
    }

    return (
        <main>
            <p className={styles.title}>My Notes</p>
            <div className={styles.listWrapper}>
                {
                    check ?
                        <div className={styles.update}>UPDATE
                            {
                                updateNote !== '' ? updateNote.name : ''
                            }
                            <button onClick={save}>okay</button>
                        </div> : ''
                }
                {
                    notes.length > 0 ? notes.map((value, index) => <Item notes={notes}
                                                                         key={index}
                                                                         id={index}
                                                                         item={value}
                                                                         removeNote={removeNote}
                                                                         update={update}
                    />) : 'Notes is empty'
                }
            </div>
        </main>
    )
}
