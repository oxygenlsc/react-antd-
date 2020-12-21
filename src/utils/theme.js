const lessToJs = require('less-vars-to-js');
const {resolve} = require('path');
const fs = require("fs");
//转换antd自定义主题 覆盖less
module.exports =  () => {
  return lessToJs(fs.readFileSync(resolve(__dirname, '../config-overrides-antd-vars.less'), 'utf8'));
}
