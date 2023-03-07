const express = require('express');
const app = express();
const port = 4002;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const userRoute = require("./routes/userRoutes");

app.use(userRoute);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
