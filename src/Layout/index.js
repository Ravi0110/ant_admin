import React, { useState } from 'react'
import { Layout, theme } from 'antd'
import SideBar from './sidebar'
import Header from './header'
import Footer from './footer'
import Router from '../routes/router'
import { PageRoutes } from '../routes'
import { useLocation } from 'react-router-dom'

const { Content } = Layout

const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()
  const { token } = theme.useToken()

  // get blank layouts
  const BlankLayoutFilter = PageRoutes.filter(
    (f) => f?.layout === 'BlankLayout'
  )
  const BlankLayout = BlankLayoutFilter.map((f) => f?.path)

  return (
    <Layout
      style={{
        minHeight: '100vh'
      }}
    >
      {/* sidebar component */}
      {!BlankLayout.includes(location?.pathname) && (
        <SideBar themeToken={token} collapsed={collapsed} />
      )}

      <Layout>
        {/* header component */}
        {!BlankLayout.includes(location?.pathname) && (
          <Header
            themeToken={token}
            setCollapsed={setCollapsed}
            collapsed={collapsed}
          />
        )}

        {/* page content */}
        <Content
          style={{
            padding: '0 40px',
            backgroundColor: token?.colorBgContainer
          }}
        >
          <Router />
        </Content>

        {/* Footer component */}
        {!BlankLayout.includes(location?.pathname) && <Footer themeToken={token} /> }
      </Layout>
    </Layout>
  )
}
export default PageLayout
