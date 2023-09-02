import { Button, Layout, Dropdown, Typography, List } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { FaRegBell } from 'react-icons/fa'
const { Header } = Layout

const data = [
  {
    title: "New message from Sophie",
    description: <> 2 days ago</>,
  },
  {
    title: "New album by Travis Scott",
    description: <> 2 days ago</>,
  },
  {
    title: "Payment completed",
    description: <> 2 days ago</>,
  },
];

const menu = (
  <List
    min-width="100%"
    style={{background: '#fff'}}
    className="header-profile-dropdown"
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <p>dshghsd</p>
      </List.Item>
    )}
  />
);

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
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaRegBell size={20} style={{ marginRight: 18 }} />
        <Dropdown overlay={menu} placement="bottomRight">
          <img
            alt="profile"
            width={40}
            style={{ borderRadius: 50 }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Dropdown>
      </div>
    </Header>
  )
}

export default PageHeader
