import React, { useState } from 'react'
import { Button, Drawer, Typography } from 'antd'
const DrawerComp = () => {
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Typography.Title level={1} style={{ marginBottom: 50 }}>
        Drawer
      </Typography.Title>
      <Button type="primary" onClick={showDrawer}>
        Basic Drower Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}
export default DrawerComp
