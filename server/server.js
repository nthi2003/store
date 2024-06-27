const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const initRoutes = require('./routes/index')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
initRoutes(app) 
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB successfully');
  })
  .catch((error) => {
    console.error('Error connecting to DB', error);
  });
  


app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
