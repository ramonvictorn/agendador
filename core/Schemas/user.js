const mongoose = require('../db.js');
const crypto = require('crypto');
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:false,
    },
    login:{
        type:String,
        required:false,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:false,
        select: false,
    },
    role:{
        type:String,
        required:false,
    },
    details:{
        type:Object,
        required:true,
        default:'{url:"lantec"}',
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});
 
UserSchema.pre('save',  function (next) {
    const hasher = crypto.createHash('SHA256');
    hasher.update(this.password);
    const enteredHash = hasher.digest('hex');
    this.password = enteredHash;

    next();
})


const User = mongoose.model('User', UserSchema, 'users');


module.exports = User;