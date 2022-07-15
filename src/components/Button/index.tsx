/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';
export interface ButtonProps {
	icon?: string | ReactNode;
	rightIcon?: string;
	bgHover?: string;
	children: ReactNode;
	href?: string;
	className?: string;
	color: string;
	bgColor?: string;
	border?: string;
	size?: string;
}

const ButtonStyled = styled.div<any>`
	button,
	a {
		width: 100%;
		padding: 5px 5px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
		background-color: ${(props) => props.bgColor};
		&:hover,
		:active {
			background-color: ${(props) => props.bgHover || props.theme.hoverBg};
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
const RightIconStyled = styled.div`
	margin-left: auto;
`;
const IconStyled = styled.div`
	margin-right: 5px;
`;

const Button = ({
	icon,
	color,
	children,
	size = '12px',
	href,
	rightIcon,
	bgHover,
	bgColor,
	border,
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
		<ButtonStyled bgHover={bgHover} bgColor={bgColor} border={border}>
			<Comp {...props}>
				{icon && typeof icon === 'string' ? (
					<IconStyled>
						<img src={icon} alt='' />
					</IconStyled>
				) : (
					icon
				)}

				<ContentStyled color={color} size={size}>
					<p>{children}</p>
				</ContentStyled>
				{rightIcon && (
					<RightIconStyled>
						<img src={rightIcon} alt='' />
					</RightIconStyled>
				)}
			</Comp>
		</ButtonStyled>
	);
};

export default Button;
