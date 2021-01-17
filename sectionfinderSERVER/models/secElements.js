const mongoose = require("mongoose");
const { stream } = require("winston");

// define the schema for our roles Model
const secCategory = mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
});
// define the schema for our Add Element Model
const SecElement = mongoose.Schema(
  {
    categoryName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SecCategory", // Reference to some EventSchema
      trim: true,
      required: true,
    },
    // categoryName: {type: String, trim: true,required: true },
    url: { type: String, trim: true, required: true },
    websiteName: { type: String },
    title: { type: String },
    imageName: { type: String },
  },
  { timestamps: true }
);
//SecElement.index({categoryName: 'text', 'url': 'text','websiteName': 'text','title': 'text','imageName': 'text'});
SecElement.index({ "$**": "text" });


// create the model for roles and expose it to our app
const CreateSecElement = mongoose.model("SecElement", SecElement);
const SecCategory = mongoose.model("SecCategory", secCategory);

module.exports = {
  CreateSecElement: CreateSecElement,
  SecCategory: SecCategory,
};
