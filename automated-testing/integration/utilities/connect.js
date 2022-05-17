const mongoose = require('mongoose');
const keys = require('../config/keys');

module.exports = async function connect() {
  try {
    // const url = 'mongodb://127.0.0.1:27017/wilderdb'
    const url = await mongoose.connect(
      process.env.NODE_ENV === 'test' ? keys.MONGO_URI_TEST : keys.MONGO_URI
    );
    console.log('Connected sucessfully to MongoDB');
  } catch (err) {
    console.error(err.message);
  }
};
