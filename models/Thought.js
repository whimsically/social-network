const { Schema, model } = require('mongoose');
const Thought = model('thought', thoughtSchema);
const reactionSchema = require('./Reaction');
const { format } = require('date-fns');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: (date) => {
              return format(date, "mm-dd-yyyy")
            },
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false,
      },
      
)

//virtual for reactionCount
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });


module.exports = Thought;
