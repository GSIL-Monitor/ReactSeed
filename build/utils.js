const request = require('request');
exports.expireDate = (day) => {
    let date = new Date();
    date.setTime(date.getTime() + day * 86400000);
    return date;
};

exports.randStr = () => {
    return Math.random().toString(36).substr(2);
};

/**
 * 处理ajax请求
 * @return promise
 */
function getPromiseByAjaxRequest(options) {
  let p = new Promise(function(resolve, reject) {
    request(options,function (error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
  return p;
}
exports.getPromiseByAjaxRequest = getPromiseByAjaxRequest;
