
import Notes from './Notes';
import AddNote from './AddNote';
const NoteList = ({notes , addNewNoteHandler, deleteNoteHandler }) =>{
    return(
        <div className="list">
           {notes.map((note)=>( // maps notes to note

           <Notes 
            id={note.id}
            text={note.text} 
            date={note.date}
            deleteNoteHandler={deleteNoteHandler}/>
           ))} 
            <AddNote addNewNoteHandler= {addNewNoteHandler}/>
        </div>
    );
};
export default NoteList;