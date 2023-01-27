import React from 'react'
import { Button, Layout, Space, Typography } from 'antd'

const { Header, Sider, Content } = Layout
const { Title } = Typography

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
}

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
}

export default function Editor() {
  return (
    <div className="h-screen">
      <Layout className="h-screen">
        <Header className="bg-white">
          <Space className="flex justify-between" align="center">
            <Space>
              <Title className="m-0" level={3}>Email Editor</Title>
            </Space>
          <Space>
            <Button>Export MJML</Button>
            <Button>Export MJML</Button>
            <Button>Send test email</Button>
            <Button type="primary">Export MJML</Button>
          </Space>
          </Space>
        </Header>
        <Layout>
          <Sider width="302" style={siderStyle}>Sider</Sider>
          <Content style={contentStyle}>Content</Content>
          <Sider width="302" style={siderStyle}>Sider</Sider>
        </Layout>
      </Layout>
    </div>
  )
}
