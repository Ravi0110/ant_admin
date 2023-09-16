import { Button, Layout, Dropdown, Typography, Divider, Row } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import {
  FiBell,
  FiUserCheck,
  FiSettings,
  FiLogOut,
  FiSun,
  FiMoon
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleThemeChange } from '../redux/actions/themeAction'
const { Header } = Layout
const { Title } = Typography

const items = [
  {
    key: '1',
    type: 'group',
    label: (
      <>
        <Title level={4} style={{ marginTop: 5 }}>
          Profile Settings
        </Title>
        <Divider style={{ margin: 5 }} />
      </>
    )
  },
  {
    key: '2',
    label: (
      <Link to="/profile">
        <Row align={'middle'}>
          <FiUserCheck size={20} style={{ marginRight: 10 }} /> View Profile
        </Row>
      </Link>
    )
  },
  {
    key: '3',
    label: (
      <Link to="/profile">
        <Row align={'middle'}>
          <FiSettings size={20} style={{ marginRight: 10 }} /> Account Setting
        </Row>
      </Link>
    )
  },
  {
    key: '4',
    label: (
      <Link to="/login">
        <Row align={'middle'}>
          <FiLogOut size={20} style={{ marginRight: 10 }} />
          Log Out
        </Row>
      </Link>
    )
  }
]

const PageHeader = ({ themeToken, setCollapsed, collapsed }) => {
  const dispatch = useDispatch()
  const { isDark } = useSelector((state) => state?.theme)
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
        {isDark ? (
          <FiMoon
            size={20}
            style={{ marginRight: 18, cursor: 'pointer' }}
            onClick={() => dispatch(handleThemeChange())}
          />
        ) : (
          <FiSun
            size={20}
            style={{ marginRight: 18, cursor: 'pointer' }}
            onClick={() => dispatch(handleThemeChange())}
          />
        )}
        <FiBell size={20} style={{ marginRight: 18 }} />
        <Dropdown
          menu={{
            items
          }}
          overlayStyle={{ width: 250 }}
        >
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
