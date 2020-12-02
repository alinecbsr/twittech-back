const { Router } = require('express');
const SkillController = require('../controllers/skill')

const route = Router();
route.get('/api/skill', SkillController.list);
route.post('/api/skill', SkillController.create);
route.delete('/api/skill', SkillController.remove);
// route.get('/api/locker/:id', LockerController.get);

module.exports = route;