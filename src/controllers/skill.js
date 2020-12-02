const {Skill} = require('../models/skill')

module.exports = {
  async create(req, res) {
    try {
      const skillCreated = await Skill.create(req.body);
      res.send(skillCreated);
    } catch (error) {
      console.log(error)
      res.status(400).json(error);
    }
  },

  async list(req, res) {
    res.json(await Skill.find({},null,{sort:{name:1}}))
  },

  async remove(req, res) {
    try {
      const skillDeleted =  await Skill.deleteOne({_id:req.body._id});
      res.json(skillDeleted);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async createMany(skills) {
    try {
      console.log('total skills:', skills.length);
      skills.map(async skill => {
        const query = {name:skill.toUpperCase()}
        const skillCreated = await Skill.findOneAndUpdate(query, query,{upsert:true});
      })
    
    } catch (error) {
      console.log(error);
    }
  },


}