import { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
      });

    function handleCHange(event){
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote, 
                [name]: value}
        })
    }

    function submitNote(event){
        props.onAdd(note);
        event.preventDefault();
    }

    return (
      <div>
        <form>
          <input name="title" placeholder="Title" value={note.title} onChange={handleCHange}/>
          <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleCHange} />
          <button onClick={submitNote}>Add</button>
        </form>
      </div>
    );
  }
  
  export default CreateArea;
  