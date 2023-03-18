let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

const startClock = () => {
  let d = new Date();
  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  hour.style.transform = `rotate(${hr * 30 + min / 2}deg)`;
  minute.style.transform = `rotate(${min * 6}deg)`;
  second.style.transform = `rotate(${sec * 6}deg)`;
};

setInterval(startClock, 1000);
