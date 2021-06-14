const render = () => {
    const notesList = document.querySelector('.notesList')
    const summaryNotesList = document.querySelector('.summaryNotesList')
    const modal = document.querySelector('.modal')
    const box = document.querySelector('.box')
    const archive = document.querySelector('.archivedVisibility')
    categoryStatusCounter()
    notesList.innerHTML = ''
    summaryNotesList.innerHTML = ''
    notes.map(note => notesRow(note, archivedVisibility))
    categories.forEach(category => summaryNotesRow(category))
    addHandler(document, deleteNote, '.notesDelete')
    addHandler(document, archivingNote, '.notesArchive')
    document.querySelectorAll('.notesEdit').forEach((el, i) => {
        el.onclick = () => editingNote(i - 1)
    })
    const openModal = () => {
        document.querySelector('button').onclick = () => {
            modal.classList.remove('hidden')
            modal.onclick = (e) => {
                modal.classList.add('hidden')
            }
            box.onclick = (e) => e.stopPropagation()
            document.querySelector('.box')
                .querySelector('form')
                .addEventListener('submit', (e) => newNote(e))
            document.querySelector('.formsButtons button[type=button]').onclick = (e) => {
                modal.classList.add('hidden')
            }
        }
    }
    box.innerHTML = newNoteForm()
    openModal()
    archive.onclick = () =>{
        archivedVisibility = archive.checked
        render()
    }
}
render()
