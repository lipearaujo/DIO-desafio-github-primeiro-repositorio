import React, { useState } from 'react';
import './App.css';

import Sidebar from './Sidebar';
import Main from './Main';
import { v4 as uuidv4 } from 'uuid'; //Create a random UUID...

export default function App () {
    const [notes, setNote] = useState([]);
    const [activeNote, setActiveNote] = useState(false);

    function addNote() {
        
        const newNote = {
            id: uuidv4(),
            title: "Untitled",
            body: "Note preview",
            lastModified: Date.now()
        };

        setNote([newNote, ...notes]);
    };

    const deleteNote = (idToDelete) => {
        setNote(notes.filter((note) => note.id !== idToDelete));
    };

    const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote);
    }

    return (
        <div className="App">
            <Sidebar notes={ notes } addNote={ addNote } deleteNote={ deleteNote } activeNote={ activeNote } setActiveNote={ setActiveNote }/>
           <Main activeNote={getActiveNote()}/>
        </div>
    );
};