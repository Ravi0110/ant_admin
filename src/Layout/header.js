import { Button, Image, Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { FaRegBell } from 'react-icons/fa'
const { Header } = Layout

const PageHeader = ({ themeToken, setCollapsed, collapsed }) => {
  return (
    <Header
      style={{
        padding: '0 40px',
        background: themeToken?.colorBgContainer,
        borderBottom: `1px solid ${themeToken?.colorBorder}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Button
        type="button"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
      />
      <div style={{display: 'flex', alignItems: 'center'}}>
        <FaRegBell size={20} style={{marginRight: 18}}/>
        <Image
          width={40}
          style={{borderRadius: 50}}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </div>
    </Header>
  )
}

export default PageHeader
