const { Schema, model } = require('mongoose');
const User = model('user', userSchema);

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function(v) {
                    //regex to match valid email addresses
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: "Please enter a valid email"
            },
            required: [true, "Email required"]
        },
        //referencing Thought schema
        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
        //array, referencing User schema (self reference)
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: 'User',
            }
            ]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
)

//virtual for friendCount
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });

module.exports = User;
