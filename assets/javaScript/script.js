/////////////////
/// script.js ///
/////////////////


var hourlyMemos = JSON.parse(localStorage.getItem("hourlyMemos")) || [];
var hourIDs = ["#hour9am", "#hour10am", "#hour11am", "#hour12pm", "#hour1pm", "#hour2pm", "#hour3pm", "#hour4pm", "#hour5pm"];

$(document).ready(function() {
    
    // Current date displayed
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
    // Current time displayed
    $("#currentTime").text(moment().format('hh:mm:ssa'));
    
    // Time interval to update display time to the second
    setInterval(function() {
        $("#currentTime").text(moment().format('hh:mm:ssa'));
        
        // Page will be reloaded at the turn of each hour to update currentHour and date if necessary
        if(moment().format('mm:ss') === "00:03") {
            location.reload();
        }
    }, 1000);

    var currentHour = moment().hours();

    // Use the current time and colors the input boxes accordingly
    var setCurrentHour = function(currentHour) {
        
        // 9AM
        if(currentHour > 8) {
            $("#hour9am").removeClass("future");
            $("#hour9am").addClass("present");
        }
        // 10AM
        if(currentHour > 9) {
            $("#hour9am").removeClass("present");
            $("#hour9am").addClass("past");
            $("#hour10am").removeClass("future");
            $("#hour10am").addClass("present");
        }
        // 11AM
        if(currentHour > 10) {
            $("#hour10am").removeClass("present");
            $("#hour10am").addClass("past");
            $("#hour11am").removeClass("future");
            $("#hour11am").addClass("present");
        }
        // 12pm
        if(currentHour > 11) {
            $("#hour11am").removeClass("present");
            $("#hour11am").addClass("past");
            $("#hour12pm").removeClass("future");
            $("#hour12pm").addClass("present");
        }
        // 1PM
        if(currentHour > 12) {
            $("#hour12pm").removeClass("present");
            $("#hour12pm").addClass("past");
            $("#hour1pm").removeClass("future");
            $("#hour1pm").addClass("present");
        }
        // 2PM
        if(currentHour > 13) {
            $("#hour1pm").removeClass("present");
            $("#hour1pm").addClass("past");
            $("#hour2pm").removeClass("future");
            $("#hour2pm").addClass("present");
        }
        // 3PM
        if(currentHour > 14) {
            $("#hour2pm").removeClass("present");
            $("#hour2pm").addClass("past");
            $("#hour3pm").removeClass("future");
            $("#hour3pm").addClass("present");
        }
        // 4PM
        if(currentHour > 15) {
            $("#hour3pm").removeClass("present");
            $("#hour3pm").addClass("past");
            $("#hour4pm").removeClass("future");
            $("#hour4pm").addClass("present");
        }
        // 5PM
        if(currentHour > 16) {
            $("#hour4pm").removeClass("present");
            $("#hour4pm").addClass("past");
            $("#hour5pm").removeClass("future");
            $("#hour5pm").addClass("present");
        }
        // PASSED 5PM
        if(currentHour > 17) {
            $("#hour5pm").removeClass("present");
            $("#hour5pm").addClass("past");
        }

    }

    setCurrentHour(currentHour);


    // Create postMemos function
    var postMemos = function(hourBlockID, index) {
        
        var hourlyMemosStored = JSON.parse(localStorage.getItem("hourlyMemos")) || [];
        
        if(hourlyMemosStored[index] === null || hourlyMemosStored[index] === "") {
            return;
        }

        else {
            $(hourBlockID).attr("value", hourlyMemosStored[index]);
        }
    }

    var renderMemos = function() {
        for(var i = 0; i < hourIDs.length; i++) {
            postMemos(hourIDs[i], i);
        }
    }

    renderMemos();


    // Entered text is saved to localStorage
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


    // Event listeners for storing memos for each hour block

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

    // Clear All event listener
    $(".clear_btn").on("click", function(){
        
        // Verify if the user wants to clear out schedule
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

            hourlyMemos = JSON.parse(localStorage.getItem("hourlyMemos")) || [];
        }
    });

});
