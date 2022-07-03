import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import CommonStyledComponents from '../shared/styles/CommonStyledComponents';

const { Area } = CommonStyledComponents;

const Header = styled.header`
  border-bottom: 1px solid #ddd;
`;
const HeaderArea = styled(Area)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

export default function HeaderContainer() {
  return (
    <Header>
      <HeaderArea>
        <h1>
          <Link to="/">해보자고</Link>
        </h1>

        <nav>
          <Link to="/">나의 목표</Link>
        </nav>
      </HeaderArea>
    </Header>
  );
}
