const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../db/tourSchema');
dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('DB connection successful'))
  .catch((err) => {
    console.log('Error Connecting to the database\n', err);
    process.exit(1);
  });

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded');
  } catch (err) {
    console.log(err);
  }
  process.exit(1);
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit(1);
};

if (process.argv[2] == '--import') importData();
else if (process.argv[2] == '--delete') deleteData();
