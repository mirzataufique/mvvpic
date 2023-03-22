const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Users = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleWare/check-auth');
const { write } = require('fs');
const UsersController = require('../controllers/user')
// const logger = require('../middleWare/logger')

const moment = require('moment');
const fs = require('fs');



router.get('/',UsersController.users_get_all)
router.post('/signup', UsersController.users_signup);
router.post('/login',UsersController.users_login);
router.get('/:user_id', checkAuth,UsersController.users_get);
router.patch('/:user_id', checkAuth, UsersController.users_update);
router.delete('/:user_id', checkAuth,UsersController.users_remove);
// router.get('/userEmail', verifyT, (req, res, next) => {
//     console.log("res--",res)
// return  res.status(200).json(this.decodedToken.userEmail);
// });;

// var decodedToken='';
// function verifyToken(req, res, next) {
//     let token = req.query.token;
//     console.log("Toekn for verifcation")
//     jwt.verify(token, process.env.JWT_KEY, (err, tokendata) => {
//         if (err) {
//             res.status(500).json({
//                 message: "Unauthorized requiest",
//                 error: err
//             });
//         }
//         if(tokendata){
//             decodedToken :tokendata;
//             next();
//         }
//     });
// };



module.exports = router;