require("fix-esm").register();
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } =require('google-auth-library');

const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)