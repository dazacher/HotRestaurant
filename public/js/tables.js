$(document).ready(function () {
    // In this code, jQuery is used to "download" the data from our server
    // We then dynamically display this content in our table. This is very similar to the group projects you just completed.
    // It's also very similar to the NYT search application. In fact, I copied a ton of code from there.

    function runTableQuery() {
        // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
        $.ajax({ url: "/api/tables", method: "GET" })
            .then(function (reservationData) {

                // Here we then log the reservationData to console, where it will show up as an object.
                console.log(reservationData);
                console.log("------------------------------------");

                // Loop through and display each of the customers
                for (var i = 0; i < reservationData.length; i++) {

                    // Get a reference to the tableList element and populate it with tables
                    var tableList = $("#tableList");

                    // Then display the fields in the HTML (Section Name, Date, URL)
                    var listItem = $("<li class='list-group-item mt-4'>");

                    listItem.append(
                        $("<h2>").text("Table #" + (i + 1)),
                        $("<hr>"),
                        $("<h2>").text("ID: " + reservationData[i].id),
                        $("<h2>").text("Name: " + reservationData[i].name),
                        $("<h2>").text("Email: " + reservationData[i].email),
                        $("<h2>").text("Phone: " + reservationData[i].phone)
                    );

                    tableList.append(listItem);
                }
            });
    }

    function runWaitListQuery() {

        // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
        $.ajax({ url: "/api/waitlist", method: "GET" })
            .then(function (waitData) {

                // Here we then log the waitlistData to console, where it will show up as an object.
                console.log(waitData);
                console.log("------------------------------------");

                // Loop through and display each of the customers
                for (var i = 0; i < waitData.length; i++) {

                    // Get a reference to the waitList element and populate it with tables
                    var waitList = $("#waitingList");

                    // Then display the fields in the HTML (Section Name, Date, URL)
                    var listItem = $("<li class='list-group-item mt-4'>");

                    listItem.append(
                        $("<h2>").text("Table #" + (i + 1)),
                        $("<hr>"),
                        $("<h2>").text("ID: " + waitData[i].id),
                        $("<h2>").text("Name: " + waitData[i].name),
                        $("<h2>").text("Email: " + waitData[i].email),
                        $("<h2>").text("Phone: " + waitData[i].phone)
                    );

                    waitList.append(listItem);
                }
            });
    }

    // This function resets all of the data in our tables. This is intended to let you restart a demo.
    function clearTable() {
        alert("Clearing...");

        // Clear the tables on the server and then empty the elements on the client
        $.ajax({ url: "/api/clear", method: "POST" }).then(function () {
            $("#waitList").empty();
            $("#tableList").empty();
        });
    }

    $("#clear").on("click", clearTable);


    // Run Queries!
    // ==========================================
    runTableQuery();
    runWaitListQuery();

});