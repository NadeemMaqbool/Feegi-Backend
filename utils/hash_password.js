const bcrypt = require('bcrypt')

module.exports.bcryptPassword = (password) => {
    let hashed;
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            hashed = hash
        });
    });

    return hashed
}