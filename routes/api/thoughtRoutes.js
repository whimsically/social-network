const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    postThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,

} = require('../../controllers/thoughtController');

// /api/thoughts/
//get all Thoughts or post new one
router.route('/').get(getThoughts).post(postThought);

// /api/thoughts/:thoughtId
//get, delete, update single Thought by ID
router.route('/:thoughtId').get(getThoughtById).delete(deleteThought).put(updateThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/:reactionId').delete(deleteReaction);

module.exports = router;