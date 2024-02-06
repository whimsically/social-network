const { Thought } = require('../models');

module.exports = {
    //get all Thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //get Thought by its Id
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //post new Thought
    async postThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //update Thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
              }
              
            res.json(thought);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //delete thought by its Id
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete( { _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }

            res.json(thought);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //create new Reaction on Thought
    async createReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );
        
            if (!thought) {
                return res.status(404).json({ message: "No thought with that ID!" });
            }

        return res.json("Reaction added!");

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //delete reaction
    async deleteReaction(req, res) {
        try {
            //update the parent Thought, remove from reaction array
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );
                
            //return 404 if not found
            if (!thought) {
                return res.status(404).json({ message: "No thought with that ID!" });
            }

            return res.json("Reaction deleted!");

        } catch (err) {
            res.status(500).json(err);
        }
    }
}