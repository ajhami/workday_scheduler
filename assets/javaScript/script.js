/*
    script.js
*/


// PSEUDOCODE
//
//
// MOMENT.JS HEADER DISPLAY

var hourlyMemos = JSON.parse(localStorage.getItem("hourlyMemos")) || [];
var hourIDs = ["#hour9am", "#hour10am", "#hour11am", "#hour12am", "#hour1pm", "#hour2pm", "#hour3pm", "#hour4pm", "#hour5pm"];

$(document).ready(function() {
    
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
    $("#currentTime").text(moment().format('hh:mm:ssa'));
    
    // Time interval to set up the display time and update to the second
    setInterval(function() {
        $("#currentTime").text(moment().format('hh:mm:ssa'));
        
        // Update the date when the time passes midnight
        if(moment().format('hh:mm:ssa') === "12:00:01am") {
            $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
        }
    }, 1000);
    
    // Create colorHours function that uses the current time and colors the input boxes accordingly
    // HINT: find a way to create integer out of time
    // Also add attributes of classes from style.css accordlingly

    // add future class to each time block
    // once time value is greater than a certain time, remove future class and add past and present accoringly




    /* TESTING ARRAY PROPERTIES
    console.log(hourlyMemos[0]);

    if(hourlyMemos[0] === undefined) {
        console.log("[0] = empty");
    }
    else {
        console.log("[0] = " + hourlyMemos[0])
    }

    console.log(hourlyMemos[1]);

    if(hourlyMemos[1] === undefined) {
        console.log("[1] = empty");
    }
    else {
        console.log("[1] = " + hourlyMemos[1])
    }

    hourlyMemos[3] = "Brush teeth";
    console.log(hourlyMemos[2]);

    if(hourlyMemos[2] === undefined) {
        console.log("[2] = empty");
    }
    else {
        console.log("[2] = " + hourlyMemos[2])
    }

    console.log(hourlyMemos[3]);

    if(hourlyMemos[3] === undefined) {
        console.log("[3] = empty");
    }
    else {
        console.log("[3] = " + hourlyMemos[3])
    }

    hourlyMemos[2] = "something else";
    $(hourlyMemos[3]).empty();

    console.log(hourlyMemos[2]);

    if(hourlyMemos[2] === undefined) {
        console.log("[2] = empty");
    }
    else {
        console.log("[2] = " + hourlyMemos[2])
    }

    console.log(hourlyMemos[3]);

    if(hourlyMemos[3] === undefined) {
        console.log("[3] = empty");
    }
    else {
        console.log("[3] = " + hourlyMemos[3])
    }
    */






    // NOTE:
    // hourlyMemos is for setting to localStorage
    // hourlyMemosStored is for retrieving from local storage




    // Create postMemos function
    var postMemos = function(hourBlockID, index) {
        
        var hourlyMemosStored = JSON.parse(localStorage.getItem("hourlyMemos")) || [];
        
        if(hourlyMemosStored[index] === null || hourlyMemosStored[index] === "") {
            //console.log("No Memo at this location.");
            return;
        }
        else {
            //console.log("There is a memo at this location");
            $(hourBlockID).attr("value", hourlyMemosStored[index]);
        }
    }

    // postMemos TESTS
    //hourlyMemos[1] = "It's 10am!";
    //hourlyMemos[2] = "11am is now yet on your schedule!";
    //localStorage.setItem("hourlyMemos", JSON.stringify(hourlyMemos));
    //var lookAtLS = JSON.parse(localStorage.getItem("hourlyMemos")) || [];
    //console.log("What's currently in localStorage:");
    //console.log(lookAtLS);
    //postMemos("#hour9am", 0);
    //postMemos("#hour10am", 1);
    //postMemos("#hour9am", 2);



    // Create renderMemos function
    //var hourIDs = ["#hour9am", "#hour10am", "#hour11am"];
    var renderMemos = function() {
    // var hourlyMemosStored = JSON.parse(localStorage.getItem("hourlyMemos")) || []; <= PROBABLY DON't NEED HERE WITH LINE NOW IN POSTMEMOS FUNCTION
    // then use postMemos function on each hour block
    // postMemos("#hour9am", 0);
    // postMemos("#hour10am", 1);
    // etc... (Bonus - find a way to loop through with for loop; ex: postMemos(hourBlocks[i], i))
        for(var i = 0; i < hourIDs.length; i++) {
            postMemos(hourIDs[i], i);
        }
    }
    //
    //
    //
    renderMemos();

    
    
    
    // BONUS: Create a Key
    // Three Columns colored with description
    // CHECK

    //console.log("9am = " + $("#hour9am").val());
    //console.log("10am = " + $("#hour10am").val());
    //console.log("11am = " + $("#hour11am").val());

    

    // Entered text is saved to localStorage (Name it the saveMemo function and prevent default)
    // submit event listener function passes through 2 arguments:
    var saveMemo = function(hourBlockID, index) {
        // arg1: id of the form
        //      ex: "#hour9am"
        // arg2: index for the localStorage container
        // hourMemo should only pass through one value, not two
        // const hourMemo = $(arg1).val();
        // hourlyMemos[arg2] = hourMemo;
        hourlyMemos[index] = $(hourBlockID).val();
        //console.log($(hourBlockID).val());
        // then set those hourly memos to localStorage
        localStorage.setItem("hourlyMemos", JSON.stringify(hourlyMemos));
        renderMemos();
    }

    $("#hour9amSave").on("click", function(event) {
        event.preventDefault();
        saveMemo("#hour9am", 0);
    });

    $("#hour10amSave").on("click", function(event) {
        event.preventDefault();
        saveMemo("#hour10am", 1);
    });

    $("#hour11amSave").on("click", function(event) {
        event.preventDefault();
        saveMemo("#hour11am", 2);
    });

    $("#hour12pmSave").on("click", function(event) {
        event.preventDefault();
        saveMemo("#hour12pm", 3);
    });

    $("#hour1pmSave").on("click", function(event) {
        event.preventDefault();
        saveMemo("#hour1pm", 4);
    });

    $("#hour2pmSave").on("click", function(event) {
        event.preventDefault();
        saveMemo("#hour2pm", 5);
    });

    $("#hour3pmSave").on("click", function(event) {
        event.preventDefault();
        saveMemo("#hour3pm", 6);
    });

    $("#hour4pmSave").on("click", function(event) {
        event.preventDefault();
        saveMemo("#hour4pm", 7);
    });

    $("#hour5pmSave").on("click", function(event) {
        event.preventDefault();
        saveMemo("#hour5pm", 8);
    });

    $(".clear_btn").on("click", function(){
        var wantToClear = confirm('Your entire schedule will be cleared out.\nPress "OK" to continue.');
        if(!wantToClear) {
            return;
        }
        else {
            localStorage.clear();
            renderMemos();
            for(var i = 0; i < hourIDs.length; i++){
                $(hourIDs[i]).attr("value", "");
            }
            //location.reload();
        }
    });


});

// BONUS: Create a clear button!
// for each hour as well as a clear all at the bottom for you to clear all (add alert)
