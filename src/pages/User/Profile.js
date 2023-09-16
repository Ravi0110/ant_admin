import React from 'react'
import { Tabs, Layout, theme, Typography, Row, Divider, Form, Input, Button } from 'antd'
import { FiUser, FiKey, FiLogOut } from 'react-icons/fi'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

const ProfileDetail = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        alt="profile"
        width={100}
        style={{ borderRadius: 50 }}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <Typography.Title level={4} style={{ marginTop: 10, marginBottom: 0 }}>
        Ravi Kansagara
      </Typography.Title>
      <Typography.Text type="secondary">
        ravikansagra1@gmail.com
      </Typography.Text>
    </div>
  )
}

const Tab1 = ({ token }) => {
  return (
    <>
      <Title level={2}>Personal Informations</Title>
      <Paragraph type="secondary" style={{ maxWidth: '65%' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        sodales sit amet nunc et vehicula. Mauris sed lectus nisi.
      </Paragraph>
      <Divider style={{ border: `0.8px solid ${token?.colorBorder}` }} />
      <Title level={2}>About</Title>
      <Paragraph type="secondary" style={{ maxWidth: '65%' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        sodales sit amet nunc et vehicula. Mauris sed lectus nisi. Suspendisse
        velit mi, pretium non euismod vitae Suspendisse velit mi, pretium non
        euismod vitae
      </Paragraph>
      <Divider style={{ border: `0.8px solid ${token?.colorBorder}` }} />
      <Title level={2}>Contact</Title>
      <Row style={{ marginTop: 12 }}>
        <Text type="secondary" style={{ minWidth: 150 }}>
          Full Name
        </Text>
        <Text>Ravi Kansagara</Text>
      </Row>
      <Row style={{ marginTop: 12 }}>
        <Text type="secondary" style={{ minWidth: 150 }}>
          Display Name
        </Text>
        <Text>Ravi</Text>
      </Row>
      <Row style={{ marginTop: 12 }}>
        <Text type="secondary" style={{ minWidth: 150 }}>
          Email
        </Text>
        <Text>ravikansagra1@gmail.com</Text>
      </Row>
      <Row style={{ marginTop: 12 }}>
        <Text type="secondary" style={{ minWidth: 150 }}>
          Phone
        </Text>
        <Text>7202842980</Text>
      </Row>
      <Row style={{ marginTop: 12 }}>
        <Text type="secondary" style={{ minWidth: 150 }}>
          Date Of Birth
        </Text>
        <Text>01/10/2000</Text>
      </Row>
    </>
  )
}

const Tab2 = ({token}) => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <Title level={2}>Change Password</Title>
      <Text type="secondary">
        Set a unique password to protect your account.
      </Text>
      <Divider style={{ border: `0.8px solid ${token?.colorBorder}` }} />
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        className="row-col"
        style={{width: '40%'}}
      >
        <Form.Item
          className="oldpassword"
          label="Old Password"
          name="old_password"
          rules={[
            {
              required: true,
              message: 'Please input your old password!'
            }
          ]}
        >
          <Input placeholder="Old Password" />
        </Form.Item>

        <Form.Item
          className="new password"
          label="New Password"
          name="new_password"
          rules={[
            {
              required: true,
              message: 'Please input your new password!'
            }
          ]}
        >
          <Input placeholder="New Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%', marginTop: 20 }}>
            Change Password
          </Button>
        </Form.Item>

      </Form>
    </>
  )
}

const UserProfile = () => {
  const { token } = theme.useToken()

  return (
    <>
      <Typography.Title level={1} style={{ marginBottom: 50 }}>
        My Profile
      </Typography.Title>
      <Content
        style={{
          backgroundColor: token?.colorBgBase,
          padding: "40px 40px 40px 0",
          borderRadius: 10
        }}
      >
        <Tabs
          tabPosition={'left'}
          defaultActiveKey="2"
          items={[
            {
              label: <ProfileDetail />,
              key: '1',
              children: '',
              disabled: true
            },
            {
              label: (
                <Row align={'middle'}>
                  <FiUser size={20} style={{ marginRight: 10 }} /> Personal
                  Information
                </Row>
              ),
              key: '2',
              children: <Tab1 token={token} />
            },
            {
              label: (
                <Row align={'middle'}>
                  <FiKey size={20} style={{ marginRight: 10 }} /> Change
                  Password
                </Row>
              ),
              key: '3',
              children: <Tab2 token={token}/>
            },
            {
              label: (
                <Row align={'middle'}>
                  <FiLogOut size={20} style={{ marginRight: 10 }} /> Log Out{' '}
                </Row>
              ),
              key: '4',
              children: ''
            }
          ]}
        />
      </Content>
    </>
  )
}
export default UserProfile
