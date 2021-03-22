var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var recordSchema = new Schema(
  {
    sendersId: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true
    },
    reciversId: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
      },
    amount:{
        type:Number,

    }
  }
);


module.exports = mongoose.model("Record", recordSchema);



