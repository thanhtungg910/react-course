import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb as BreadcrumbAntd } from 'antd';
import { ContainerStyled } from '~/GlobalClasses';
import styled from 'styled-components';
import { memo } from 'react';
import { Link } from 'react-router-dom';
const BreadcrumbStyled = styled.div`
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	padding: 5px 0;
`;

const Breadcrumb = () => {
	return (
		<BreadcrumbStyled>
			<ContainerStyled>
				<BreadcrumbAntd>
					<BreadcrumbAntd.Item>
						<Link to='/'>
							<HomeOutlined />
						</Link>
					</BreadcrumbAntd.Item>
					<BreadcrumbAntd.Item>
						<Link to='/'>Home</Link>
					</BreadcrumbAntd.Item>
					<BreadcrumbAntd.Item>điện thoại</BreadcrumbAntd.Item>
				</BreadcrumbAntd>
			</ContainerStyled>
		</BreadcrumbStyled>
	);
};

export default memo(Breadcrumb);
