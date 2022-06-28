import React, { memo } from 'react';
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    type?: string;
    href?: string;
};

const Chip = ({ title, type = 'button', href }: Props) => {
    let Comp;
    let props = {
        className:
            'uppercase px-5 py-2 rounded-full text-[10px] bg-[#fff] focus:shadow transition-all',
        to: '',
    };
    if (type === 'a' && href) {
        Comp = Link;
        props = {
            ...props,
            to: href,
        };
    } else {
        Comp = type;
    }
    return <Comp {...props}>{title}</Comp>;
};

export default memo(Chip);
