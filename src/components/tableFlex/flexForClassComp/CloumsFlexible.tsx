import React from 'react'
import { Resizable } from 'react-resizable';
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
const handleResize = (context,index,columnName,state) => (e, { size }) => {
    context.setState((obj) => {
      let column = obj[columnName]
      const nextColumns = [...column];
      nextColumns[index] = {
        ...nextColumns[index],
        width: parseInt(size.width),
      };
      return { [columnName]: nextColumns };
    });
  };
/**
 * 
 * @param state  当前的state this.state
 * @param columnName  放在state中的表头的名字
 * @param context  当前环境的this
 */
export const columns = (state,columnName,context)=>{
   return state[columnName].map((col, index) => ({
        ...col,
        onHeaderCell: column => ({
          width: column.width,
          onResize: handleResize(context,index,columnName,state),
        }),
      }));
}



