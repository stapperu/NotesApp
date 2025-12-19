import { useState } from 'react'
import './index.css'
import NoteFormComponent from './components/NoteFormComponent'
import NotesList from './components/NotesList'
import NoteComponent from './components/NoteComponent'

const App=()=> {
const [notes,setNotes]=useState([]);
const [noteList,setNoteList]=useState([])



  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-200 rounded-lg shadow-lg" >
     <h1 className="text-2xl font-bold mb-4 text-center">Notes App</h1>
      <NoteFormComponent notes={notes} setNotes={setNotes} />
      <NotesList notes={notes} />
     </div>
  )
}

export default App
