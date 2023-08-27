import { Layout, Menu, Typography } from 'antd'
import {
  HomeFilled,
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined
} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

const { Sider } = Layout

const generateMenuItems = (menuItems) => {
  return menuItems.map(item => {
    if (item.children) {
      return (
        <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
          {generateMenuItems(item.children)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={item.key} icon={item.icon}>
        <NavLink to={item.link} >
          {item.label}
        </NavLink>
      </Menu.Item>
    );
  });
};

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
      icon: <PieChartOutlined />,
      label: 'nav 2',
      children: [
        {
          key: '2.1',
          icon: <UserOutlined />,
          label: 'nav 1',
          link: '/nav222',
          children: [
            {
              key: '2.1.1',
              icon: <UserOutlined />,
              label: 'nav 1',
              link: '/nav23'
            },
            {
              key: '2.2.2',
              icon: <UserOutlined />,
              label: 'nav 1',
              link: '/nav24'
            },
            {
              key: '2.3.3',
              icon: <UserOutlined />,
              label: 'nav 1',
              link: '/nav25'
            }
          ]
        },
        {
          key: '2.2',
          icon: <UserOutlined />,
          label: 'nav 1',
          link: '/nav4'
        },
        {
          key: '2.3',
          icon: <UserOutlined />,
          label: 'nav 1',
          link: '/nav5'
        }
      ]
    },
    {
      key: '3',
      icon: <DesktopOutlined />,
      label: 'nav 3',
      link: '/nav1'
    }
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={270}
      style={{ backgroundColor: themeToken?.colorBgContainer, borderRight: `1px solid ${themeToken?.colorBorder}` }}
    >
      <div className="demo-logo-vertical">
        <Typography.Title level={2}>Logo</Typography.Title>
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        style={{ padding: '0 10px', border: 0}}
      >
        {generateMenuItems(SIDEBARMENU)}
      </Menu>
    </Sider>
  )
}

export default SideBar
