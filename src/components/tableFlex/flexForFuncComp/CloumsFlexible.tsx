
import React from 'react'
import { Resizable } from 'react-resizable';
import {Tooltip} from 'antd'
import './index.less'
export const ResizeableTitle = props => {
    const { onResize, width, ...restProps } = props;
    if (!width) {
      return <th {...restProps} />;
    }
    return (
      <Resizable
        width={width}
        height={0}
        handle={
          <span
            className="react-resizable-handle"
            onClick={e => {
              e.stopPropagation();
            }}
          />
        }
        onResize={onResize}
        draggableOpts={{ enableUserSelectHack: false }}
      >
        <th {...restProps} />
      </Resizable>
    );
  };
export const handleResize = (setCloums,newCloum,index) => (e, { size }) => {
  const nextColumns = [...newCloum]
  nextColumns[index] = {
    ...nextColumns[index],
    width: parseInt(size.width),
  }
  setCloums(nextColumns) 
};
/**
 * 
 * @param setCloums  hooks的设置函数
 * @param newCloum  存储表头的state hooks
 */
export const columns = (setCloums,newCloum)=>{
  return newCloum.map((col, index) => ({
    ...col,
    onHeaderCell: column => ({
      width: column.width,
      onResize: handleResize(setCloums,newCloum,index),
    }),
  }));
}