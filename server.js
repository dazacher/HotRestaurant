const express = require("express");
const app = express();
const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");

// for heroku
const PORT = process.env.PORT || 3000;

// read the array and strings from html forms
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//routes
htmlRoutes(app);
apiRoutes(app);


app.listen(PORT, () => {
    console.log(`Serverer listening on PORT: ${PORT}`);

});