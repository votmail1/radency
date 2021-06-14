import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {noteArchivedVisibility} from "./app/actions/noteActions";
import archive from './img/archive-light.svg';
import basket from './img/basket-light.svg';
import NewNote from "./Components/NewNote";
import NotesTableRow from "./Components/NotesTableRow";

const App = () => {
    const store = useSelector(state => state.notes)
    const dispatch = useDispatch()
    const [newNote, SetNewNote]=useState(false)
    const showHideArchived = () => {
        const temp = {...store}
        temp.archivedVisibility = !store.archivedVisibility
        dispatch(noteArchivedVisibility(temp))
    }
    const hideModal = (boolean, e) => {
        SetNewNote(boolean)
    }
    return (
        <div className="App">
            <div className="container">
                <div className="row listHeader">
                    <div className="notesIcon"/>
                    <div className="notesName">Name</div>
                    <div className="notesCreated">Created</div>
                    <div className="notesCategory">Category</div>
                    <div className="notesContent">Content</div>
                    <div className="notesDates">Dates</div>
                    <div className="notesEdit"/>
                    <div className="notesArchive"><img className="icon" src={archive} alt='archive'/></div>
                    <div className="notesDelete"><img className="icon" src={basket} alt='delete'/></div>
                </div>
                <NotesTableRow data={store.notes}/>
            </div>
            <div className="container createButton">
                <button onClick={()=>SetNewNote(!newNote)}>Create note</button>
                <label>Show / Hide Archived</label>
                <input type="checkbox" className="archivedVisibility" onChange={()=>showHideArchived()}/>
            </div>
            <div className="container ">
                <div className="row listHeader">
                    <div className="notesIcon"/>
                    <div className="summaryNotesCategory">Note Category</div>
                    <div className="summaryActive">Active</div>
                    <div className="summaryArchived">Archived</div>
                </div>
                <NotesTableRow data={store.categories}/>
            </div>
            <div className={"modal " + (!newNote ? "hidden" : '')} onMouseDown={(e)=>hideModal(false)}>
                <NewNote visible ={()=>hideModal()}/>
            </div>
        </div>
    );
}

export default App;
