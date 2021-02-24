import React, {useEffect, useState} from 'react'
import styles from './home.module.css'
import {Item} from "../../components/item";


export const Home = () => {
    //----------UPDATE----------
    // const [newNote, setNewNote] = useState({name: '', text: '', status: 'have', priority: ''})
    // const localNotes = JSON.parse(localStorage.getItem('notes'))
    // const notes = localNotes.length > 0 ? localNotes : [];
    //----------UPDATE----------


    const [notes, setNotes] = useState([])
    const [searchValue, setSearchValue] = useState('')
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
    //----------UPDATE----------
    // const res = (e) => {
    //     localStorage.clear()
    //     e.preventDefault()
    //     // notes.push(newNote)
    //     // localStorage.setItem('notes', JSON.stringify(localNotes && notes.length > 0 ? notes : []))
    //
    // }
    //----------UPDATE----------
    const search = (e) => {
        e.preventDefault()
        if (searchValue === '') {
            setData()
        } else {
            const findNotes = notes.filter((value, index) => value.name.includes(searchValue));
            setNotes(findNotes)
        }
    }

    return (
        <main>

            <div className={styles.listWrapper}>
                <form onSubmit={(e) => search(e)}>
                    <input type="text" onChange={event => setSearchValue(event.target.value)}/>
                    <input type="submit"/>
                </form>
                <p className={styles.title}>My Notes</p>

                {
                    !!notes && (notes.length > 0 ? notes.map((value, index) => <Item notes={notes}
                                                                                     key={index}
                                                                                     id={index}
                                                                                     item={value}
                                                                                     removeNote={removeNote}
                                                                                     update={update}
                        />) : 'Notes is empty'
                    )}
            </div>
            {
                //----------UPDATE----------
                // check ?
                //     // <div className={styles.update}>
                //     //     <form className={styles.updateForm} onClick={(e) => res(e)}>
                //     //         <label>Update note</label>
                //     //         <input className={styles.updateInput} name='name' type="text" placeholder='Enter name '
                //     //                onChange={(e) => setNewNote({...newNote, name: e.target.value})}/>
                //     //         <input className={styles.updateInput} name='text' type="text" placeholder='Enter text'
                //     //                onChange={(e) => setNewNote({...newNote, text: e.target.value})}/>
                //     //         <div className={styles.status}>
                //     //             <p>Status Note</p>
                //     //             <select name="status" id="status"
                //     //                     onChange={(e) => setNewNote({...newNote, status: e.target.value})}>
                //     //                 <option value="have">have</option>
                //     //                 <option value="ran out">ran out</option>
                //     //             </select>
                //     //         </div>
                //     //         <div className={styles.priority}>
                //     //             <p>Priority Note</p>
                //     //             <select name="priority" id="priority"
                //     //                     onChange={(e) => setNewNote({...newNote, priority: e.target.value})}>
                //     //                 <option value="1">1</option>
                //     //                 <option value="2">2</option>
                //     //                 <option value="3">3</option>
                //     //                 <option value="4">4</option>
                //     //                 <option value="5">5</option>
                //     //             </select>
                //     //         </div>
                //     //         <input className={styles.btn} onClick={() => save()} type="submit" value='UPDATE'/>
                //     //     </form>
                //         {
                //             updateNote !== '' ? <div>{updateNote.name}</div> : ''
                //         }
                //     </div> : ''
                //----------UPDATE----------
            }
        </main>
    )
}
