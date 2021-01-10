const _ = require("lodash");
//const axios = require('axios');
const bcrypt = require("bcryptjs");
const RequestHandler = require("../utils/RequestHandler");
const Logger = require("../utils/logger");
const appUtility = require("../utils/helper");
const { Console } = require("winston/lib/winston/transports");
const logger = new Logger();
const requestHandler = new RequestHandler(logger);
const SrcElememtJSON = require("../config/schema").SrcElementController.SrcElememtJSON;
const validationSchema = require("../utils/JsonSchemaValidator").validationSchema;
const {CreateSecElement,SecCategory} = require('../models/secElements');



  /******************************************
   * functionName: Create Section Element 
   * input: {}
   * output: JSON
   * owner: Sushil Yadav
   * date:14/12/2020
   ********************************************/
  (exports.creatSrcElement = async (req, res) => {
    const metaSchema = JSON.parse(req.body.elementDTO);
    const imageUrl = req.protocol + '://' + req.get('host')
    try{    
   const validation = await validationSchema(metaSchema, SrcElememtJSON.creatSrcElement);
    if(!validation){
          const srcElem = await new CreateSecElement({
            categoryName: metaSchema.categoryName,
            url: metaSchema.url,
            websiteName: metaSchema.websiteName,
            imageName : imageUrl + '/uploads/' + req.file.filename,
            title : metaSchema.websiteName + 'by' + metaSchema.categoryName
          }).save()
         // let dataObj = {};  
          //srcElem.title =    srcElem.websiteName + 'by' + srcElem.categoryName;
         // dataObj = srcElem;
          requestHandler.sendSuccess(res, `Section Element Added Successfully...!!!`, 200, "success", srcElem)();
        }
        } catch (err) {
          return requestHandler.genericError( res, err.message, 404)(validation, validation);
        }
  });
  /******************************************
   * functionName: get Category Element 
   * input: {}
   * output: JSON
   * owner: Sushil Yadav
   * date:10/01/2021
   ********************************************/
  (exports.getSecCategory = async (req, res) => {
    try {   
      const getSecCategory = await SecCategory.find({}).sort({ updatedAt: -1 });
      return requestHandler.sendSuccess(
        res,
        `Category list proccessed successfully`,
        200
      )({
        data: getSecCategory
      });
    } catch (err) {
      return requestHandler.sendError(req, res, err);
    }
  });
  /******************************************
   * functionName: get Section Element 
   * input: {}
   * output: JSON
   * owner: Sushil Yadav
   * date:29/12/2020
   ********************************************/
  (exports.getSrcElement = async (req, res) => {
    try {
      var pageNo = parseInt(req.query.pageNo) || 0;
      var size = parseInt(req.query.pageSize) || 4;
      var query = {};
      if(pageNo < 0 || pageNo === 0) {
            response = {"error" : true,"message" : "invalid page number, should start with 1"};
            return res.json(response)
            return requestHandler.sendSuccess(
              response,
              `invalid page number, should start with 1`,
              405
            )
      }
      const skip = size * (pageNo - 1)
      const limit = size
      const getSecElement = await CreateSecElement.find({}).sort({ updatedAt: -1 }).skip(skip).limit(limit);
      const totalCount = await CreateSecElement.countDocuments({});
      return requestHandler.sendSuccess(
        res,
        `Element list proccessed successfully`,
        200
      )({
        data: getSecElement,
        totalCount:totalCount,
        pageNo:pageNo,
        pageSize:getSecElement.length

      });
    } catch (err) {
      return requestHandler.sendError(req, res, err);
    }
  });

  /******************************************
   * functionName: get Section Element by Id
   * input: {}
   * output: JSON
   * owner: Sushil Yadav
   * date:31/12/2020
   ********************************************/
  (exports.getSrcElementById = async (req, res) =>{
    try {
      const sectionId = req.params.sectionId;
      const exit = await getSection(sectionId);
      if (!exit) {
        return requestHandler.genericError(res, `Section Not Found`, 404)();
      }
      const getSecElement = await CreateSecElement.findById(sectionId);
      return requestHandler.sendSuccess(
        res,
        `Element list proccessed successfully`,
        200
      )({
        data: getSecElement,
      });
    } catch (err) {
      return requestHandler.sendError(req, res, err);
    }
  });

  /******************************************
   * functionName: search by text
   * input: {}
   * output: JSON
   * owner: Sushil Yadav
   * date:29/12/2020
   ********************************************/
  (exports.searchElementByText = async (req, res) => {
    try {
      var pageNo = parseInt(req.query.pageNo) || 0;
      var size = parseInt(req.query.pageSize) || 4;
      var search = req.query.search;
      var query = {};
      if(pageNo < 0 || pageNo === 0) {
            response = {"error" : true,"message" : "invalid page number, should start with 1"};
            return res.json(response)
            return requestHandler.sendSuccess(
              response,
              `invalid page number, should start with 1`,
              405
            )
      }
      const skip = size * (pageNo - 1)
      const limit = size
      const getSecElement = await CreateSecElement.find({$text: {$search: search}}).sort({ updatedAt: -1 }).skip(skip).limit(limit);
      const totalCount = await CreateSecElement.countDocuments({});
      return requestHandler.sendSuccess(
        res,
        `Element list proccessed successfully`,
        200
      )({
        data: getSecElement,
        totalCount:totalCount,
        pageNo:pageNo,
        pageSize:getSecElement.length

      });
    } catch (err) {
      return requestHandler.sendError(req, res, err);
    }
  });


  /**
 * getSection will get info of requested plugin.
 * @param {string} sectionId.
 * @return {Object<Plugin>} return plugin of requested sectionId
 */
async function getSection(sectionId) {
  return CreateSecElement.findOne({ _id: sectionId }).select("_id").lean();
}






  