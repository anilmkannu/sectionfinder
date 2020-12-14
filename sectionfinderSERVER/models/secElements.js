const mongoose = require("mongoose");

// define the schema for our roles Model
const rolesSchema = mongoose.Schema(
      {
        url: {
            type: String,
            trim: true,
            required: true
        },  
        categoryName: {
            type: String,
            trim: true,
            required: true
        },     
        websiteName: {
            type: String,
        },         
      },
      { timestamps: true }
    );
// create the model for roles and expose it to our app
module.exports = mongoose.model("Roles", rolesSchema);