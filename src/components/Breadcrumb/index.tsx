import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb as BreadcrumbAntd } from 'antd';
import { ContainerStyled } from '~/GlobalClasses';
import styled from 'styled-components';
import { memo } from 'react';
const BreadcrumbStyled = styled.div`
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	padding: 5px 0;
`;

const Breadcrumb = () => {
	return (
		<BreadcrumbStyled>
			<ContainerStyled>
				<BreadcrumbAntd>
					<BreadcrumbAntd.Item href=''>
						<HomeOutlined />
					</BreadcrumbAntd.Item>
					<BreadcrumbAntd.Item href=''>
						<span>Home</span>
					</BreadcrumbAntd.Item>
					<BreadcrumbAntd.Item>điện thoại</BreadcrumbAntd.Item>
				</BreadcrumbAntd>
			</ContainerStyled>
		</BreadcrumbStyled>
	);
};

export default memo(Breadcrumb);
