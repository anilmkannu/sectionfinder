const mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

// define the schema for our User roles Model
const rolesSchema = mongoose.Schema(
      {
        userId: {type: ObjectId, ref:'users'},
        roleId: {type: ObjectId, ref:'roles'},
      },
      { timestamps: true }
    );
// create the model for roles and expose it to our app
module.exports = mongoose.model("User_Roles", rolesSchema);