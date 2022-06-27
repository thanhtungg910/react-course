import { ArrowLeftOutlined, ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { memo } from 'react';

const { Header } = Layout;

type Props = {};

const MainHeader = (props: Props) => {
    return (
        <Header
            className="site-layout-background bg-bodyColor"
            style={{
                margin: '0 30px',
                padding: 0,
            }}
        >
            <div className="flex items-center gap-3 mt-3">
                <div className="w-48 gap-3 flex items-center justify-between">
                    <ArrowLeftOutlined className="text-2xl cursor-pointer" />
                    <ArrowRightOutlined className="text-2xl cursor-pointer" />
                </div>
                <div className="relative flex-1 ml-10">
                    <input
                        className="w-full py-4 pl-16 text-sm border-gray-200 rounded-full"
                        type="text"
                        spellCheck={false}
                    />
                    <button>
                        <SearchOutlined className="absolute p-2 text-white -translate-y-1/2 bg-blue-600 rounded-full top-1/2 left-4" />
                    </button>
                </div>
            </div>
        </Header>
    );
};

export default memo(MainHeader);
