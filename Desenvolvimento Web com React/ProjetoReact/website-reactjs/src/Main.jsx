import React from "react";
import './Main.css';

export default function Main (props) {
    return (
        <div className="home-main">
            <div className="home-main-note-edit">
                <input type="text" id="input-title" autoFocus value={props.title}/>
                <textarea id="textarea-note" cols="195" rows="15" placeholder="Write your text here..." value={props.body}></textarea>
            </div>

            <div className="app-main-note-preview">
                <h1 className="preview-title">{props.title}</h1>
                <div className="markdown-preview">{props.body}</div>
            </div>
        </div>
    );
}