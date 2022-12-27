import React from "react";
import './Notes.css'
import Note from "./Note";
export default function Notes(props){
    return (
        <div className="notes-container">
            {props.notes.map(note=>{
                return <Note title = {note.title} desc ={note.desc} key={note.id}/>
            })}
        </div>
    )
}