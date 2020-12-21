import React from 'react'
import { Layout} from 'antd';
import LeftMenu from '../components/leftMenu.jsx'

const { Header, Content, Footer, Sider } = Layout;


export default function Index(props) {
    return (
        <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
        <LeftMenu/>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Content style={{ margin: '0px 16px 0', overflow: 'auto' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                {props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    )
}
