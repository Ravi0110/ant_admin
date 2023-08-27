import { BrowserRouter } from 'react-router-dom'
import PageLayout from './Layout'
import { ConfigProvider, theme } from 'antd'
import { useState } from 'react'

const { defaultAlgorithm, darkAlgorithm } = theme

function App() {

  const [isDark, setisDark] = useState(false)
  return (
    <ConfigProvider
      theme={{
        components:{
          Menu:{
            itemSelectedBg: isDark ? '#141414' : '#fff',
            itemSelectedColor: isDark ? '#fff' : '#000',
            itemColor: isDark ? '#c5c5c5' : '#393939' ,
            itemActiveBg: 'rgba(0, 0, 0, 0.06)',
            itemBorderRadius: 5,
            fontSize: 16
          },
          Breadcrumb:{
            fontSize: 16
          },
          Card:{
            borderRadiusLG: 20
          },
          Typography:{
            colorTextSecondary: '#dfe6e9',
            titleMarginBottom: 10,
            titleMarginTop: 10
          }
        },
        token:{
          colorBorder: isDark ? '#333333' : '#dfe6e9',
          fontFamily: "'Poppins', sans-serif",
          colorBgContainer: isDark ? '#1f1f1f' : '#f0f3f5',
          colorBgBase: isDark ? '#141414' : '#fff',
          colorFill: isDark ? '#333' : '#dfe6e9',
          colorPrimary: '#0010f7',
          colorPrimaryBg: '#0010f7',
          colorPrimaryBgHover: 'rgba(0, 16, 247, 0.4)',
        },
        algorithm: isDark ? darkAlgorithm : defaultAlgorithm
      }}
    >
      <BrowserRouter>
        <PageLayout />
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
