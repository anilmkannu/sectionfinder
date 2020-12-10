const mongoose = require("mongoose");

// define the schema for our roles Model
const rolesSchema = mongoose.Schema(
      {
        name: {type: String, required: true},
        code: {type: String, required: true},
        discription: {type: String, required: true}       
      },
      { timestamps: true }
    );
// create the model for roles and expose it to our app
module.exports = mongoose.model("Roles", rolesSchema);
