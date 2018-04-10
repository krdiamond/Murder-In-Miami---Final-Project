const defaultState = {
  currentRoom: 8,
  isPurseOpened: false,
  showPhone: false,
  findCrumpledNote: false,
  findJessicasNote: false,
  findFridgeNote: false,
  showNoteBeachAddress: false,
  purseDropZone: {},
  itemsInPurse: [ {title: "tape", x: 0, y: 10, img: "/static/media/tape.9736635e.png"}],
  showTape: true,
  talkedtoParrots: [],
  showKeys: true,
  gotClueFromSnake: false,
  findRoom4CrumpledNote: false,
  showingAllisonsPhoneNumber: false,
  TVDropZone: {}
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
    case "LOAD_TV_LOCATION":
        return {...state, TVDropZone: action.payload}
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
    case "SHOW_KEYS":
        return {...state, showKeys: action.payload}
    case "GET_CLUE_FROM_SNAKE":
        return {...state, gotClueFromSnake: action.payload}
    case "FIND_ROOM4_CRUMPLED_NOTE":
        return {...state, findRoom4CrumpledNote: action.payload}
    case "TOGGLE_ALLISONS_PHONE_NUMBER":
        return {...state, showingAllisonsPhoneNumber : action.payload}
    default:
      return state
    }
  }

export default reducer
