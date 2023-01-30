import React from 'react'
import { Button, Layout, Space, Typography } from 'antd'
import WidgetPanel from '../components/WidgetPanel'

const { Header, Sider, Content } = Layout
const { Title } = Typography

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
          <Sider width="302" className='bg-white'>
            <WidgetPanel />
          </Sider>
          <Content>Content</Content>
          <Sider width="302">Sider</Sider>
        </Layout>
      </Layout>
    </div>
  )
}
