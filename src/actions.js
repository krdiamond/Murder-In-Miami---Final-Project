export function goToRoom(roomNumber) {
  return {
    type: "GO_TO_ROOM",
    payload: roomNumber
  }
}

export function toggleIsPurseOpened(isPurseOpened) {
  return {
    type: "TOGGLE_PURSE_OPEN",
    payload: isPurseOpened
  }
}

export function toggleShowPhone(phoneIsShowing) {
  return {
    type: "TOGGLE_SHOW_PHONE",
    payload: phoneIsShowing
  }
}
