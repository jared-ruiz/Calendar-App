//get current time function 
var getCurrentTime = function() {
    // console.log(moment().hours());
    //current day moment.js object
    dateLocal =  moment().toString("MMMM Do YYYY");

    //assign current day to currentDay slot
    currentDate = function(dateLocal) {
        $("#currentDay").text(dateLocal);
    }
    currentDate(dateLocal);
}

//get child of specific div row id associated with the time // time id is parent div --> children underneath
//sets the text linked with time key to the textarea everytime the page reloads
$("#9am").children("textarea").val(localStorage.getItem("9am"));
$("#10am").children("textarea").val(localStorage.getItem("10am"));
$("#11am").children("textarea").val(localStorage.getItem("11am"));
$("#12pm").children("textarea").val(localStorage.getItem("12pm"));
$("#1pm").children("textarea").val(localStorage.getItem("1pm"));
$("#2pm").children("textarea").val(localStorage.getItem("2pm"));
$("#3pm").children("textarea").val(localStorage.getItem("3pm"));
$("#4pm").children("textarea").val(localStorage.getItem("4pm"));
$("#5pm").children("textarea").val(localStorage.getItem("5pm"));


//save text to local storage upon button click
$(".btn").click(function() {
    var text = $(this).siblings("textarea").val();
    var time = $(this).parent().attr("id");

    //btn logs time id associated with said button
    console.log(time);
    
    //set the time key with text into localstorage
    localStorage.setItem(time, text);
});

//update the color of blocks based on time of day
function updateDisplay() {
    //get textarea of all elements
    var nineAm = $("#9am").children("textarea"); 
    var tenAm = $("#10am").children("textarea"); 
    var elevenAm = $("#11am").children("textarea"); 
    var twelvePm = $("#12pm").children("textarea"); 
    var onePm = $("#1pm").children("textarea"); 
    var twoPm = $("#2pm").children("textarea"); 
    var threePm = $("#3pm").children("textarea"); 
    var fourPm = $("#4pm").children("textarea"); 
    var fivePm = $("#5pm").children("textarea"); 
    
    //get current hour
    var currentHour = moment().hour();

    //remove classes from textarea before if statement
    $(nineAm).removeClass("past future present");
    
    if (currentHour < 9) {
        $(nineAm).addClass("future");
    }
    else if (currentHour === 9) {
        $(nineAm).addClass("present");
    }
    else {
        $(nineAm).addClass("past");
    }
    
    //remove classes from textarea before if statement
    $(tenAm).removeClass("past future present");
    
    if (currentHour < 10) {
        $(tenAm).addClass("future");
    }
    else if (hour === 10) {
        $(tenAm).addClass("present");
    }
    else {
        $(tenAm).addClass("past");
    }
    
    //remove classes from textarea before if statement
    $(elevenAm).removeClass("past future present");
    
    if (currentHour < 11) {
        $(elevenAm).addClass("future");
    }
    else if (hour === 11) {
        $(elevenAm).addClass("present");
    }
    else {
        $(elevenAm).addClass("past");
    }
    
    //remove classes from textarea before if statement
    $(twelvePm).removeClass("past future present");
    
    if (currentHour < 12) {
        $(twelvePm).addClass("future");
    }
    else if (hour === 12) {
        $(twelvePm).addClass("present");
    }
    else {
        $(twelvePm).addClass("past");
    }
    
    //remove classes from textarea before if statement
    $(onePm).removeClass("past future present");
    
    if (currentHour < 13) {
        $(onePm).addClass("future");
    }
    else if (hour === 13) {
        $(onePm).addClass("present");
    }
    else {
        $(onePm).addClass("past");
    }
    
    //remove classes from textarea before if statement
    $(twoPm).removeClass("past future present");
    
    if (currentHour < 14) {
        $(twoPm).addClass("future");
    }
    else if (hour === 14) {
        $(twoPm).addClass("present");
    }
    else {
        $(twoPm).addClass("past");
    }
    
    //remove classes from textarea before if statement
    $(threePm).removeClass("past future present");
    
    if (currentHour < 15) {
        $(threePm).addClass("future");
    }
    else if (hour === 15) {
        $(threePm).addClass("present");
    }
    else {
        $(threePm).addClass("past");
    }
    
    //remove classes from textarea before if statement
    $(fourPm).removeClass("past future present");
    
    if (currentHour < 16) {
        $(fourPm).addClass("future");
    }
    else if (hour === 16) {
        $(fourPm).addClass("present");
    }
    else {
        $(fourPm).addClass("past");
    }
    
    //remove classes from textarea before if statement
    $(fivePm).removeClass("past future present");
    
    if (currentHour < 17) {
        $(fivePm).addClass("future");
    }
    else if (hour === 17) {
        $(fivePm).addClass("present");
    }
    else {
        $(fivePm).addClass("past");
    }
}

//get current date on load
//update time on load
getCurrentTime();
updateDisplay();

//update time every second akin to a standard clock
setInterval(function() {
    getCurrentTime();
}, 1000);