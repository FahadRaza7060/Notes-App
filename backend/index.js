const connectToMongo = require("./db");
const express = require("express");
var cors = require('cors');


connectToMongo();
const app = express();
const port = 8000;

app.use(cors());

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});


