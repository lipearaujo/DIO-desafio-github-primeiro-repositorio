import React from "react";
import './Sidebar.css';

export default function Sidebar (props) {
    return (
        <div className="home-sidebar">
            <div className="home-sidebar-header">
                <h1>Notes</h1>
                <button onClick={props.addNote}>Add</button>
            </div>

            <div className="home-sidebar-notes">
                {props.notes.map((note) => (
                    <div className={`home-sidebar-note ${note.id === props.activeNote && "active"}`} onClick={() => props.setActiveNote(note.id)}>
                        <div className="sidebar-single">
                            <strong>{note.title}</strong>
                            <button onClick={() => props.deleteNote(note.id)}>Delete</button>
                        </div>
                        <p>{note.body}</p>
                        <small className="note-preview">Last modified {new Date(note.lastModified).toLocaleString("pt-BR")}</small>
                    </div>
                
                ))}

            </div>
        </div>
    );
};

