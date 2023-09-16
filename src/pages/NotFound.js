import { Button, Row, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import NotFoundImg from '../assets/images/404.svg'

const NotFound = () => {
  const history = useNavigate()
  return (
    <Row justify={'center'} align={'middle'}>
      <div style={{textAlign: 'center'}}>
        <img src={NotFoundImg} alt="404" width={380} />
        <Typography.Paragraph style={{ fontSize: 100, margin: 0 }}>
          404
        </Typography.Paragraph>
        <Button type='primary' onClick={() => history(-1)}>Go Back</Button>
      </div>
    </Row>
  )
}

export default NotFound
