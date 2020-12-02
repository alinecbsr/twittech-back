const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
const {SkillSchema} = require('./skill')

const UserSchema = new Schema({
  name: { type: String, required: [true, 'O Nome do usuário é requerido'] },
  user: { type: String, required: [true, 'O Usuário é requerido'], unique: true },
  password: { type: String, required: [true, 'A Senha é requerida'] },
  picture: { type: String},
  role: { type: String },
  description: { type: String },
  skills: { type: [SkillSchema] },
  favorites: { type: [] },
  likes: { type: [] },
  github:{type:String},
  linkedin:{type:String},
  whatsapp:{type:String},
});

UserSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.pre('save', async function(next) {
  this.name = this.name.toUpperCase();
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

UserSchema.path('name').validate(value => {
  const regex = /[a-zA-Z]+[a-zA-Z ]{4,50}/g;
  return regex.test(value);
}, 'Nome não é válido');

UserSchema.path('user').validate(value => {
  const regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return regex.test(value);
}, 'O usuário deve conter um email válido.');

module.exports = mongoose.model('User', UserSchema);