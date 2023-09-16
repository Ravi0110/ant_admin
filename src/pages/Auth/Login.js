import {
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Layout,
  Checkbox
} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import signinbg from '../../assets/images/signin.svg'

const { Title, Text } = Typography
const { Content } = Layout

const Login = () => {

  const history = useNavigate()

  const onFinish = (values) => {
    console.log('Success:', values)
    history('/dashboard')
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Content>
      <Row gutter={[24, 0]} align={'middle'}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }} md={{ span: 12 }}>
          <img src={signinbg} alt="" />
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }}
          lg={{ span: 6, offset: 2 }}
          md={{ span: 12 }}
        >
          <Title className="mb-15">Login</Title>
          <Title
            type="secondary"
            style={{ width: 'max-content', marginBottom: 30 }}
            level={5}
          >
            Welcome back, please login to your account.
          </Title>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            className="row-col"
          >
            <Form.Item
              className="username"
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!'
                }
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              className="username"
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]}
            >
              <Input placeholder="Password" />
            </Form.Item>

            <Row justify={'space-between'} align={'middle'}>
              <Form.Item name="disabled" valuePropName="checked">
                <Checkbox defaultChecked={true}>Remember me</Checkbox>
              </Form.Item>

              <Text type="secondary" style={{ marginBottom: 24 }}>
                Forgot Password ?
              </Text>
            </Row>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
              >
                SIGN IN
              </Button>
            </Form.Item>
            <p
              className="font-semibold text-muted"
              style={{ textAlign: 'center' }}
            >
              Don't have an account?{' '}
              <Link to="/sign-up" className="text-dark font-bold">
                Sign Up
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Content>
  )
}

export default Login
