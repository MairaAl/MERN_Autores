const express = require("express");
const app = express();
const cors = require("cors");
// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyAuthorsRoutes = require("./server/routes/author.routes");
AllMyAuthorsRoutes(app);

app.listen(8080, () => console.log("The server is all fired up on port 8080"));
