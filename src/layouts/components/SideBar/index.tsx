import { Layout } from 'antd';
import React, { memo, ReactNode } from 'react';
const { Sider } = Layout;

interface props {
    collapsed?: boolean;
    MenuUnfoldOutlined?: React.ForwardRefExoticComponent<any>;
    MenuFoldOutlined?: React.ForwardRefExoticComponent<any>;
    setCollapsed?: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
    widthSideBar: number;
}

const SideBar = ({
    collapsed,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    setCollapsed,
    children,
    widthSideBar,
}: props) => {
    console.log('SideBar');

    if (MenuUnfoldOutlined && MenuFoldOutlined && setCollapsed) {
        return (
            <Sider
                theme="light"
                trigger={null}
                collapsible
                collapsed={collapsed}
                className="shadow max-h-full"
                width={widthSideBar}
            >
                <div className="flex justify-center items-center m-5">
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </div>
                <h2 className="text-center text-2xl font-mono font-bold max-w-2xl">TMusic</h2>
                {children}
            </Sider>
        );
    }
    return (
        <Sider theme="light" className="bg-bodyColor">
            {children}
        </Sider>
    );
};

export default memo(SideBar);
