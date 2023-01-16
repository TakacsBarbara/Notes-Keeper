import {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from "./components/CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  const addNewNote = (newNote) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const addedNewNote = {id, ...newNote};
    setNotes((notes) => [...notes, addedNewNote]);
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className="container">
      <Header />
      <CreateArea onAdd={addNewNote} />
      {notes.map((note) => {
        return (
          <Note key={note.id} id={note.id} title={note.title} content={note.content} onDelete={deleteNote} />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
