import {MdDeleteForever} from 'react-icons/md'

const Notes = ({id, text , date, deleteNoteHandler}) =>{
    return(
        <div className="notes">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={()=> deleteNoteHandler(id)} 
                className='delete-icon' size='1.3em' />
            </div>
        </div>
    );
};
export default Notes;