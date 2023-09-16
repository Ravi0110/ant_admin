import { Card, Col, Row, Typography, theme } from 'antd'
import {FiTrendingUp, FiTrendingDown, FiDollarSign, FiBarChart, FiUser} from 'react-icons/fi'
import LineChart from '../components/charts/LineChart'

const Dashboard = () => {
  const { token } = theme.useToken()
  return (
    <>
      <div style={{ backgroundColor: token?.colorBgContainer }}>
        <Typography.Title level={1} style={{ marginBottom: 50 }}>
          Dashboard
        </Typography.Title>
        <Row justify={'space-between'}>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 4 }}
            md={{ span: 4 }}
            sm={{ span: 24 }}
          >
            <Card style={{ backgroundColor: token?.colorBgBase, height: 200 }}>
              <div
                className="imgBox"
                style={{ backgroundColor: token?.colorFill }}
              >
                <FiTrendingUp />
              </div>
              <Typography.Title
                level={4}
                style={{ marginTop: 10, marginBottom: 0 }}
              >
                Income <FiTrendingUp size={12} color="green" />
              </Typography.Title>
              <Typography.Text type="secondary">Aug 2, 2013</Typography.Text>
              <Typography.Title level={2}>$ 12,000</Typography.Title>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 4 }}
            md={{ span: 4 }}
            sm={{ span: 24 }}
          >
            <Card style={{ backgroundColor: token?.colorBgBase, height: 200 }}>
              <div
                className="imgBox"
                style={{ backgroundColor: token?.colorFill }}
              >
                <FiTrendingDown />
              </div>
              <Typography.Title
                level={4}
                style={{ marginTop: 10, marginBottom: 0 }}
              >
                Expenses <FiTrendingDown size={12} color="red" />
              </Typography.Title>
              <Typography.Text type="secondary">Aug 2, 2013</Typography.Text>
              <Typography.Title level={2}>$ 1,000</Typography.Title>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 4 }}
            md={{ span: 4 }}
            sm={{ span: 24 }}
          >
            <Card style={{ backgroundColor: token?.colorBgBase, height: 200 }}>
              <div
                className="imgBox"
                style={{ backgroundColor: token?.colorFill }}
              >
                <FiDollarSign />
              </div>
              <Typography.Title
                level={4}
                style={{ marginTop: 10, marginBottom: 0 }}
              >
                Balance
              </Typography.Title>
              <Typography.Text type="secondary">Aug 2, 2013</Typography.Text>
              <Typography.Title level={2}>$ 10,000</Typography.Title>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 4 }}
            md={{ span: 4 }}
            sm={{ span: 24 }}
          >
            <Card style={{ backgroundColor: token?.colorBgBase, height: 200 }}>
              <div
                className="imgBox"
                style={{ backgroundColor: token?.colorFill }}
              >
                <FiBarChart />
              </div>
              <Typography.Title
                level={4}
                style={{ marginTop: 10, marginBottom: 0 }}
              >
                Total
              </Typography.Title>
              <Typography.Text type="secondary">Aug 2, 2013</Typography.Text>
              <Typography.Title level={2}>$ 50,000</Typography.Title>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 4 }}
            md={{ span: 4 }}
            sm={{ span: 24 }}
          >
            <Card style={{ backgroundColor: token?.colorBgBase, height: 200 }}>
              <div
                className="imgBox"
                style={{ backgroundColor: token?.colorFill }}
              >
                <FiUser />
              </div>
              <Typography.Title
                level={4}
                style={{ marginTop: 10, marginBottom: 0 }}
              >
                Users
              </Typography.Title>
              <Typography.Text type="secondary">Aug 2, 2013</Typography.Text>
              <Typography.Title level={2}>15,000</Typography.Title>
            </Card>
          </Col>
        </Row>
        <Row gutter={40} style={{ marginTop: 50 }}>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 16 }}
            md={{ span: 16 }}
            sm={{ span: 24 }}
          >
            <LineChart />
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 8 }}
            md={{ span: 8 }}
            sm={{ span: 24 }}
          >
            <Typography.Title level={3}>Recent Activity</Typography.Title>
            <Typography.Text type="secondary">05 Dec 2021</Typography.Text>

            <Card style={{ marginTop: 20 }} size='small'>
              <Row justify={'space-between'}>
                <Row>
                  <div
                    className="imgBox"
                    style={{ backgroundColor: token?.colorFill }}
                  >
                    <FiDollarSign />
                  </div>
                  <div style={{ marginLeft: 20 }}>
                    <Typography.Title
                      level={4}
                      style={{ marginTop: 0, marginBottom: 0 }}
                    >
                      Balance
                    </Typography.Title>
                    <Typography.Text type="secondary" style={{ marginTop: 0 }}>
                      Aug 2, 2013
                    </Typography.Text>
                  </div>
                </Row>
                <Typography.Title level={5}>$ 10,000</Typography.Title>
              </Row>
            </Card>
            <Card style={{ marginTop: 20 }} size='small'>
              <Row justify={'space-between'}>
                <Row>
                  <div
                    className="imgBox"
                    style={{ backgroundColor: token?.colorFill }}
                  >
                    <FiDollarSign />
                  </div>
                  <div style={{ marginLeft: 20 }}>
                    <Typography.Title
                      level={4}
                      style={{ marginTop: 0, marginBottom: 0 }}
                    >
                      Balance
                    </Typography.Title>
                    <Typography.Text type="secondary" style={{ marginTop: 0 }}>
                      Aug 2, 2013
                    </Typography.Text>
                  </div>
                </Row>
                <Typography.Title level={5}>$ 10,000</Typography.Title>
              </Row>
            </Card>
            <Card style={{ marginTop: 20 }} size='small'>
              <Row justify={'space-between'}>
                <Row>
                  <div
                    className="imgBox"
                    style={{ backgroundColor: token?.colorFill }}
                  >
                    <FiDollarSign />
                  </div>
                  <div style={{ marginLeft: 20 }}>
                    <Typography.Title
                      level={4}
                      style={{ marginTop: 0, marginBottom: 0 }}
                    >
                      Balance
                    </Typography.Title>
                    <Typography.Text type="secondary" style={{ marginTop: 0 }}>
                      Aug 2, 2013
                    </Typography.Text>
                  </div>
                </Row>
                <Typography.Title level={5}>$ 10,000</Typography.Title>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Dashboard
