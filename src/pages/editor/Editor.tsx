import React, { useState } from 'react'
import { Button, Layout, Space, Typography } from 'antd'
import WidgetPanel from '@/components/widgetPanel/WidgetPanel'
import EmailPanel from '@/components/emailPanel/EmailPanel'
import DesignPanel from '@/components/designPanel/DesignPanel'
import { createDesigner } from '@/pages/editor/designer'
import type { Designer } from '@/types/editor'

const { Header, Sider, Content } = Layout
const { Title } = Typography

export default function Editor() {
  const [designer, setDesigner] = useState<Designer>(createDesigner())

  console.log('designer', designer)

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
          <Sider width="302" className="bg-white">
            <WidgetPanel designer={designer} />
          </Sider>
          <Content>
            <EmailPanel designer={designer} />
          </Content>
          <Sider width="302">
            <DesignPanel />
          </Sider>
        </Layout>
      </Layout>
    </div>
  )
}
