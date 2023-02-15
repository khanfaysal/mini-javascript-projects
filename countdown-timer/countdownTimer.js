const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
console.log(items);

let futureDate = new Date();
// futureDate.toLocaleDateString();
console.log(futureDate);

let weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
let month = futureDate.getMonth();
month = months[month];
const year = futureDate.getFullYear();
let hours = futureDate.getHours()
hours = Math.floor(timestamp / 1000 / 60 / 60);

const minutes = futureDate.getMinutes();
giveaway.textContent = `giveaway end on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}`
console.log(year);