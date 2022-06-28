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
import Chip from '../../components/Chip';
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
                    </Content>
                </Layout>
                <SideBar widthSideBar={400}>
                    <div className="mt-4 ">
                        <h2 className="text-xl font-sans font-black sm:text-2xl">Short cut</h2>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <Chip title="🎵 Chill Hits" />
                        <Chip title="✨Hot" />
                        <Chip title="🎶Indie Pop" />
                        <Chip title="🎹Piano" />
                        <Chip title="🎸Acoustics" type="a" href="/acd" />
                    </div>
                </SideBar>
            </Layout>
            <PlayerControl />
        </>
    );
};

export default MainLayout;
