const defaultState = {
  currentRoom: 7,
  isPurseOpened: false,
  showPhone: false,
  findCrumpledNote: false,
  findJessicasNote: false,
  findFridgeNote: false,
  showNoteBeachAddress: false,
  purseDropZone: {},
  itemsInPurse: [],
  showTape: true,
  talkedtoParrots: []
  }

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GO_TO_ROOM":
      return {...state, currentRoom: action.payload}
    case "TOGGLE_PURSE_OPEN":
      return {...state, isPurseOpened: action.payload}
    case "TOGGLE_SHOW_PHONE":
        return {...state, showPhone: action.payload}
    case "FIND_CRUMPLED_NOTE":
        return {...state, findCrumpledNote: action.payload}
    case "SHOW_JESSICAS_NOTE":
        return {...state, findJessicasNote: action.payload}
    case "LOAD_PURSE_LOCATION":
        return {...state, purseDropZone: action.payload}
    case "ADD_ITEM_TO_PURSE":
        return {...state, itemsInPurse: [...state.itemsInPurse, action.payload]}
    case "SHOW_TAPE":
        return {...state, showTape: action.payload}
    case "TALK_TO_PARROTS":
        return {...state, talkedtoParrots: [...state.talkedtoParrots, action.payload]}
    case "SHOW_BEACH_ADDRESS":
        return {...state, showNoteBeachAddress: action.payload}
    case "FOUND_FRIDGE_NOTE":
        return {...state, findFridgeNote: action.payload}
    default:
      return state
    }
  }

export default reducer
