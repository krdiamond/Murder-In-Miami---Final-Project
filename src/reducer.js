const defaultState = {
  currentRoom: 1
  }

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GO_TO_ROOM":
      return {...state, currentRoom: action.payload}
    default:
      return state
    }
  }

export default reducer
