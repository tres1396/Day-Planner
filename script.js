// Using moment.js to get current date and time 
var displayCurrentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(displayCurrentDate);

// Change timeblocks based on time of day
var currentTime = moment();

// 9a block
var changeBlock9a = function(){
    if currentTime > moment("08:59:59").format("hh:mm:ss") && <= moment("9:59:59").format("hh:mm:ss");
    $("#timeRow9").addClass("present");
} else if {
    currentTime <= moment("08:59:59").format("hh:mm:ss"); 
    $("#timeRow9").addClass("past");
} else {
    $("#timeRow9").addClass("future");
}
return;



// document.getElementsByClassName("col-9").classname = "present"