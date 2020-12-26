export const getChatRoomList = () => {
  return fetch('/api/chat/rooms');
}