
const reservations = require("../data/reservationData");
const waitList = require("../data/waitingListData");
const { uuid } = require('uuidv4');
const path = require("path");

module.exports = function (app) {
    app.get("/api/tables", function (req, res) {
        console.log(`/api/tables called`);
        res.json(reservations);

    });

    app.get("/api/waitlist", function (req, res) {
        console.log(`/api/waitlist called`);
        res.json(waitList);

    });

    app.post("/api/tables", function (req, res) {
        console.log(`POST / api/tables called`);
        const newReservation = req.body;
        console.log(newReservation);
        newReservation.id = uuid();

        if (reservations.length < 5) {
            reservations.push(newReservation);
            res.json(true);
        }
        else {
            waitList.push(newReservation);
            res.json(false);
        }

    });

    app.get("/api/clear", function (req, res) {
        // Empty out the arrays of data
        rservationData = [];
        waitingListData = [];
        console.log(__dirname);
        res.sendFile(path.join(__dirname, "../public/html/tables.html"));

        // res.json({ ok: true });
    });
};