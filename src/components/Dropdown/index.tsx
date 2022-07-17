import { Dropdown as DropdownAntd, DropDownProps } from 'antd';
import { memo } from 'react';

const Dropdown = ({
	placement,
	overlay,
	arrow,
	children,
	trigger,
}: DropDownProps) => {
	return (
		<DropdownAntd
			overlay={overlay}
			placement={placement}
			arrow={arrow}
			trigger={trigger}
		>
			{children}
		</DropdownAntd>
	);
};

export default memo(Dropdown);
