import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {noteEdit} from "../app/actions/noteActions";

const NewNote = (props) => {
    const store = useSelector(state => state.notes)
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState(store.categories[0])
    const [message, setMessage] = useState('')
    const [warning, setWarning] = useState('')
    const dispatch = useDispatch()
    const confirm = (e) => {
        e.preventDefault()
        if (name && content) {
            const date = new Date()
            const note = [...store.notes, {
                name: name,
                created:
                    date.toLocaleString('default', {month: 'long'})
                    + ' ' + date.getDate() + ', '
                    + date.getFullYear(),
                category: category,
                content: content,
                dates: getDateFromString(content),
                isArchived: false,
                editable: false
            }]
            dispatch(noteEdit(note))
            setName('')
            setContent('')
            setCategory('')
            props.visible(false)
        } else {
            try {
                if (!name) throw new SyntaxError('Please, Fill Note Name')
                if (!content) throw new SyntaxError('Please, Fill Content')
            } catch (ex) {
                setWarning(String(ex.message))
                // setTimeout(()=> {
                //     setWarning('')
                // }, 600)
            }
        }
    }
    const cancel = () => {
        setName('')
        setContent('')
        setCategory('')
        props.visible(false)
    }

    const getDateFromString = (d) => {
        let resArr = d.match(/\d{1,2}(\D)\d{1,2}\1\d{4}/g)
        let resStr = resArr?.toString()
        return resStr ? resStr : ''
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            setMessage(warning)
            setTimeout(() => setMessage(''),10000)
        }, 1000)
        setTimeout(()=> {
            clearInterval(interval)
            setWarning('')
        }, 10000)
    },[warning])
    return (
        <div className="boxWrapper" onMouseDown={e => e.stopPropagation()}>
            <div className={"warning " + (!message ? "hidden" : '')}>
                <div className='center'>{message}</div>
            </div>
            <div className='box'>
                <form onSubmit={e => confirm(e)}>
                    <div>New Note</div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <label>Category</label>
                    <select onChange={(e) => {
                        setCategory(e.target.value)
                    }} defaultValue={category}>
                        {store.categories.map(cat => (
                            <option key={cat}>{cat}</option>
                        ))}
                    </select>
                    <label>Content</label>
                    <input type="text" value={content} onChange={(e) => setContent(e.target.value)}></input>
                    <div className="formsButtons">
                        <button type="submit">OK</button>
                        <button type="button" onClick={cancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewNote;
