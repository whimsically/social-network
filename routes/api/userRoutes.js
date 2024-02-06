const router = require('express').Router();

const {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    addFriend,
    removeFriend
} = require ('../../controllers/userController');

// /api/users
//GET all users or POST new one
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
// GET one user or DELETE one user
router.route('/:userId').get(getUserById).delete(deleteUser);

// /api/users/:userId/friends/:friendId
// POST new friend or DELETE friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;