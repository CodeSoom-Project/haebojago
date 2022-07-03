import styled from '@emotion/styled';
import { theme } from './theme';

// page wrap
const PageContainer = styled.div`
  padding: 30px 0;
  ${theme.mq.lg} {
    padding: 100px 0;
  }
`;

// area
const Area = styled.div`
  width: 100%;
  padding: 0 ${theme.gutter.mobile};
  margin: 0 auto;
  ${theme.mq.lg} {
    max-width: 1200px;
    padding: 0 ${theme.gutter.pc};
  }
`;

const CommonTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
`;

const CommonStyledComponents = {
  PageContainer,
  Area,
  CommonTitle,
};
export default CommonStyledComponents;
