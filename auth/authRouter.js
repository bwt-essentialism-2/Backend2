const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../database/db-config.js');

router.post('/register',  (req, res) => {
    const user = req.body;
    console.log("user: ", user)
    const rounds = process.env.HASH_ROUNDS || 12
    const hash = bcrypt.hashSync(user.password, rounds)
    user.password = hash;
// db('users').insert({username: 'alex', password: "Lambda"})
// Outputs:
// insert into `users` (`username`, `password`) values ('alex', 'Lambda')
    db('users').insert({username: 'alex', password: "Lambda"})
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => res.send(err));
});

router.get('/users', (req, res) => {
    //select * from `users`
    db.select().table('users')
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.send(err));       
})

module.exports = router;