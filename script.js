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

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// var InputEl = $('hour-8');

//TODO Click the save button to save workText to local storage
//Select all elements with saveBtn class and create click event listener
//Click listener example found in classwork 05-04
//! See #1 in Credits for the reference I used to traverse using siblings.

$('.saveBtn').on('click', function () {
  console.log(this);
  let description = $(this).siblings(".description").val();
  console.log(description);
  //Now that I have the description - I need to save it to local storage and have it stay even after a page is refreshed.
});





$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
