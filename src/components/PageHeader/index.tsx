import { PageHeader as PageHeaderAntd } from 'antd';
import { memo, ReactNode } from 'react';
import Button from '../Button';
export interface Props {
	title?: ReactNode | string;
	iconButton: any;
}

const PageHeader = ({ title, iconButton }: Props) => {
	return (
		<>
			<PageHeaderAntd
				ghost={false}
				title={title}
				extra={[
					<Button
						href='product-add'
						color='#096dd9'
						key={1}
						className='text-base'
						size='18px'
					>
						{iconButton}
					</Button>,
				]}
			></PageHeaderAntd>
		</>
	);
};
export default memo(PageHeader);
