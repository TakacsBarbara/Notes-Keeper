import {useState} from 'react';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';

const CreateArea = ({onAdd}) => {
    const [note, setNote] = useState({
        "title": "",
        "content": ""
    });

    const [isShowed, setShow] = useState(false);

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

    const handleShow = () => {
      setShow(true);
    }

    return (
      <div>
        <form className='create-note'>
          {isShowed && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
          <textarea 
            onClick={handleShow} 
            onChange={handleChange} 
            name="content" 
            placeholder="Take a note..." 
            rows={isShowed ? "3" : "1"} 
            value={note.content} />
          <Zoom in={isShowed}>
            <Fab onClick={addNote} aria-label="add" >
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    );
  }
  
  export default CreateArea;