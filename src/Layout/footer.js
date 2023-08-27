import { Layout } from 'antd'
const { Footer } = Layout;

const PageFooter = ({themeToken}) => {
  return (
    <Footer
      style={{
        textAlign: 'center',
        backgroundColor: themeToken?.colorBgContainer
      }}
    >
      Ant Design ©2023 Created by Ant UED
    </Footer>
  )
}

export default PageFooter
