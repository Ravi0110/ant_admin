import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import {FiHome, FiGrid, FiFileText, FiFolder, FiCircle} from 'react-icons/fi'
import LogoBig from '../assets/images/dashboard_logo_full.png'
import LogoSmall from '../assets/images/dashboard_logo_small.png'

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
      icon: <FiHome />,
      label: 'Dashboard',
      link: '/dashboard'
    },
    {
      key: '2',
      icon: <FiGrid />,
      label: 'Tables',
      link: '/tables'
    },
    {
      key: '3',
      icon: <FiFileText />,
      label: 'Forms',
      link: '/forms'
    },
    {
      key: '4',
      icon: <FiFolder />,
      label: 'Components',
      children: [
        {
          key: '2.1',
          icon: <FiCircle size={10}/>,
          label: 'Alert',
          link: '/alert'
        },
        {
          key: '2.2',
          icon: <FiCircle size={10}/>,
          label: 'Drawer',
          link: '/drawer'
        },
        {
          key: '2.3',
          icon: <FiCircle size={10}/>,
          label: 'Message',
          link: '/message'
        },
        {
          key: '2.4',
          icon: <FiCircle size={10}/>,
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
        <img alt="logo" src={collapsed ? LogoSmall : LogoBig } width={collapsed ? 50 : 250} style={{margin: 10}}/>
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
