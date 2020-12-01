const User = require('../models/user')

module.exports = {
  async create(req, res) {
    try {
      const userCreated = await User.create(req.body);
      res.send(userCreated);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async list(req, res) {
    res.json(await User.find({},'-password'))
  },

  async remove(req, res) {
    try {
      const userDeleted =  await User.deleteOne({_id:req.body._id});
      res.json(userDeleted);
    } catch (error) {
      res.status(400).json(error);
    }
  },


}