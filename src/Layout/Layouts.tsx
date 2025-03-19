import React from 'react';
import { Layout, Menu, theme, Space } from 'antd';
import { HomeOutlined, SoundOutlined, SwitcherOutlined }  from '@ant-design/icons'
import './Layouts.css';

const { Header, Content, Sider } = Layout;

const nvaConfig = [
  {
    key: 'homePage',
    icon: <HomeOutlined />,
    label: '首页'
  },
  {
    key: 'homePage1',
    icon: <SoundOutlined />,
    label: '每日AI最新咨询聚合'
  },
  {
    key: 'homePage2',
    icon: <SoundOutlined />,
    label: '文章博客'
  },
  {
    key: 'homePage3',
    icon: <SoundOutlined />,
    label: '豆包免费助手'
  },
  {
    key: 'more',
    icon: <SwitcherOutlined />,
    label: '更多'
  },
]

const siderConfig = [
  {
    key: '1',
    label: 'AI对话工具'
  },
  {
    key: '2',
    label: 'AI绘画工具'
  },
  {
    key: '3',
    label: 'AI视频工具'
  },
  {
    key: '4',
    label: 'AI图片处理'
  },
]

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className='container'>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={nvaConfig}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={siderConfig}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            主页面
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;