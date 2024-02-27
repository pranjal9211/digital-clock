setInterval(updateTime, 0);
setInterval(updateDate, 0);

function updateTime() {
  let d = new Date();
  let hours = addLeadingZero(d.getHours());
  let minutes = addLeadingZero(d.getMinutes());
  let seconds = addLeadingZero(d.getSeconds());
  // let milsec = d.getMilliseconds();
  document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}`;
  // document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
}

function addLeadingZero(number) {
  return (number < 10 ? '0' : '') + number;
}

function updateDate() {
  let d = new Date();
  let date = d.getDate();
  // let months = d.getMonth();
  let month = d.toLocaleString('default', { month: 'long' });
  let year = d.getFullYear();
  document.getElementById("date").innerHTML = date + ":" + month + ":" + year;
}

// script.js

document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector('.box');
  
    box.addEventListener('mouseenter', function () {
      document.body.style.backgroundColor = 'red';
    });
  
    box.addEventListener('mouseleave', function () {
      document.body.style.backgroundColor = 'black';
    });
  });
  