import {
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Layout
} from 'antd'
import { Link } from 'react-router-dom'
import signupbg from '../../assets/images/signup.svg'

const { Title } = Typography
const { Content } = Layout

const SignUp = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Content>
      <Row gutter={[24, 0]} align={'middle'}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }} md={{ span: 12 }}>
          <img src={signupbg} alt="" />
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }}
          lg={{ span: 6, offset: 2 }}
          md={{ span: 12 }}
        >
          <Title className="mb-15">Create Account</Title>
          <Title
            type="secondary"
            style={{ width: 'max-content', marginBottom: 30 }}
            level={5}
          >
            Please sign up to your personal account.
          </Title>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            className="row-col"
          >
            <Form.Item
              className="username"
              label="User Name"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your user name!'
                }
              ]}
            >
              <Input placeholder="user name" />
            </Form.Item>

            <Form.Item
              className="userEmail"
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

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%', marginTop: 15 }}
              >
                SIGN UP
              </Button>
            </Form.Item>
            <p
              className="font-semibold text-muted"
              style={{ textAlign: 'center' }}
            >
              Already have an account?
              <Link to="/login" className="text-dark font-bold">
                Sign In
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Content>
  )
}

export default SignUp
