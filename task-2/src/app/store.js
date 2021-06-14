import { createStore, combineReducers} from "redux";
import {notesReducers} from './reducers/notesReducers'

const reducers = combineReducers({
  notes: notesReducers,
})

export const store = createStore(reducers,{})
