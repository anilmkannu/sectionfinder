const mongoose = require("mongoose");
const { stream } = require("winston");

// define the schema for our Add Element Model
const SecElement = mongoose.Schema(
    {
        categoryName: {
            type: String,
            trim: true,
            required: true
        },     
        url:{
          type: String,
          trim: true,
          required: true
        },
        websiteName: {
            type: String,
        },  
        title : {
            type: String,
        },  
        image : {
          type: String,
      },      
      },
      { timestamps: true }
    );


    
// define the schema for our roles Model
const secCategory = mongoose.Schema(
    {
    name: String,
    code: String,
    id:String,
    }
  );
// create the model for roles and expose it to our app
module.exports = mongoose.model("SecElement", SecElement);
//module.exports = mongoose.model("SecCategory", secCategory);