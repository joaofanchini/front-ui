const hour = document.getElementById('hr');
const minute = document.getElementById('mn');
const second = document.getElementById('s');

setInterval(() => {
  var date = new Date();
  var dateHours = date.getHours();
  var dateMinute = date.getMinutes();
  var dateSeconds = date.getSeconds();

  hour.style.transform = `rotateZ(${dateHours * 15}deg)`;
  minute.style.transform = `rotateZ(${dateMinute * 6}deg)`;
  second.style.transform = `rotateZ(${dateSeconds * 6}deg)`;

  console.log(dateSeconds);
});
