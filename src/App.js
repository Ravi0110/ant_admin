import { BrowserRouter } from 'react-router-dom'
import PageLayout from './Layout'
import { ConfigProvider, theme } from 'antd'

const { defaultAlgorithm, darkAlgorithm } = theme

function App() {
  return (
    <ConfigProvider
      theme={{
        components:{
          Menu:{
            itemSelectedBg: '#1890ff',
            itemSelectedColor: 'inherit',
            fontSize: 18
          },
        },
        algorithm: false ? darkAlgorithm : defaultAlgorithm
      }}
    >
      <BrowserRouter>
        <PageLayout />
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
