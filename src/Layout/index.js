import React, { useState } from 'react'
import { Layout, theme } from 'antd'
import SideBar from './sidebar'
import Header from './header'
import Footer from './footer'
import Router from '../routes/router'

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

        {/* page content */}
        <Content style={{ padding: '0 40px', backgroundColor: token?.colorBgContainer }}>
          <Router />
        </Content>

        {/* Footer component */}
        <Footer themeToken={token}/>
      </Layout>
    </Layout>
  )
}
export default PageLayout
