

$(document).ready(function () {
    // const { uuid } = require('uuidv4');
    $("#submit-btn").on("click", function(event){
        event.preventDefault();
        let newReservation = {
            name: $("#reserve-name").val().trim(),
            phone: $("#reserve-phone").val().trim(),
            email: $("#reserve-email").val().trim(),
            // id: uuid()
        };

        $.post("/api/tables", newReservation, function(data){
            
        // If a table is available... tell user they are booked.
        if (data) {
            alert("Yay! You are officially booked!");
          }
  
          // If a table is available... tell user they on the waiting list.
          else {
            alert("Sorry you are on the wait list");
          }
  
          // Clear the form when submitting
          $("#reserve-name").val("");
          $("#reserve-phone").val("");
          $("#reserve-email").val("");
          $("#reserve-unique-id").val("");
        })
        .then(function(data){
            console.log(data);
            alert("Adding reservation...")
        })
    });
});