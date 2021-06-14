const summaryNotesRow = (category) => {
    const summaryNotesList = document.querySelector('.summaryNotesList')
    const notesRow = document.createElement('div')
    const source = 'img/'+category+'.svg'
    notesRow.innerHTML =
        `<div class="notesIcon"><img class="icon" src=${source}></div>
        <div class="summaryNotesCategory">${category}</div>
        <div class="summaryActive">${status.active[category] ? status.active[category] : ''}</div>
        <div class="summaryArchived">${status.archived[category] ? status.archived[category] : ''}</div>`
    notesRow.classList.add('row', 'note')
    summaryNotesList.appendChild(notesRow)
}
