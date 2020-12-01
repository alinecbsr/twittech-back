const User = require('../models/user')

module.exports = {
  async create(req, res) {
    try {
      const userCreated = await User.create(req.body);
      res.send({ userCreated });
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async list(req, res) {
    //Todo - return a user list
    res.json(await User.find())
  }
}