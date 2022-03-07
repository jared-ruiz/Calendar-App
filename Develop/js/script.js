//get current time function 
var getCurrentTime = function() {
    
    //current day moment.js object
    dateLocal =  moment().toString("MMMM Do YYYY");

    //assign current day to currentDay slot
    currentDate = function(dateLocal) {
        $("#currentDay").text(dateLocal);
    }
    currentDate(dateLocal);
}

//get current date on reload
getCurrentTime();