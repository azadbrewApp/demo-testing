const multer = require("multer");
const path = require("path");
// const fs = require("fs");
const uploadDemoFile = (req, res) => {
    const file = req.file;

    console.log('FILE', file);
}

const storage = multer.diskStorage({
    destination: "/var/www/html",
    filename: (req, file, cb) => {
      try {
        return cb(
          null,
          `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
        );
      } catch (err) {
        console.log("ERROR OR ", err);
      }
    },
});

const upload = multer({
    storage,
});

module.exports = {
    upload,
    uploadDemoFile
}