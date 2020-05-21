const path = require("path");


module.exports = function(app){
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/reserve.html"))
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/tables.html"))
});
};