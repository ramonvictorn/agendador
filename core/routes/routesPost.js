exports.initPost = initPost;

const controllersPost = require('../controllers/controllersPost');
const express = require('express');
const bcrypt = require('bcryptjs')
const User = require('../models/user');
const authConfig = require('../config/auth')
const router = express.Router();

function initPost (app){
    app.post('/login', controllersPost.login);
    app.post('/register', controllersPost.register)
    app.post('/getEvents', controllersPost.getEvents)
}