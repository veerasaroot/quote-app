const express = require('express');
const app = express();

const cors = require('cors');

const quote = require('inspirational-quotes');

app.use(cors());

app.get('/', (req, res) => {
    res.send(quote.getQuote());
});

app.listen(8000, () => {
    console.log('Server is running!');
})