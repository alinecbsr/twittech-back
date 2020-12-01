const mongoose = require('mongoose');

 mongoose.connect(process.env.TWB_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

mongoose.connection.once('open', function() {
  console.log('mongoose connected')
});