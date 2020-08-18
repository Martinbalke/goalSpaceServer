const mongoose = require('mongoose');
const express = require( 'express');
const goalrouter = require('../routes/goals-routes')
const  progressRouter = require('../routes/progress-routes');
const  cors  = require( 'cors');

require('dotenv').config();

//Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//Routes
app.get('/', async (req, res, next) => {
  res.send('Live server')
});

app.use('/goals', goalrouter);
app.use('/progress', progressRouter);

const server = {
  server: app,
  start() {
    const PORT = process.env.PORT || 3045;

    app.listen(PORT, () => {
      console.log(`Server Up on ${PORT}`);
    });

    // Start up DB Server
    const PATH = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/app';
    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false 
    };

    mongoose.connect(PATH, options);
  },
};

module.exports = server.start();
