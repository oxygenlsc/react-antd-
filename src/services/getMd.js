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
const getMd= {
  //demo
  //   demoAPI: `POST ${API_DICT}/Demo`
  //获取未确认入库申请单
  getNotSureBill:`drugapi/api/WardApplyService/GetUnDoDrugListInfo`,
  //获取确认入库的申请单
  getSureBill:`drugapi/api/WardApplyService/GetDrugListInfo`,
    //获取科室领药入库方式
  getMDWay:'drugapi/api/WardApplyService/GetWardDrugInOutType',
  //获取出库药房出库
  getOutMdRoom:'drugapi/api/WardApplyService/GetDeptByClass',
  //获取申请单的药品明细
  getDrugDetail:'drugapi/api/WardApplyService/GetDrugInOutDetail',
  //根据选择的药库来获取右边下拉框的数据
  getAllDrug:'drugapi/api/WardApplyService/GetAllDrugInfoByDept',
  //暂存数据
  saveDataTemp:'POST drugapi/api/WardApplyService/TempSaveApplyStorage',
  //提交暂存申请单
  sendSaveDataTemp:'POST drugapi/api/WardApplyService/SubmitTempSaveApply',
  //删除申请单
  deleteDataBill:'drugapi/api/WardApplyService/DeleteDrugInData',
  //确认入库
  makeSureSave:'POST drugapi/api/WardApplyService/ConfirmWardApplyInStorage'
};
const APIFunction = {}

for (const key in getMd) {
  APIFunction[key] = gen(getMd[key])
}

export default APIFunction