// DECLARE OUR VARIABLES
// HTML Elements
const notes9amEl = document.querySelector('#9')
const notes10amEl = document.querySelector('#10')
const notes11amEl = document.querySelector('#11')
const notes12pmEl = document.querySelector('#12')
const notes1pmEl = document.querySelector('#13')
const notes2pmEl = document.querySelector('#14')
const notes3pmEl = document.querySelector('#15')
const notes4pmEl = document.querySelector('#16')
const notes5pmEl = document.querySelector('#17')

// Notes Object
let savedNotes = {
    schedule9am: notes9amEl.value,
    schedule10am: notes10amEl.value,
    schedule11am: notes11amEl.value,
    schedule12pm: notes12pmEl.value,
    schedule1pm: notes1pmEl.value,
    schedule2pm: notes2pmEl.value,
    schedule3pm: notes3pmEl.value,
    schedule4pm: notes4pmEl.value,
    schedule5pm: notes5pmEl.value,
}
// localStorage
const savedSchedule = JSON.parse(localStorage.getItem('savedSchedule')) || [];


// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var currentDay = moment();
$('#currentDay').text(currentDay.format('dddd, MMMM do'));

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
for (let timeIndex = 9; timeIndex <= 17; timeIndex++) {
    const schedule = savedSchedule[timeIndex];
    
}
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist