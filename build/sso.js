const parser = require('xml2json');
const utils = require('./utils');

const packageFile = require("./package.json");
const ENV = packageFile.config.env;
const AppID = packageFile.AppID;

const ssoRootUrl = ENV === 'FAT' ? 'https://cas.fat358.qa.nt.ctripcorp.com' : ENV === 'UAT' ?'https://cas.uat.qa.nt.ctripcorp.com':'https://cas.ctripcorp.com';
const ServiceValidateUrlPrefix = ssoRootUrl + "/caso/serviceValidate?ticket=";
const PrincipalUrl = ssoRootUrl + "/caso/client/principal";
const LoginUrlPrefix = ssoRootUrl + "/caso/login?service=";
const PrincipalGetUrl = ssoRootUrl + "/caso/client/principal?principalId=";
const LogOutUrlPrefix = ssoRootUrl + "/caso/logout?service=";


const sso = {
  ssoRootUrl: ssoRootUrl,
  ServiceValidateUrlPrefix: ServiceValidateUrlPrefix,
  PrincipalUrl: PrincipalUrl,
  LoginUrlPrefix: LoginUrlPrefix,
  PrincipalGetUrl: PrincipalGetUrl,
  LogOutUrlPrefix: LogOutUrlPrefix,
  AppID: AppID
};

sso.has_sso_cookie_ok = async function (ticket, principalId) {
    try {
      const serviceValidateOption = {
        "uri": sso.ServiceValidateUrlPrefix + ticket,
        "strictSSL": false
      };
      let serviceValidateBody = await utils.getPromiseByAjaxRequest(serviceValidateOption);
      let _result = parser.toJson(serviceValidateBody),
           result = JSON.parse(_result),
      casResponse = result["cas:serviceResponse"],
          casData = casResponse["cas:authenticationSuccess"] || false ;
      if(casData){
        const loginUser = {
                name: casData["cas:attributes"]["cas:name"],
                sn: casData["cas:attributes"]["cas:sn"],
                mail: casData["cas:attributes"]["cas:mail"],
                department: casData["cas:attributes"]["cas:department"],
                company: casData["cas:attributes"]["cas:company"],
                displayName: casData["cas:attributes"]["cas:displayName"],
                employee: casData["cas:attributes"]["cas:employee"],
                city: casData["cas:attributes"]["cas:city"],
                distinguishedName: casData["cas:attributes"]["cas:distinguishedName"],
                memberOf: casData["cas:attributes"]["cas:memberOf"]
              },
              postData = {
                "id": principalId,
                "principal": loginUser,
                "expire": 7*24*60*60
              },
              principalOption = {
                "uri": PrincipalUrl,
                "method": "POST",
                "headers": {
                  "content-type": "application/json",
                },
                "body": JSON.stringify(postData),
                "strictSSL": false
              } ;
        let principalOptionBody = await utils.getPromiseByAjaxRequest(principalOption);
        let result = JSON.parse(principalOptionBody);
        if (result["code"]===0){
          // console.log("user info sso save ok");
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
}

// sso.has_third_login_ok = async function (root_principal) {
//   let result = {
//     "success": false,
//     "message":""
//   };
//
//   try {
//     const options = {
//       "uri": sso.PrincipalGetUrl + root_principal,
//       "strictSSL": false
//     }
//     let ret = await utils.getPromiseByAjaxRequest(options),
//         result = JSON.parse(ret);
//         userData = JSON.parse(result.result);
//     let login = await handleThirdLogin(userData);
//     return login;
//
//   } catch (e) {
//       result["message"] = e.message;
//   }
//   return result;
// }

module.exports = sso;
