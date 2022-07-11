/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';
export interface ButtonProps {
	icon?: string | ReactNode;
	children: ReactNode;
	href?: string;
	className?: string;
	color: string;
	size?: any;
}

const ButtonStyled = styled.div`
	button,
	a {
		padding: 5px 5px;
		display: inline-flex;
		align-items: center;
		border-radius: 5px;
		&:hover {
			background-color: ${(props) => props.theme.hoverBg};
		}
	}
`;
const ContentStyled = styled.div<any>`
	font-size: ${(props) => props.size || '12px'};
	line-height: 1.5;
	color: ${(props) => props.color || 'black'};

	p {
		color: inherit;
		font-size: inherit;
		font-weight: inherit;
		line-height: inherit;
		margin-bottom: 0;
		word-break: unset;
	}
`;
const Button = ({
	icon,
	color,
	children,
	size = '12px',
	href,
	...passProps
}: ButtonProps) => {
	let Comp: string | React.ForwardRefExoticComponent<LinkProps> = 'button';
	const props: any = {
		...passProps,
	};
	if (href) {
		props.to = href;
		Comp = Link;
	}

	return (
		<ButtonStyled>
			<Comp {...props}>
				{icon && typeof icon === 'string' ? (
					<div className='icon'>
						<img src={icon} alt='' />
					</div>
				) : (
					icon
				)}

				<ContentStyled color={color} size={size}>
					<p>{children}</p>
				</ContentStyled>
			</Comp>
		</ButtonStyled>
	);
};

export default Button;
