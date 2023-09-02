import { Layout, Menu, Typography } from 'antd'
import {
  HomeFilled,
  ProfileFilled,
  DatabaseFilled,
  FolderOpenFilled
} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import { FaCircle } from 'react-icons/fa'

const { Sider } = Layout

const generateMenuItems = (menuItems) => {
  return menuItems.map((item) => {
    if (item.children) {
      return (
        <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
          {generateMenuItems(item.children)}
        </Menu.SubMenu>
      )
    }
    return (
      <Menu.Item key={item.key} icon={item.icon}>
        <NavLink to={item.link}>{item.label}</NavLink>
      </Menu.Item>
    )
  })
}

const SideBar = ({ themeToken, collapsed }) => {
  const SIDEBARMENU = [
    {
      key: '1',
      icon: <HomeFilled />,
      label: 'Dashboard',
      link: '/dashboard'
    },
    {
      key: '2',
      icon: <DatabaseFilled />,
      label: 'Tables',
      link: '/tables'
    },
    {
      key: '3',
      icon: <ProfileFilled />,
      label: 'Forms',
      link: '/forms'
    },
    {
      key: '4',
      icon: <FolderOpenFilled />,
      label: 'Components',
      children: [
        {
          key: '2.1',
          icon: <FaCircle size={10}/>,
          label: 'Alert',
          link: '/alert'
        },
        {
          key: '2.2',
          icon: <FaCircle size={10}/>,
          label: 'Drawer',
          link: '/drawer'
        },
        {
          key: '2.3',
          icon: <FaCircle size={10}/>,
          label: 'Message',
          link: '/message'
        },
        {
          key: '2.4',
          icon: <FaCircle size={10}/>,
          label: 'Modal',
          link: '/modal'
        }
      ]
    }
  ]

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={270}
      style={{
        backgroundColor: themeToken?.colorBgContainer,
        borderRight: `1px solid ${themeToken?.colorBorder}`
      }}
    >
      <div className="demo-logo-vertical">
        <Typography.Title level={2}>Logo</Typography.Title>
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        style={{ padding: '0 10px', border: 0 }}
      >
        {generateMenuItems(SIDEBARMENU)}
      </Menu>
    </Sider>
  )
}

export default SideBar
