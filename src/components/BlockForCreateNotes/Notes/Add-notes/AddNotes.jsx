import './addNotes.css';

function AddNotes( { notes, searchValue, activeNote, setActiveNote, onDeleteNote, setValueTitle, setValueBody, activeCell, convertDate } ){
    
        const filteredNotes = notes.filter((note) =>  note.body.toLowerCase().includes(searchValue.toLowerCase()) 
                                                        || 
                                                      note.title.toLowerCase().includes(searchValue.toLowerCase()));

        return (filteredNotes).map((note, index) => (convertDate( new Date(activeCell) ) === convertDate( new Date(note.sub) ) &&
            <div   
                key={index}    
                className={`added-note ${note.id === activeNote && 'active'}`} 
                onClick={() => {setActiveNote(note.id); setValueTitle(note.title); setValueBody(note.body)}}
            >
                <div className="added-note-title">
                    <strong>{note.title}</strong>
                    <button className="del" onClick={() => onDeleteNote(note.id)}>Удалить</button>
                </div>

                <p className="added-note-preview">{note.body && note.body.substr(0, 30)+'...'}</p>
                <p className="note-meta">
                    Последнее изменение {new Date(note.lastChanged).toLocaleDateString('ru', {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </p>
            </div>
        ))
    }

export default AddNotes;