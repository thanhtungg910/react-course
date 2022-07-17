import Modal from 'antd/lib/modal/Modal';
import { ReactNode } from 'react';

export interface Props {
	title: React.ReactNode;
	visible: boolean;
	confirmLoading?: boolean;
	handleOk:
		| ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void)
		| undefined;
	handleCancel:
		| ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void)
		| undefined;
	children: ReactNode;
}
const Dialog = ({
	title,
	visible,
	handleOk,
	handleCancel,
	confirmLoading,
	children,
}: Props) => {
	return (
		<Modal
			title={title}
			visible={visible}
			onOk={handleOk}
			onCancel={handleCancel}
			confirmLoading={confirmLoading}
			footer={null}
		>
			{children}
		</Modal>
	);
};

export default Dialog;
