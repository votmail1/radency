const editableNote = (data) => {

    const source = 'img/'+data.category+'.svg'
    return (
        `<div class="notesIcon"><img class="icon" src=${source}></div>
        <div class="notesName">
            <input type="text" value='${data.name}'/>
        </div>
        <div class="notesCreated">${data.created}</div>
        <div class="notesCategory">
        <select>
        ${Object.keys({...status.active, ...status.archived}).map(category => 
            `<option ${category === data.category && 'selected'}>${category}</option>>`
        )}
        </select>
        </div>
        <div class="notesContent">
            <input type="text" value='${data.content}'/>
        </div>
        <div class="notesDates">${data.dates}</div>
        <div class="notesEdit">OK</div>
        <div class="notesArchive"><img class="icon" src="img/archive.svg"></div>
        <div class="notesDelete"><img class="icon" src="img/basket.svg"></div>`
    )
}
