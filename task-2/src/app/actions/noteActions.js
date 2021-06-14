import {
    NOTE_ARCHIVED_VISIBILITY,
    NOTE_EDIT, TO_ARCHIVE_NOTE,
} from "../constants/constants"


export const noteEdit = (editableNote) => ({
    type: NOTE_EDIT,
    payload: editableNote
})
export const noteArchivedVisibility = (visibility) => ({
    type: NOTE_ARCHIVED_VISIBILITY,
    payload: visibility
})
export const toArchiveNote = (visibility) => ({
    type: TO_ARCHIVE_NOTE,
    payload: visibility
})

