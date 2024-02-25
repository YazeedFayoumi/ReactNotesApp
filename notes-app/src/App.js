import logo from './logo.svg';
import './App.css';
import React from 'react';
import {nanoid} from 'nanoid'
import NoteList from './NoteList';
import { useState, useEffect } from 'react';

function App() {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: 'this is my first note',
    date:'2024/2/25',
  },
  {
    id: nanoid(),
    text: 'this is my sec note',
    date:'2024/2/26',
  },
  {
    id: nanoid(),
    text: 'this is my third note',
    date:'2024/2/27',
  },
  {
    id: nanoid(),
    text: 'this is my forth note',
    date:'2024/2/28',
  },
]);

useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('notes-app-data')
  );

  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []); // only for first load 

useEffect( () => {
  localStorage.setItem(
 'notes-app-data', JSON.stringify(notes)
  );
},[notes]
);

const addNewNote=(text)=>{
  const date = new Date();
  const newNote={
    id: nanoid(), // function adds new ids by default
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes=[...notes,newNote]
  setNotes(newNotes);
}

const deleteNote = (id) =>{
  const newNotes = notes.filter((note)=>note.id!==id)
  setNotes(newNotes)
}




  return (
    <div className="container">
      <NoteList notes={notes} addNewNoteHandler={addNewNote}
      deleteNoteHandler={deleteNote} />
    </div>
  );
}

export default App;
