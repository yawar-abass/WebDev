import { useState, useEffect } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
const notes = [
  {
    title: "Hello",
    id:"1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati                     nam ad ut repellendus praesentium culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid obcaecati minima unde facere quod rem quasi, ut expedita, ullam sit, excepturi corrupti maxime consequatur quo minus alias dignissimos quidem?  eaque voluptas nobis. Est deleniti at sapiente id minus architecto quia fugit illum amet. elit."
  },
  {
    title: "aldifns",
    id:"2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati                    nam ad ut repellendus praesentium culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid obcaecati minima unde facere quod rem quasi, ut expedita, ullam sit, excepturi corrupti maxime consequatur quo minus alias dignissimos quidem?  eaque voluptas nobis. Est deleniti at sapiente id minus architecto quia fugit illum amet. elit."
  },
  {
    title: "adsfsdaf",
    id:"3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati                     nam ad ut repellendus praesentium culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid obcaecati minima unde facere quod rem quasi, ut expedita, ullam sit, excepturi corrupti maxime consequatur quo minus alias dignissimos quidem?  eaque voluptas nobis. Est deleniti at sapiente id minus architecto quia fugit illum amet. elit."
  },
];
function App() {
  const [notesarr,setNotesarr] = useState(notes)


  const saveNote = note => {    
    setNotesarr(prevNote=>{
      return [note,...prevNote]
    })
};

  
  return (
    <div>
      <NoteForm saveNote={saveNote} />
      <Notes  notes={notesarr} />
    </div>
  );
}

export default App;
