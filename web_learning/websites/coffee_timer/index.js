$(".btn").click(function() {
    var coffeeTimeValue = $("#coffeeTime").val(); // Get value of time input
    var actualTimeValue = $("#actualTime").val();
    var desiredTimeValue = $("#desiredTime").val(); // Corrected selector
    var timeComponents = coffeeTimeValue.split(":");
    var coffeeHour = parseInt(timeComponents[0]);
    var coffeeMinute = parseInt(timeComponents[1]);
    timeComponents = actualTimeValue.split(":"); // Corrected variable assignment
    var actualHour = parseInt(timeComponents[0]);
    var actualMinute = parseInt(timeComponents[1]);
    timeComponents = desiredTimeValue.split(":"); // Corrected variable assignment
    var desiredHour = parseInt(timeComponents[0]);
    var desiredMinute = parseInt(timeComponents[1]);
    
    var coffeeTotalMinutes = coffeeHour * 60 + coffeeMinute;
    var actualTotalMinutes = actualHour * 60 + actualMinute;
    var desiredTotalMinutes = desiredHour * 60 + desiredMinute;

    if (desiredTotalMinutes < actualTotalMinutes) {
        desiredTotalMinutes += 24 * 60; //add 24 hours
    }

    var differenceInMinutes = desiredTotalMinutes - actualTotalMinutes;
    var newTotalMinutes = coffeeTotalMinutes + differenceInMinutes;

    var setTime = convertToStandard(newTotalMinutes);
    
    $("h1").html("Set your machine to " + setTime);

});

function convertToStandard(totalMinutes) {
    var hours = Math.floor(totalMinutes / 60);
    var minutes = totalMinutes % 60;
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + ampm;
}
