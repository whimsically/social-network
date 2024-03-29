const { Schema, Types } = require('mongoose');
const { format } = require('date-fns');

//reactionSchema is a subdocument of Thought
const reactionSchema = new Schema (
    {
        reactionId: {
            //creates new Id with mongoose's ObjectId
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: (date) => {
              return format(date, "MM-dd-yyyy")
            },
        },
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
      }    

)

module.exports = reactionSchema;