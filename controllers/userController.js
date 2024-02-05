const { User } = require('../models');

module.exports = {
    //get all Users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //get one user by their ID
    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //create new User
    async createUser(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //delete User
    async deleteUser(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //add Friend
    async addFriend(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
}