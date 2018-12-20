import { createStore } from 'redux'

const initialState = {
  text: '',
  count: 0,
}

export const actionTypes = {
  SET_TEXT: 'SET_TEXT',
  PLUS: 'PLUS',
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TEXT:
      return Object.assign({}, state, {
        text: action.payload,
    })
    case actionTypes.PLUS:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    default:
      return state
  }
}

// ACTIONS
export const SetTextAction = (text) => {
    return { type: actionTypes.SET_TEXT, payload: text }
}

export const PlusAction = () => {
  return{ type: actionTypes.PLUS }
}

export function initializeStore (initialState = initialState) {
  return createStore(
    reducer,
    initialState,
  )
}