import { Button, Layout } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
const { Header } = Layout

const PageHeader = ({ themeToken, setCollapsed, collapsed }) => {
  return (
    <Header
      style={{
        padding: 0,
        background: themeToken?.colorBgContainer
      }}
    >
      <Button
        type="button"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64
        }}
      />
    </Header>
  )
}

export default PageHeader
