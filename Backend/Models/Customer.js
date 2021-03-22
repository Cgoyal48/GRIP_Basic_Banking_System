var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
    },
    lastName: {
      type: String,

      maxlength: 32,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    amount:{
        type:Number,

    }

  },
  {
    timestamps: true
  }
);


module.exports = mongoose.model("User", userSchema);



