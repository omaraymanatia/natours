const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

//const tourRouter = require('./Routes/tourRoutes');
//const userRouter = require('./Routes/userRoutes');
//const globalErrorHandler = require('./controllers/errorController');
const app = express();

app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(`${__dirname}/public`));

// Routes
//app.use('/api/v1/tours', tourRouter);
//app.use('/api/v1/users', userRouter);

module.exports = app;
