const Validator = require('jsonschema').Validator;
const v = new Validator();
module.exports = {
  /**
   * @param inputJson
   * @param defineSchema
   * @returns <null|error>
   */
  async validationSchema(inputJson, defineSchema) {
    let validateData = v.validate(inputJson, defineSchema);
    if (validateData && validateData.errors && validateData.errors.length) {
      const vErrors = {
        errors: {}
      };
      for (const vError of validateData.errors) {
        if (vError.property) {
          const ePropLen = vError.property.split('.');
          if (ePropLen.length > 1) {
            vErrors.errors[ePropLen[1]] = [vError.schema.errExplain];
          }
        }
      }
      return vErrors;
    } else {
      return null;
    }
  }
};
