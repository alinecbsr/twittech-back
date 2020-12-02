const mongoose = require('mongoose');
const { Schema } = mongoose;

const SkillSchema = new Schema({
  name: { type: String, unique: true, required: [true, 'O Nome da habilidade é requerida'] },
});

SkillSchema.pre('save', async function(next) {
  this.name = this.name.toUpperCase();
  next();
});
 
module.exports = {Skill:mongoose.model('Skill', SkillSchema), SkillSchema}