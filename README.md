<!--
 * @Author: your name
 * @Date: 2020-03-19 16:57:49
 * @LastEditTime: 2020-06-11 10:28:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_new_nurses_station\README.md
--> 


**项目中页面布局的一些组件(在components下)**

# 1 Side 组件
#### 左侧患者列表盒子--目前宽度为240px
<!-- 可以将左侧head和foot  以属性传入改组件 -->
<!-- <table/>写<Side></Side>组件中 -->
<!-- 例： -->
```
<Side head={<input/>}>
  <table/>
</Side>
```
# 2 SelectContainer 组件
####  盒子标签 isFullWin属性 为 ture; height: 100vh;background: #fff;
####  isBorder属性为ture ; 添加边框 border: 1px solid @border-color-split;
####  可在组件中加className;
     
```
  
```
>## 1 SelectContainer.Side 组件
#### 左侧内容盒子

```

```
> ## 2 SelectContainer.Inner 组件
#### 右侧内容盒子

# 3 TableWrap 组件
#### 组件上type属性 目前有两个值"fixed-head" 和"fixed"
#### Table组件盒子
<!--type === "fixed-head" 左侧患者tatle盒子 -->
<!--type === "fixed" 右侧医嘱tatle盒子 -->

# 4 Layout 组件
```
 数据类型 
 export declare type FlexType = 'vertical'|'horizontal';
 interface IProps {
     className?: string;  //可以加className属性
     type?: FlexType;    //horizontal  不可换行
     style?: React.CSSProperties;  //可以在组件上写行内样式
     isScroll?: boolean;  //是否出现滚动
 }

```
#### 1. Layout.Side 组件
<!-- {
      flex: 0 0 auto;
  } 
  
  -->
```
// 数据类型
// interface IProps {
    className?: string;  //可以加className属性
    style?: React.CSSProperties;  //可以在组件上写行内样式
// }

```
# 5 Condition 组件
<!-- 对头部多选不同尺寸显示下拉的封装-->
####  1 Condition.ItemList 组件
####  2 Condition.Item 组件
<!-- 例 -->
```
  <Condition>
    <Condition.ItemList>
      <Condition.Item label="期效">
        <Radio.Group onChange={this.onChangeQX} value={this.state.repeatindicatorcode}>
          <Radio value='0'>全部</Radio>
          <Radio value='1'>长期</Radio>
          <Radio value='2'>临时</Radio>
        </Radio.Group>
      </Condition.Item>
      <Condition.Item label="状态">
        <CheckGroupResponsive options={['有效', '停止', '作废']} checkedOptions={[]} onChange={this.onChange} className="amt-radio-group-responsive-1328" captionStyle={{width: 150}}/>
      </Condition.Item>
      <Condition.Item label="类型">
        <CheckGroupResponsive options={['药品', '检验', '检查', '护理', '其他']} checkedOptions={[]} onChange={this.onChange} className="amt-radio-group-responsive-1328"/>
        </Condition.Item>
    </Condition.ItemList>
  </Condition>
```
# 6 CheckGroupResponsive 组件
#### 右侧顶部搜索组
#### 将定义了每个选项code和name对应关系的对象数组传入options
#### 将需要选中的name组成的数组传入defaultValue