/*
 * @Author: your name
 * @Date: 2020-07-13 21:22:29
 * @LastEditTime: 2020-08-24 11:11:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_new_nurses_station\react_medical_dvice_management\src\utils\utils.js
 */ 
/***
 * @description 项目中常用方法
 */ 

/** 
 * @description getGroupShowMap 处理数据中成组显示问题 
 * @param {Array} data  //数据源
 * @returns  {Map}
*/
export function getGroupShowMap (data){
  /** 
   * @description odrs 暂定包子集, 组ordGroupNo ,//orderNo每一项的唯一编码
   * */  
  let groupShowMap = new Map(); //key - 1,2,3
  data.map((bag) => {   //遍历类型为A或B的包
    if (!bag.odrs) {
      return;
    }
    let map = new Map();
    bag.odrs.map((record) => { //遍历包里的内容
      if (record.ordGroupNo) {               //判断是否有成组的条件
        if (map.has(record.ordGroupNo)) {
          let list = map.get(record.ordGroupNo);
          list.push(record.orderNo);     //orderNo每一项的唯一编码
        } else {
          map.set(record.ordGroupNo, [record.orderNo])
        }
      }
    });
    bag.odrs.map((row) => {
      groupShowMap.set(row.orderNo, 0);
      if (row.ordGroupNo && map.has(row.ordGroupNo)) {
        const list = map.get(row.ordGroupNo);
        if (list.length > 1) {
          if (list[0] === row.orderNo) {
            groupShowMap.set(row.orderNo, 1);
            return;
          }
          if (list[list.length - 1] == row.orderNo) {
            groupShowMap.set(row.orderNo, 3);
            return;
          }
          groupShowMap.set(row.orderNo, 2);
        }
      }
    });
  });
  return groupShowMap;
}

/** 
 * @description getGroupNoRowSpanMap 处理数据中成组显示问题 没有合并行的
 * @param {Array} data  //数据源
 * @returns  {Map}
*/
export function  getGroupNoRowSpanMap (data) {
   /** 
   * @description  暂定, 组groupNo ,组序号groupSubNo
   * */  
  let map = new Map();
  data.map((record) => {
    if(record.groupNo){               //
      if(map.has(record.groupNo)){
        let list = map.get(record.groupNo);
        list.push(record.groupSubNo);
      }else{
        map.set(record.groupNo,[record.groupSubNo])
      }
    }
  });
  return map
}
export function  getGroupNoRowMap (data) {
   /** 
   * @description  暂定, 组ordGroupNo ,组序号ordGroupSubNo
   * */  
  let map = new Map();
  data.map((record) => {
    if(record.ordGroupNo){               //
      if(map.has(record.ordGroupNo)){
        let list = map.get(record.ordGroupNo);
        list.push(record.ordGroupSubNo);
      }else{
        map.set(record.ordGroupNo ,[record.ordGroupSubNo])
      }
    }
  });
  return map
}

/***变更单处理成组-不同执行状态的组**/ 
export function  getGroupNoStatusMap (data) {
   /** 
   * @description  暂定, 组ordGroupNoStatus ,组序号ordGroupSubNo
   * */  
  let map = new Map();
  data.map((record) => {
    if(record.ordGroupNoStatus){               //
      if(map.has(record.ordGroupNoStatus)){
        let list = map.get(record.ordGroupNoStatus);
        list.push(record.ordGroupSubNo);
      }else{
        map.set(record.ordGroupNoStatus ,[record.ordGroupSubNo])
      }
    }
  });
  return map
}
/** 
 * @description 返回对象元素在数组中所在位置
 * @param {Array} arr  //数据源
 * @param {object} obj  //数据源
 * @returns {Number} 
*/
export function getArrIndex (arr, obj)  {
  let index = null;
  let key = Object.keys(obj)[0];
  arr.every((value, i) => {
      if (value[key] === obj[key]) {
          index = i;
          return false;
      }
      return true;
  });
  return index;
};

export function randomKey(){
  return Math.random().toString().slice(-8)+Date.now()
}
export const waterFull = (classname, contentwidth, itemwidth, cloum) => {
  let domArr = document.getElementsByClassName(classname);
  let colY = new Array(cloum);
  colY.fill(5);
  console.log(domArr);
  if (domArr.length == 0) {
    return;
  }
  itemwidth = parseInt(domArr[0].style.width);
  let gap = (contentwidth - itemwidth * cloum) / (cloum + 1);
  for (let i = 0; i < domArr.length; i++) {
    let ele = domArr[i];
    let miny = Math.min(...colY);
    let colIndex = colY.indexOf(miny);
    let lefts = gap * (colIndex + 1) + colIndex * itemwidth;
    ele.style.left = gap * (colIndex + 1) + colIndex * itemwidth + 'px';
    ele.style.top = miny + 'px';
    colY[colIndex] += parseInt(ele.offsetHeight) + gap;
  }
};
export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
