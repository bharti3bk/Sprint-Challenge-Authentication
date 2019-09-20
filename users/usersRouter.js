const router = require('express').Router();

const Users = require('./usersModel.js');
const restricted = require('../auth/authenticate-middleware.js');
 
router.get('/' , (req, res) => {
  res.status(200).json({api : 'working'})
})
router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json({ users, loggedInUser: req.user.username });
    })
    .catch(err => res.send(err));
});

module.exports = router;