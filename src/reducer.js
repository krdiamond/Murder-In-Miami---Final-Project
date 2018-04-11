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
  talkedtoParrots: [],
  showKeys: true,
  gotClueFromSnake: false,
  findRoom4CrumpledNote: false,
  showingAllisonsPhoneNumber: false,
  TVDropZone: {},
  peopleTalkedTO: [],
  timer: 1,
  displayDadsMessage: false,
  playingTape: false,
  suspiciousItemsInspected: [],
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
    case "TALKED_TO":
        return {...state, peopleTalkedTO: [...state.peopleTalkedTO, action.payload]}
    case "TIMER":
      return {...state, timer: action.payload}
    case "REMOVE_ITEM_FROM_PURSE":
      return {...state, itemsInPurse: action.payload}
    case "PLAY_TAPE":
      return {...state, playingTape: action.payload}
    case "SUSPICIOUS_ITEMS":
      return {...state, suspiciousItemsInspected: [...state.suspiciousItemsInspected, action.payload]}
    default:
      return state
    }
  }




export default reducer

// ALL ITEMS OBJECTS INCASE THEY ARE NEEDED FOR TESTING
// {id: 1, title: "note", x: 0, y: 10, img: "/static/media/note.4a5fa407.png"},
// {id: 2, title: "Phone Number", x: 0, y: 10,  img: "/static/media/note.4a5fa407.png"},
// {id: 0, title: "tape", x: 0, y: 10, img: "/static/media/tape.9736635e.png"},
// {id: 3, title: "keys", x: 0, y: 10, img: "/static/media/keys.e1c9c6c0.png"},
// {id: 4, title: "Beach Club Address", x: 0, y: 10, img: "/static/media/fridge_note.bf29f077.png"}
