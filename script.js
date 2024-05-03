const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

socket.on('chat message', function(msg) {
  const item = document.createElement('li');
  item.textContent = msg;
  document.getElementById('chat').appendChild(item);
});
