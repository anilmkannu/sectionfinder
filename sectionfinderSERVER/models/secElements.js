const mongoose = require("mongoose");

// define the schema for our Add Element Model
const SecElement = mongoose.Schema(
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
        title : {
            type: String,
            trim: true,
            required: true
        },        
      },
      { timestamps: true }
    );


    
// define the schema for our roles Model
const secCategory = mongoose.Schema(
    {
      name: {
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
      title : {
          type: String,
          trim: true,
          required: true
      },        
    },
    { timestamps: true }
  );
// create the model for roles and expose it to our app
module.exports = mongoose.model("SecElement", SecElement);