const mongoose = require('mongoose');
const {skills} = require('./data.json');

 mongoose.connect(process.env.TWB_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

//Insert Default Data methods
const SkillController = require('../controllers/skill');

//Add Default Skill


mongoose.connection.once('open', function() {
  console.log('mongoose connected');

  console.log('Populating Skills:');
  SkillController.createMany(skills);
  console.log('Populating Skills DONE');
});