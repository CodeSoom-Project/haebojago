import { Route, Routes } from 'react-router-dom';

// import CommonStyledComponents from '../shared/styles/CommonStyledComponents';

import { ThemeProvider } from '@emotion/react';
import { theme } from './shared/styles/theme';
import GlobalStyle from './shared/styles/GlobalStyles';

import HeaderContainer from './components/HeaderContainer';
import MissionList from './pages/MissionList';
import MissionWrite from './pages/MissionWrite';

import CommonStyledComponents from './shared/styles/CommonStyledComponents';

const { Area, PageContainer } = CommonStyledComponents;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <HeaderContainer />

      <PageContainer>
        <Area>
          <Routes>
            <Route path="/" element={<MissionList />} />
            <Route path="/writemission" element={<MissionWrite />} />
          </Routes>
        </Area>
      </PageContainer>
    </ThemeProvider>
  );
}
