import {useState} from 'react';

const CreateArea = ({onAdd}) => {
    const [note, setNote] = useState({
        "title": "",
        "content": ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        return(
            setNote(note => ({...note, [name]: value}))
        );
    }

    const addNote = (e) => {
        onAdd(note);
        setNote({
          "title": "",
          "content": ""
        });
        e.preventDefault();
    }

    return (
      <div>
        <form >
          <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
          <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
          <button onClick={addNote}>Add</button>
        </form>
      </div>
    );
  }
  
  export default CreateArea;