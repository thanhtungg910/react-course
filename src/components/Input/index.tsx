import { Form, Input as InputAntd, InputNumber as InputNumberAntd } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { ReactNode } from 'react';

type Props = {
	placeholder: string;
	type?: string;
	label: string | ReactNode;
	className?: string;
	message?: string;
	name: string;
	required?: boolean;
	size?: SizeInput | SizeType;
};
export enum SizeInput {
	SMALL = 'small',
	LARGE = 'large',
	MIDDLE = 'middle',
}

const Input = ({
	placeholder = '',
	label,
	required,
	size = SizeInput.SMALL,
	type = 'text',
	className,
	message = 'VUi lòng không bỏ trống trường này!',
	name,
}: Props) => {
	const props = {
		className: className,
		label,
		required,
		tooltip: 'This is a required field',
		rules: [{ required, message }],
		name,
	};
	if (type === 'number') {
		return (
			<Form.Item {...props}>
				<InputNumberAntd
					placeholder={placeholder}
					size={size}
					className='w-full'
					addonAfter='VND'
				/>
			</Form.Item>
		);
	}

	return (
		<Form.Item {...props}>
			<InputAntd placeholder={placeholder} size={size} />
		</Form.Item>
	);
};

export default Input;
Input;
