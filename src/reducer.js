const defaultState = {
  currentRoom: 3,
  isPurseOpened: false,
  showPhone: false,
  }

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GO_TO_ROOM":
      return {...state, currentRoom: action.payload}
    case "TOGGLE_PURSE_OPEN":
      return {...state, isPurseOpened: action.payload}
    case "TOGGLE_SHOW_PHONE":
        return {...state, showPhone: action.payload}
    default:
      return state
    }
  }

export default reducer
