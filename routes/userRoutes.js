const express = require('express');
const route = express.Router();
const {
    uploadDemoFile,
    upload
} = require("../controller/userController");

route.post('/upload', upload.single("file"), uploadDemoFile)
module.exports = route;