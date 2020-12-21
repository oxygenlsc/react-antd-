import Link from 'react-router-dom';
import React from 'react';

/**
 * 工具类
 */

export function refactor(data) {
  // 初始化返回数据
  let refactorData = null;
  // 判断入参是否是数组
  if (Object.prototype.toString.call(data) === '[object Array]') {
    // 改变返回数据格式
    refactorData = [];
    // 循环入参将数据进一步解析
    for (let i = 0; i < data.length; i++) {
      // 判断子元素是否是对象或数组 如果是对象或数组进行方法自调用处理数据
      if (typeof data[i] === 'object') {
        refactorData.push(refactor(data[i]));
      } else {
        refactorData.push(data[i]);
      }
    }
  }
  // 判断入参是否是数组
  else if (Object.prototype.toString.call(data) === '[object Object]') {
    // 改变返回数据格式
    refactorData = {};
    // 循环入参将数据进一步解析
    for (let i in data) {
      // 判断子元素是否是对象或数组 如果是对象或数组进行方法自调用处理数据
      if (typeof data[i] === 'object') {
        refactorData[i] = refactor(data[i]);
      } else {
        refactorData[i] = data[i];
      }
    }
  }
  // 判断入参是否是其他类型数据
  else {
    refactorData = data;
  }
  // 返回处理后的数据
  return refactorData;
}

//渲染操作列
export function handleRender(arr) {
  let tmp = refactor(arr);
  if (Object.prototype.toString.call(tmp) === '[object Array]') {
    tmp.map(item => {
      if (undefined != item.render) {
        let render = JSON.parse(item.render);
        item.render = (text) => {
          switch (render[0].type) {
            case "link":
              return <a onClick={() => linkTO(text)}>查看</a>
          }
        };
      }
    })
    return tmp
  }
}

//弹出窗口
export function linkTO(url) {
  var iWidth = 1400; //弹出窗口的宽度;
  var iHeight = 800; //弹出窗口的高度;
  var iTop = (window.screen.availHeight - 30 - iHeight) / 2; //获得窗口的垂直位置;
  var iLeft = (window.screen.availWidth - 10 - iWidth) / 2; //获得窗口的水平位置;
  window.open(url, '报卡审核', 'fullscreen=yes,width=' + iWidth + ',height=' + iHeight + ',top=' + iTop + ',left=' + iLeft + ', location=no, status=no');
}

export function deBounce(func, wait) {
  let timeOut = null;
  return function (...args) {
    clearTimeout(timeOut);//一定要清除定时器
    timeOut = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

//antd Form 表单校验规则
export function checkRules(type) {
  let rules = [];
  type.map(item => {
    switch (item) {
      case 'telPhone':
        rules.push({
          pattern: /^1[34578]\d{9}$/,
          message: '手机号格式不正确'
        });
        break;
      case 'idCard':
        rules.push({
          pattern: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
          message: '身份证格式不正确',
        });
        break;
      case 'null':
        rules.push({
          required: true,
          message: '请输入',
        });
        break;
      case 'number':
        rules.push({
          pattern: /^\+?[1-9][0-9]*$/,
          message: '请输入正确的数字'
        });
        break;
      case 'number3.2':
        rules.push({
          pattern: /^(\d{1,3}|\d{1,3}\.\d{1,2})$/,
          message: '请输入正确的数字'
        });
        break;
      case 'number2.2':
        rules.push({
          pattern: /^(\d{1,2}|\d{1,2}\.\d{1,2})$/,
          message: '请输入正确的数字'
        });
        break;
      case 'name':
        rules.push({
          pattern: /^[\u2E80-\u9FFFa-zA-Z]{1,25}$/,
          message: '请输入正确的姓名'
        });
        break;
      default:
        break;
    }
  });
  return rules;
}