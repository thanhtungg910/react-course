import { memo } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const MainMenuStyed = styled.div`
	width: 205px;
`;
const MainMenu = () => {
	return (
		<MainMenuStyed>
			<Button color={'black'}>Dien thoai</Button>
		</MainMenuStyed>
	);
};

export default memo(MainMenu);
