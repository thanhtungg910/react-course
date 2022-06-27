import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    QuestionCircleOutlined,
    HomeOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import PlayerControl from '../../components/PlayerControl';
import MainHeader from '../components/Header';
import SideBar from '../components/SideBar';

const { Content } = Layout;

const MENU = [
    {
        key: '/',
        icon: <HomeOutlined />,
        label: 'Home',
    },
    {
        key: '/trends',
        icon: <VideoCameraOutlined />,
        label: 'Trend',
    },
    {
        key: '/feed',
        icon: <QuestionCircleOutlined />,
        label: 'Feed',
    },
];

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const router = useNavigate();
    const handlerLink = (e: { key: string }) => {
        return e.key ? router(e.key) : router('/');
    };

    return (
        <>
            <Layout>
                <SideBar
                    collapsed={collapsed}
                    MenuUnfoldOutlined={MenuUnfoldOutlined}
                    MenuFoldOutlined={MenuFoldOutlined}
                    setCollapsed={setCollapsed}
                    widthSideBar={200}
                >
                    <Menu
                        className="p-4"
                        mode="inline"
                        defaultSelectedKeys={['/']}
                        onClick={handlerLink}
                        items={MENU}
                    />
                </SideBar>
                <Layout className="site-layout bg-bodyColor">
                    <MainHeader></MainHeader>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '30px 30px 0 30px',
                            minHeight: '100vh',
                            position: 'relative',
                        }}
                    >
                        <Outlet />
                        <>
                            <PlayerControl />
                        </>
                    </Content>
                </Layout>
                <SideBar widthSideBar={400}>Sidebar right</SideBar>
            </Layout>
        </>
    );
};

export default MainLayout;
