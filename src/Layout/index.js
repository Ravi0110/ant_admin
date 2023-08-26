import React, { useState } from 'react'
import { Layout, theme, Breadcrumb } from 'antd'
import SideBar from './sidebar'
import Header from './header'
import Footer from './footer'

const { Content } = Layout

const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(false)

  const { token } = theme.useToken()

  return (
    <Layout
      style={{
        minHeight: '100vh'
      }}
    >
      {/* sidebar component */}
      <SideBar themeToken={token} collapsed={collapsed}/>

      <Layout>
        {/* header component */}
        <Header themeToken={token} setCollapsed={setCollapsed} collapsed={collapsed}/>

        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: token?.colorBgContainer
            }}
          >
            Bill is a cat.
          </div>
        </Content>

        {/* Footer component */}
        <Footer />
      </Layout>
    </Layout>
  )
}
export default PageLayout
