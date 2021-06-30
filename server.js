const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

// Heroku static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connection to Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes and View
app.use(express.static("public"));

// Sends requests to REACT APP
// Defines any API routes before this runs
app.get("*", function(req,res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});