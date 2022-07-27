import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateApp from "./CreateArea";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    setNotes( prevNotes => {
      return notes.filter( (note, index) => {
        return index !== id;      
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateApp onAdd={addNote} />
      {notes.map((note, index) => {
        return <Note 
        key={index}
        id={index}
        title={note.title} 
        content={note.content}
        onDelete={deleteNote} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
