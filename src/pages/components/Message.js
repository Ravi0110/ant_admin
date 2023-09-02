import React from 'react'
import { Button, Space, Typography, message } from 'antd'

const Message = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const info = () => {
    messageApi.info('Hello, Ant Design!')
  }
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message'
    })
  }

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message'
    })
  }

  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'This is a warning message'
    })
  }
  return (
    <>
      <Typography.Title level={1} style={{ marginBottom: 50 }}>
        Messages
      </Typography.Title>
      {contextHolder}
      <Space>
        <Button type="primary" onClick={info}>
          Display normal message
        </Button>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </Space>
    </>
  )
}
export default Message
