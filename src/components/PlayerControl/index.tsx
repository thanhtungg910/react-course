import ReactDOM from 'react-dom';

type Props = {};

const PlayerControl = (props: Props) => {
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) return;
    return ReactDOM.createPortal(<div>PlayerControl</div>, modalRoot);
};

export default PlayerControl;
