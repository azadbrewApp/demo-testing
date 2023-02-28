const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
require("./mongoConfig/mongoConfig")

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json('Server is running Azad');
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
