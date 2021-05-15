// variable decleration

const dayNumber = new Date().getDate();
const year = new Date().getFullYear();
const month = new Date().toLocaleString('default', { month: 'long' });
const day = new Date().toLocaleString('default', { weekday: 'long' });

// adding date into the html

document.querySelector('.month').innerHTML = month;
document.querySelector('.day').innerHTML = day;
document.querySelector('.numday').innerHTML = dayNumber;
document.querySelector('.year').innerHTML = year;