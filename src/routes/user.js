const { Router } = require('express');
const UserController = require('../controllers/user')

const route = Router();
route.get('/api/user', UserController.list);
route.post('/api/user', UserController.create);
// route.get('/api/user', LockerController.list);
// route.get('/api/locker/:id', LockerController.get);

module.exports = route;