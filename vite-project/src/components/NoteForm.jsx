import React  from "react";
import { useState } from "react";
import './NoteForm.css'
export default function NoteForm(props){
  
  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')
  function handleTitle(event){
    setTitle(event.target.value)
  }
  function handleText(event){
    setDesc(event.target.value)
  }
  
  
  function handleSubmit(event){
    event.preventDefault();
    const note= {
      title: title,
      desc: desc,
      id:Math.random
    };
    props.saveNote(note);
    setTitle('')
    setDesc('')
  }
    return (
        <div className="Note">
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="Title" >Title:</label>
                    <input type="text" value= {title} onChange={handleTitle}/>
                    <label htmlFor="note">Note:</label>
                    <textarea name="note" id="note" value={desc} cols="30" rows="10" onChange={handleText}></textarea>
                    <button type="submit">Add Note</button>
                  </form>
                
        </div>
        
        
        )
}