import { Carousel } from 'antd';
import { ReactNode } from 'react';

type Props = {
    autoplay: boolean;
    children: ReactNode;
};
const Banner = ({ autoplay, children }: Props) => {
    return <Carousel autoplay={autoplay}>{children}</Carousel>;
};

export default Banner;
