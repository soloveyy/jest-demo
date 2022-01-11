module.exports = { checkUser(user, callback) {

        if (user.age > 18) {
            callback(user.age)
        }
    }
}