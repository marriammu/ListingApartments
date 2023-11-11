const path = require('path');
const cors = require('cors')
const express = require('express');
const router = require('./routes')

const app = express();

app.use(cors())
app.use(express.json())

app.use('/apartment',router)



const port = process.env.PORT || 3000;
const listener = app.listen(port, () => {
    console.log(`App running on port ${listener.address().port}...`);
  });