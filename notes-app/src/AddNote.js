import { useState } from "react";
const AddNote= ({addNewNoteHandler})=> {
    const[noteText, setNoteText]= useState('');
    const charLimit= 150

    const changeHandler = (event)=>{
        if(charLimit- event.target.value.length >=0){
            // to stop user 
        setNoteText(event.target.value)}
    };
    
    const clickSaveHandler=()=>{
        if(noteText.trim().length > 0){
            addNewNoteHandler(noteText);
            setNoteText('')
        }
        
    }
    return (
        <div className="notes new">
            <textarea 
            row="8"  cols="10"  placeholder="Type here to add new note.. "
            value={noteText}
            onChange  ={changeHandler} >
                
            </textarea>
            <div className="note-footer">
                <small> {charLimit- noteText.length} Characters left..</small>
                <button className="save" onClick={clickSaveHandler}>Save</button>
            </div>
        </div>
    );
}; export default AddNote