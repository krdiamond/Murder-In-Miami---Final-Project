export function goToRoom(roomNumber) {
  return {
    type: "GO_TO_ROOM",
    payload: roomNumber
  }
}
