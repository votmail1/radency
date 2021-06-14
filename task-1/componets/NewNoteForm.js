const newNoteForm = () => {
    return (
        `<form >
        <div>New Note</div>
        <label>Name</label>
        <input type="text"></input>
        <label>Category</label>
        <select>
        ${categories.map(category => `<option>${category}</option>`)}
        </select>
        <label>Content</label>
        <input type="text"></input>
        <div class="formsButtons">
            <button type="submit">OK</button>
            <button type="button">Cancel</button>
        </div>
    </form> `
    )
}

