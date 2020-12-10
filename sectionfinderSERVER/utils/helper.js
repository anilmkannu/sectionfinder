const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

    /******************************************
     * functionName:EncryptPassword
     * input:password
     * output: encrypt password
     * owner:Sushil Yadav
     * date:24-08-2020

     ********************************************/
    exports.EncryptPassword = async (password) => {
      const EncryptedPassword = bcrypt.hash(password, 8);
      return EncryptedPassword;
    };
        /******************************************
     * functionName:GenerateToken
     * input:id
     * output: token
     * owner:Sushil Yadav
     * date:24-08-2020

     ********************************************/
exports.GenerateToken = async (id) => {
    const token = jwt.sign({ _id: id }, "Bearer");
    return token;
  };