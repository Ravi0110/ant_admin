import React from 'react'
import { Space, Table, Tag, Typography, theme } from 'antd'
import { FormOutlined, DeleteOutlined } from '@ant-design/icons'

const columns = (token) => {
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Typography.Link>{text}</Typography.Link>
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: [
        {
          text: 'London',
          value: 'London'
        },
        {
          text: 'New York',
          value: 'New York'
        }
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <FormOutlined style={{ fontSize: 18, color: token?.colorPrimary }} />
          <DeleteOutlined style={{ fontSize: 18, color: token?.colorError }} />
        </Space>
      )
    }
  ]
}

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

const Tables = () => {
  const { token } = theme.useToken()

  return (
    <>
      <Typography.Title level={1} style={{ marginBottom: 50 }}>
        Basic Table
      </Typography.Title>
      <Table columns={columns(token)} dataSource={data} rowSelection={true} />
    </>
  )
}

export default Tables
