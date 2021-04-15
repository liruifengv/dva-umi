import React from 'react'
import { Layout, Menu } from 'antd'
import PropTypes from 'prop-types'
import { useHistory } from 'umi';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MailOutlined
} from '@ant-design/icons'

const { SubMenu } = Menu
const { Sider, Content } = Layout

const BasicLayout = (props) => {
  const history = useHistory()
  // 菜单点击，跳转路由
  const clickMenu = ({ key }) => {
    history.push(key)
  }

  return (
    <Layout>
      <Sider width={256} style={{ minHeight: '100vh' }} collapsible>
        <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }}/>
        <Menu theme="dark"
          mode="inline"
          defaultSelectedKeys={['/']}
          selectedKeys={[history.location.pathname]}
          onClick={clickMenu}
        >
          <Menu.Item key="/" icon={<UserOutlined />}>Home</Menu.Item>
          <Menu.Item key="/products" icon={<VideoCameraOutlined />}>Products</Menu.Item>
          <SubMenu key="/test" icon={<MailOutlined />} title="test">
            <Menu.Item key="/test/list">list</Menu.Item>
            <Menu.Item key="/test/detail">detail</Menu.Item>
          </SubMenu>
          <Menu.Item key="/posts" icon={<UploadOutlined />}>post</Menu.Item>
        </Menu>
      </Sider>
      <Layout >
        <Content>
          <div style={{ padding: 24, background: '#f0f2f5', minHeight: 360 }}>
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default BasicLayout;