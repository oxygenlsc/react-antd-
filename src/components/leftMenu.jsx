import React,{useState,useEffect} from 'react'
import { Menu ,Icon,Tooltip,Input} from 'antd';
import {menuArr} from '../config/menu'
import Link from 'umi/link';
import './index.less'
export default function LeftMenu() {
  let timer = null
  const [Menus, setMenus] = useState([...menuArr])
    return (
      <div style={{position:'relative'}}>
        <div className="search-inp" style ={{
          display:'flex',
          alignItems:'center',
          justifyContent:'space-around',
          margin:'10px 0',
          color:'#fff'}}>
          关键词搜索: <Input style={{width:100}}
            onChange = {(e)=>{
              let val = e.target.value;
              clearTimeout(timer)
              timer = setTimeout(() => {
                let reg =new RegExp(val.split(' ').join('|'))
                if(val==''){
                  setMenus([...menuArr])
                }else{
                  let newMenu = menuArr.filter(el=>{
                    let flag = reg.test(el.title) 
                    return  flag
                  });
                  console.log(newMenu);
                  setMenus(newMenu)
                }
              }, 500);
              

            }}
          />
        </div>
        
        <Menu theme="dark" mode="inline"  className='scroll-box' style={{height:'90vh',overflow:'auto'}}>
        <Menu.Item key={-1} >
        <Link to={'/DirectoryOverview'} style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}} >
        <Icon type="menu" /> {'目录概述'}
        </Link>
        </Menu.Item>
        {Menus.map((el,i)=>{
          return <Menu.Item key={i} >
            <Tooltip  title = {el.title} placement="right">
            <Link to={el.url} style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}} >
            <Icon type="user" />  {el.title}
            </Link>
            </Tooltip>
            </Menu.Item>
        })}
      </Menu>
      </div>
    )
}
