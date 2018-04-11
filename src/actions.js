export function startTimer(counter) {
  return {
    type: "TIMER",
    payload: counter + 1
  }
}


export function goToRoom(roomNumber) {
  return {
    type: "GO_TO_ROOM",
    payload: roomNumber
  }
}

export function toggleIsPurseOpened(result) {
  return {
    type: "TOGGLE_PURSE_OPEN",
    payload: result
  }
}

export function toggleShowPhone(result) {
  return {
    type: "TOGGLE_SHOW_PHONE",
    payload: result
  }
}

export function crumpledNoteFound() {
  return {
    type: "FIND_CRUMPLED_NOTE",
    payload: true
  }
}

export function showJessicasNote(result) {
  return {
    type: "SHOW_JESSICAS_NOTE",
    payload: result
  }
}

export function storeNoteInPurse() {
  return {
    type: "PUT_NOTE_IN_PURSE",
    payload: false
  }
}

export function loadPurseLocation(zone) {
  return {
    type: "LOAD_PURSE_LOCATION",
    payload: zone
  }
}

export function loadTVLocation(zone) {
  return {
    type: "LOAD_TV_LOCATION",
    payload: zone
  }
}

export function addItemToPurse(item) {
  return {
    type: "ADD_ITEM_TO_PURSE",
    payload: item
  }
}

export function hideBeachClubTape() {
  return {
    type: "SHOW_TAPE",
    payload: false
  }
}

export function parrotTalkedTo(parrot) {
  return {
    type: "TALK_TO_PARROTS",
    payload: parrot
  }
}

export function showBeachAddress(result) {
  return {
    type: "SHOW_BEACH_ADDRESS",
    payload: result
  }
}

export function foundFridgeNote() {
  return {
    type: "FOUND_FRIDGE_NOTE",
    payload: true,
  }
}

export function hideKeys() {
  return {
    type: "SHOW_KEYS",
    payload: false,
  }
}

export function receivedClueFromSnake() {
  return {
    type: "GET_CLUE_FROM_SNAKE",
    payload: true,
  }
}

export function crumpledNoteRoom4Found() {
  return {
    type: "FIND_ROOM4_CRUMPLED_NOTE",
    payload: true,
  }
}

export function showAllisonsPhoneNumber(result) {
  return {
    type: "TOGGLE_ALLISONS_PHONE_NUMBER",
    payload: result,
  }
}

export function addToPeopleYouHaveTalkedTo(result) {
  return {
    type: "TALKED_TO",
    payload: result,
  }
}

export function removeItemFromPurse(result) {
  return {
    type: "REMOVE_ITEM_FROM_PURSE",
    payload: result
  }
}

export function playTape(result) {
  return {
    type: "PLAY_TAPE",
    payload: result
  }
}

export function foundSuspiciousItem(item) {
  return {
    type: "SUSPICIOUS_ITEMS",
    payload: item
  }
}
