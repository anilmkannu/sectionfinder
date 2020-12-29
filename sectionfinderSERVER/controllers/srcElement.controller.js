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
const CreateSecElement = require("../models/secElements");



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
            image : imageUrl + '/public/uploads/' + req.file.filename
           // title : metaSchema.title,
            
          }).save()
          let dataObj = {};  
          srcElem.title =    srcElem.websiteName + 'by' + srcElem.categoryName;
          dataObj = srcElem;
          requestHandler.sendSuccess(res, `Section Element Added Successfully...!!!`, 200, "success", dataObj)();
        }
        } catch (err) {
          return requestHandler.genericError( res, err.message, 404)(validation, validation);
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
      const getSecElement = await CreateSecElement.find();
      return requestHandler.sendSuccess(
        res,
        `Element list proccessed successfully`,
        200
      )({
        data: getSecElement
      });
    } catch (err) {
      return requestHandler.sendError(req, res, err);
    }
  });
