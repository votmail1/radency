const notesRow = (data, visibility) => {
    const notesList = document.querySelector('.notesList')
    const notesRow = document.createElement('div')
    const source = 'img/'+data.category+'.svg'
    const html = `<div class="notesIcon "><img class="icon" src=${source}></div>
        <div class="notesName">${data.name}</div>
        <div class="notesCreated">${data.created}</div>
        <div class="notesCategory">${data.category}</div>
        <div class="notesContent">${data.content}</div>
        <div class="notesDates">${data.dates}</div>
        <div class="notesEdit"><img class="icon" src="img/pen.svg"></div>
        <div class="notesArchive"><img class="icon" src="img/archive.svg"></div>
        <div class="notesDelete"><img class="icon" src="img/basket.svg"></div>`
    // if (row) return html
    notesRow.innerHTML = html
    !data.isArchived
        ? notesRow.classList.add('row', 'note')
        : notesRow.classList.add('row', 'note', 'archived')
    if (!visibility && data.isArchived) notesRow.classList.add('hidden')
    notesList.appendChild(notesRow)
}
