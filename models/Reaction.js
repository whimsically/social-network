const { Schema, Types } = require('mongoose');

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
              return format(date, "mm-dd-yyyy")
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

model.exports = reactionSchema;