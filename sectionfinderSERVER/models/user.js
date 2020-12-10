const mongoose = require("mongoose");
const appUtility = require('../utils/helper');

// define the schema for our user Model
const userSchema = mongoose.Schema(
      {
        firstName:{type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true},
        project: {type: String, required: false},  
        password: {type: String, required: true}, 
        startDate : {type: String, required: true},
        endDate : {type: String, required: true},
      },
      { timestamps: true }
    );
    // Encrypt Password before save in db
userSchema.pre("save", async function (next) {
    this.password = await appUtility.EncryptPassword(this.password);
    //this.cpassword = await appUtility.EncryptPassword(this.cpassword);
    next();
  });  


// create the model for users and expose it to our app
module.exports = mongoose.model("User", userSchema);
