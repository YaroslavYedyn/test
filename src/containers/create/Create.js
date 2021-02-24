import React, {useState} from 'react'
import styles from './create.module.css'

export const Create = () => {
    const [newNote, setNewNote] = useState({name: '', text: '', status: 'have', priority: ''})
    const localNotes = JSON.parse(localStorage.getItem('notes'))
    const notes = !!localNotes ? localNotes : [];


    const submit = (e) => {
        localStorage.clear()
        e.preventDefault()
        notes.push(newNote)
        localStorage.setItem('notes', JSON.stringify(localNotes && notes.length > 0 ? notes : []))

    }

    return (
        <main>
            <form className={styles.createForm} onSubmit={(e) => submit(e)}>
                <label>Create note</label>
                <input className={styles.createInput} name='name' type="text" placeholder='Enter name '
                       onChange={(e) => setNewNote({...newNote, name: e.target.value})}/>
                <input className={styles.createInput} name='text' type="text" placeholder='Enter text'
                       onChange={(e) => setNewNote({...newNote, text: e.target.value})}/>
                <div className={styles.status}>
                    <p>Status Note</p>
                    <select name="status" id="status"
                            onChange={(e) => setNewNote({...newNote, status: e.target.value})}>
                        <option value="have">have</option>
                        <option value="ran out">ran out</option>
                    </select>
                </div>
                <div className={styles.priority}>
                    <p>Priority Note</p>
                    <select name="priority" id="priority"
                            onChange={(e) => setNewNote({...newNote, priority: e.target.value})}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <input className={styles.createInput} type="submit" value='CREATE'/>
            </form>
        </main>
    )
}
