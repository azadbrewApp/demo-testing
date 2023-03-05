const express = require('express');
const app = express();
const port = 4002;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const { exec } = require('child_process');
const cron = require('node-cron');
require("./mongoConfig/mongoConfig");
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json('Server is running Azad');
})

const DB_NAME = 'demoDB';
const BACKUP_DIR = '/root/';

cron.schedule('0 1 * * *', () => {
    // Build the backup command
    const cmd = `mongodump --db ${DB_NAME} --out ${BACKUP_DIR}`;
  
    // Execute the backup command
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`Backup failed: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Backup error: ${stderr}`);
        return;
      }
      console.log(`Backup success: ${stdout}`);
    });
  }, {
    scheduled: true,
    timezone: 'Asia/Kolkata'
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
