import { useTheme, Global, css } from '@emotion/react';

import reset from './reset';

export default function GlobalStyle() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        ${reset}
        html {
        }
        body {
          position: relative;
          min-width: 320px;
          font-family: ${theme.fonts.pretendard};
          color: ${theme.colors.font};
          overflow-x: hidden;
        }
      `}
    />
  );
}
