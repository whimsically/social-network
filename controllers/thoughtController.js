const { User, Thought, Reaction } = require('../models');

module.exports = {
    //get all Thoughts
    async getThoughts(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //get Thought by its Id
    async getThoughtById(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //post new Thought
    async postThought(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //update Thought
    async updateThought(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //delete thought by its Id
    async deleteThought(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //create new Reaction on Thought
    async createReaction(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //delete reaction
    async deleteReaction(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
}