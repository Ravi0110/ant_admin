import { Button, Card, Col, Row, Typography, theme } from 'antd'
import { FaLevelUpAlt, FaUserAlt, FaLevelDownAlt, FaDollarSign, FaSortAmountUp, FaSortAmountDown, FaSignal } from 'react-icons/fa'

const Dashboard = () => {
  const { token } = theme.useToken()
  return (
    <>
      <div style={{ backgroundColor: token?.colorBgContainer }}>
        <Typography.Title level={1} style={{ marginBottom: 50 }}>
          Dashboard
        </Typography.Title>
        <Row justify="space-between">
          <Col span={4}>
            <Card style={{ backgroundColor: token?.colorBgBase, height: 185 }}>
              <div
                className="imgBox"
                style={{ backgroundColor: token?.colorFill }}
              >
                <FaSortAmountUp />
              </div>
              <Typography.Title
                level={4}
                style={{ marginTop: 10, marginBottom: 0 }}
              >
                Income <FaLevelUpAlt size={12} color="green" />
              </Typography.Title>
              <Typography.Text type="secondary">Aug 2, 2013</Typography.Text>
              <Typography.Title level={2}>$ 12,000</Typography.Title>
            </Card>
          </Col>
          <Col span={4}>
            <Card style={{ backgroundColor: token?.colorBgBase, height: 185 }}>
              <div
                className="imgBox"
                style={{ backgroundColor: token?.colorFill }}
              >
                <FaSortAmountDown />
              </div>
              <Typography.Title
                level={4}
                style={{ marginTop: 10, marginBottom: 0 }}
              >
                Expenses <FaLevelDownAlt size={12} color="red" />
              </Typography.Title>
              <Typography.Text type="secondary">Aug 2, 2013</Typography.Text>
              <Typography.Title level={2}>$ 1,000</Typography.Title>
            </Card>
          </Col>
          <Col span={4}>
            <Card style={{ backgroundColor: token?.colorBgBase, height: 185 }}>
              <div
                className="imgBox"
                style={{ backgroundColor: token?.colorFill }}
              >
                <FaDollarSign />
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
          <Col span={4}>
            <Card style={{ backgroundColor: token?.colorBgBase, height: 185 }}>
              <div
                className="imgBox"
                style={{ backgroundColor: token?.colorFill }}
              >
                <FaSignal />
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
          <Col span={4}>
            <Card style={{ backgroundColor: token?.colorBgBase, height: 185 }}>
              <div
                className="imgBox"
                style={{ backgroundColor: token?.colorFill }}
              >
                <FaUserAlt />
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
        <Button type="primary" style={{ marginTop: 50 }}>
          Primary Button
        </Button>
      </div>
    </>
  )
}

export default Dashboard
