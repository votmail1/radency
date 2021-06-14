const categoryStatusCounter = () => {
    let categories = new Set()
    let temp = {}
    temp.active = {}
    temp.archived = {}
    notes.forEach((note) => categories.add(note.category))
    categories.forEach(a => temp.active[a] = 0)
    categories.forEach(a => temp.archived[a] = 0)
    notes.forEach((note) => !note.isArchived ? temp.active[note.category]++ : temp.archived[note.category]++)
    status = {...temp}
}

const addHandler = (doc, action, selector) => {
    const tag = doc.querySelectorAll(selector)
    tag.forEach((element, i) => {
        element.addEventListener("click", (e) => action(i, e)
        )
    })
}
const deleteNote = (index) => {
    const temp = notes.filter((note, i) => i !== index - 1)
    notes = [...temp]
    render()
}
const archivingNote = (index) => {
    notes[index-1].isArchived = !notes[index-1].isArchived
    categoryStatusCounter()
    console.log(index)
    render()
    //deleteNote(index)
}

const editingNote = (index) => {
    console.log(index)
    const note = document.querySelectorAll('.note')[index]
    note.innerHTML = editableNote(notes[index])
    document.body.addEventListener("click", render)
    note.addEventListener("click", (e) => e.stopPropagation(), false)
    document.querySelectorAll('.notesEdit').forEach(el => el.onclick = () => {
    })
    note.querySelector('.notesEdit')
        .addEventListener("click", () => editingNoteConfirm(note, index), true)
}
const editingNoteConfirm = (note, index) => {
    const name = note.querySelector('.notesName input').value
    const category = note.querySelector('.notesCategory select').value
    const content = note.querySelector('.notesContent input').value
    notes[index] = {...notes[index], name, category, content}
    render()
}
const newNote = (e) => {
    e.preventDefault()
    const date = new Date()
    const name = document.querySelectorAll('.box input')[0].value
    const content = document.querySelectorAll('.box input')[1].value
    const category = document.querySelector('.box select').value
    const modal = document.querySelector('.modal')
    const warning = document.querySelector('.warning')
    getDate(content)
    if (name && content) {
        notes = [...notes, {
            name: name,
            created:
                date.toLocaleString('default', {month: 'long'})
                + ' ' + date.getDate() + ', '
                + date.getFullYear(),
            category: category,
            content: content,
            dates: getDate(content)
        }]
        modal.classList.add('hidden')
        render()
    } else {
        try {
            if (!name) throw new SyntaxError('Please, Fill Note Name')
            if (!content) throw new SyntaxError('Please, Fill Content')
        } catch (ex) {
            warning.innerText = String(ex.message)
            warning.classList.remove('hidden')
            setTimeout(()=>warning.classList.add('hidden'), 3000)
        }
    }
}
const getDate = (d) => {
    let resArr = d.match(/\d{1,2}(\D)\d{1,2}\1\d{4}/g)
    let resStr = resArr?.toString()
    return resStr ? resStr : ''
}
