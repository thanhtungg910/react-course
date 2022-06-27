import { Children, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

function createPortalWrapper() {
    const element = document.createElement('div');
    element.id = 'portal-wrapper';
    return element;
}
const portalWrapperElm = createPortalWrapper();

type Props = {
    children: ReactNode;
};

const Portal = ({ children }: Props) => {
    useEffect(() => {
        document.body.appendChild(portalWrapperElm);
    }, []);
    const renderContent = <div>{children}</div>;
    return createPortal(renderContent, portalWrapperElm);
};

export default Portal;
