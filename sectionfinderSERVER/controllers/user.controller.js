const _ = require("lodash");
//const axios = require('axios');
const bcrypt = require("bcryptjs");
const RequestHandler = require("../utils/RequestHandler");
const Logger = require("../utils/logger");
const UserReg = require("../models/user");
const RolesSchema = require("../models/roles");
const UserRolesSchema = require("../models/userRoles");
const appUtility = require("../utils/helper");
const { Console } = require("winston/lib/winston/transports");
const logger = new Logger();
const requestHandler = new RequestHandler(logger);
const userJSON = require("../config/schema").UserController.userJSON;
const validationSchema = require("../utils/JsonSchemaValidator").validationSchema;
/******************************************
 * functionName:login of users
 * input: {}
 * output: JSON
 * owner: Sushil Yadav
 * date:20/08/2020
 ********************************************/
(exports.login = async (req, res, next) => {
  const metaSchema = req.body;
  // validation of requested input
  const validation = await validationSchema(metaSchema, userJSON.login);
  logger.log(
    `create validation response for User ID : `,
    "info",
    validation
  );

  if (!validation) {
    const user = await UserReg.findOne({ email: metaSchema.email });
    if (!user) {
      return requestHandler.sendError(req, res,`User doesn't exists`, 404)();
    } else {
      const isPassMatch = await bcrypt.compare(
        metaSchema.password,
        user.password
      );
      if (true) {
        var dataObj = {};
        dataObj.email = user.email;
        dataObj.firstName = user.firstName;
        dataObj.lastName = user.lastName;
        dataObj.project = user.project;
        dataObj.userId = user._id;
        dataObj.token = await appUtility.GenerateToken(user._id);
        const user_id = await UserRolesSchema.findOne({ userId : user._id});
        const role_id = await UserRolesSchema.findOne({ roleId : user_id});
        const role = await RolesSchema.findOne({ role : role_id});
        dataObj.role = role;
        requestHandler.sendSuccess(
          res,
          `User login successfully`,
          200,
          "success",
          dataObj
        )();
      }
    }
  } else {
    return requestHandler.genericError(
      res,
      `It's look like you have wrong data`,
      422
    )(validation, validation);
  }
}),
  /******************************************
   * functionName:signUp of users
   * input: {}
   * output: JSON
   * owner: Sushil Yadav
   * date:20/08/2020
   ********************************************/
  (exports.superAdminSignUp = async (req, res) => {
    const metaSchema = req.body;
    // validation of requested input
      if (await UserReg.findOne({ email: metaSchema.email })) {
        return requestHandler.genericError(res, `User Email all ready exists`, 404);
      }
    const validation = await validationSchema(metaSchema, userJSON.signUp);
    if(validation){
      logger.log(
        `create validation response for User ID : `,
        "info",
        validation
      );
      return requestHandler.sendError(
        res,
        `undefined Error`,
        500
      )(validation, validation);
    }
        try {
          const userReg = await new UserReg({
            firstName: metaSchema.firstName,
            lastName: metaSchema.lastName,
            email: metaSchema.email,
            password: metaSchema.password,
            startDate: metaSchema.startDate,
            endDate: metaSchema.endDate,
          }).save();
          let dataObj = {};          
          const role_id = await RolesSchema.findOne({ code : 'SUPERADMIN' });
          console.log(role_id.toObject().id);
          const UserRolesData =  await new UserRolesSchema({userId: userReg._id, roleId : role_id.id}).save();
          dataObj.data = UserRolesData
          requestHandler.sendSuccess(res, `Super Admin record Created successfully...!!!`, 200, "success", dataObj)();
        } catch (err) {
          return requestHandler.catchError(
            res,
            `undefined Error`,
            500
          )();
        }
  }),
  /******************************************
   * functionName:admin registration
   * input: {}
   * output: JSON
   * owner: Sushil Yadav
   * date:20/08/2020
   ********************************************/
  (exports.createAdmin = async (req, res) => {
    const metaSchema = req.body;
    // validation of requested input
    if (await UserReg.findOne({ email: metaSchema.email })) {
      return requestHandler.genericError(res, `Email all ready  exists`, 404)();
    }
    try{
    const validation = await validationSchema(metaSchema, userJSON.creatAdmin);
    if(!validation){
          const userReg = await new UserReg({
            firstName: metaSchema.firstName,
            lastName: metaSchema.lastName,
            email: metaSchema.email,
           // project: metaSchema.project,
            password: metaSchema.password,
          //  startDate: metaSchema.startDate,
          //  endDate: metaSchema.endDate,
          }).save()
          let dataObj = {};          
          // const role_id = await RolesSchema.findOne({ code : 'ADMIN' });
          // console.log(role_id.toObject().id);
          // const UserRolesData =  await new UserRolesSchema({userId: userReg._id, roleId : role_id.id}).save();
          // dataObj.data = UserRolesData;
          requestHandler.sendSuccess(res, `create validation response for User ID`, 200, "success", userReg)();
        }
        } catch (err) {
          return requestHandler.genericError( res, err.message, 404)(validation, validation);
        }
  });
