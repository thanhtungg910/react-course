import { SearchOutlined } from '@ant-design/icons';
import { memo } from 'react';
import styled from 'styled-components';

const SearchStyled = styled.div`
	width: 600px;
	position: relative;
	span {
		position: absolute;
		top: 35%;
		bottom: 50%;
		margin-left: 10px;
	}
	input {
		width: 100%;
		height: 40px;
		border-radius: 5px;
		border: none;
		outline: none;
		padding: 0 40px;
	}
`;
const SearchInput = () => {
	return (
		<SearchStyled>
			<SearchOutlined />
			<input type='search' />
		</SearchStyled>
	);
};

export default memo(SearchInput);
