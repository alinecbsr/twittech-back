const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: [true, 'O Nome do usuário é requerido'] },
  user: { type: String, required: [true, 'O Usuário é requerido'], unique: true },
  password: { type: String, required: [true, 'A Senha é requerida'] },
  picture: { type: String},
  role: { type: String },
  description: { type: String },
  skills: { type: [] },
  favorites: { type: [] },
  likes: { type: [] },
  github:{type:String},
  linkedin:{type:String},
  whatsapp:{type:String},
});

module.exports = mongoose.model('User', UserSchema);