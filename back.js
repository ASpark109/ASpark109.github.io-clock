//#1affe5

//Getting access to DOM elements
let clock = document.querySelector("#clock");
let dateClock = document.querySelector("#date");
let color = document.querySelector("#hexCol");
let bodyColor = document.querySelector("body");

let monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let daysArr = ["Sunday",  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateTime()
{
    //Getting time

    let time = new Date();

    let hours = time.getUTCHours().toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds();

    let day = time.getDay();
    let date = time.getDate();
    let months = time.getMonth();

    //Checking the number for the number of digits
    //if one digit, add 0 to the beginning

    if(date.toString.length != 2)
    {
        //date = "0" + date;
    }
  
    if(hours.length != 2)
    {
        hours = "0" + hours;
    }

    if(minutes.length != 2)
    {
        minutes = "0" + minutes;
    }

    if(seconds.toString().length != 2)
    {
        seconds = "0" + seconds;
    }

    //Data update
    clock.textContent = hours + ":" + minutes;
    color.textContent = "#" + hours + minutes + seconds;
    bodyColor.style.background = "#" + hours + minutes + seconds;
    dateClock.textContent = monthsArr[months] + " | " + date + " | " + daysArr[day];
}

updateTime();
setInterval(updateTime, 1000);
