/*
 * @Author: your name
 * @Date: 2020-09-15 10:47:28
 * @LastEditTime: 2020-09-15 10:49:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_new_nurses_station\react_medicine_chest\src\services\demo.js
 */
/**
 * demo
 */
import gen from './index';
import {  API_SSO ,API_DICT} from '../utils/constant';
const demo= {
  //demo
  demoAPI: `POST ${API_DICT}/Demo`

};
const APIFunction = {}

for (const key in demo) {
  APIFunction[key] = gen(demo[key])
}

export default APIFunction