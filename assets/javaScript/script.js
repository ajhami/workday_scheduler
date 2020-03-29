/*
    script.js
*/


// PSEUDOCODE
//
//
// MOMENT.JS HEADER DISPLAY

$(document).ready(function() {
    
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
    $("#currentTime").text(moment().format('hh:mm:ssa'));
    
    // Time interval to set up the display time and update to the second
    setInterval(function() {
        $("#currentTime").text(moment().format('hh:mm:ssa'));
        
        // Update the date when the time passes midnight
        if(moment().format('hh:mm:ssa') === "12:00:00am"){
            $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
        }
    }, 1000);

    var hourlyMemos = [];


    // Create postMemos function
    // var postMemos = function(arg1 = hourBlockID, arg2 = indexForBlock) {
    // if(hourlyMemos[arg2] === empty) {
    // return;
    // }
    // else {
    // $(arg1).text(hourlyMemos[arg2]);
    // }
    // }
    //
    // Create renderMemos function
    // var renderMemos = function() {
    // hourlyMemos = JSON.parse(localStorage.getItem("hourlyMemos")) || [];   
    // then use postMemos function on each hour block
    // postMemos("#hour9am", 0);
    // postMemos("#hour10am", 1);
    // etc... (Bonus - find a way to loop through with for loop; ex: postMemos(hourBlocks[i], i))
    // }
    //

})



// BONUS: Create a Key
// Three Columns colored with description
//
// Create hour forms
//
// Entered text is saved to localStorage
// submit event listener function passes through 3 arguments:
// arg1: hour label
//      ex: "9am" 
// arg2: id of the form
//      ex: "#hour9am"
// arg3: index for the localStorage container
// const hourMemo = {
//    hour : arg1,
//    memo : $(arg2).val()
// }
// hourlyMemos[arg3] = hourMemo;
// then set those hourly memos to localStorage
// localStorage.setItem("hourlyMemos", JSON.stringify(hourlyMemos));

