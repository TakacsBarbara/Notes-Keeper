
const Note = ({id, title, content, onDelete}) => {
  return (
    <div className="note" key={id} id={id}>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </div>
  )
}

export default Note;
