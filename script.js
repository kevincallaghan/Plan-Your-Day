//Display the current date and time in the header (find ex.in classwork)
var displayToday = $("#currentDay");
function showTimeDay() {
let currentTime = dayjs().format('dddd, MMMM D, YYYY [at] h:mm:ss A');
displayToday.text(currentTime);
};
// Call the function and update the seconds
showTimeDay();
setInterval(showTimeDay, 1000);
console.log(displayToday);

// Check to see if there are already entries for time-slots in local storage and then getItem to populate my planner when the page is refreshed
//! See #4 in credits for the reference I used to find()

$('.time-block').each(function () {
let timeSlotEntryHour = $(this).attr('id');
let timeSlotEntryText = localStorage.getItem(timeSlotEntryHour);
  if (timeSlotEntryText !== null) {
    $(this).find('.description').val(timeSlotEntryText);
  }
});

//TODO Click the save button to save workText to local storage
//Select all elements with saveBtn class and create click event listener
//Click listener example found in classwork 05-04
//! See #1 in Credits for the reference I used to traverse using siblings and parents.

$('.saveBtn').on('click', function () {
  console.log(this);
  let description = $(this).siblings(".description").val();
  console.log(description);   //check to see if it works
  //Now that I have the description - I need to save it to local storage and have it stay even after a page is refreshed.
  let selectedTime = $(this).parent().attr('id');
  console.log(selectedTime, description);   //check to see if it works
  localStorage.setItem(selectedTime, description);
});

//TODO Need to write code to get the number out of the ID field and use that to compare against the current time
//TODO Need to write code to add the correct class to that time-slot.  
// Use .time-block to select each time-slot
//Use dayjs() to get the hour
//use the time-slot's ID value to determine which class
//! See #2 in credits for how I found to get just the hour from dayJS

$('.time-block').each(function () {
  let currentHour = dayjs().hour();
  console.log("The current hour is " + currentHour);   //check to see if it works
  //split the ID, take the second half and convert to integer
  let timeSlotHour = parseInt($(this).attr('id').split('-')[1]);
  console.log(typeof (timeSlotHour));

  //Check to see if the current hour is greater than, less than, or equal to the time slot and then add the correct class to the row
  if (timeSlotHour === currentHour) {
    $(this).addClass("present");
  } else if (timeSlotHour > currentHour) {
    $(this).addClass("future");
  } else {
    $(this).addClass("past");
  }
});





