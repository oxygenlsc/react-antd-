/**
 * 登录
 */
import gen from './index';
import {  API_SSO ,API_DICT} from '../utils/constant';
const platform= {
  //登录
  platform_login: `POST ${API_SSO}/tokens/login`,
  //登录getInfo
  platform_getInfo: `POST ${API_SSO}/tokens/getInfo`,
  // 单点登录校验
  platform_sso: '/api/sso/tokens/check',
  //科室
  platfrom_depart: `${API_DICT}/staffVsGroup/deptList`,
  //校验密码
  platform_checkPassword: `POST ${API_SSO}/tokens/checkPassword`,
};
const APIFunction = {}

for (const key in platform) {
  APIFunction[key] = gen(platform[key])
}

export default APIFunction
