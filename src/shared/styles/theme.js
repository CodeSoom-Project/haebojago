const fonts = {
  pretendard: 'Pretendard, sans-serif',
  dotum: '"Dotum", sans-serif',
};

const colors = {
  font: '#000',
  point: '#0389fd',
  border: '#ddd',
  valid: '#ff000a',
};

const size = {
  sm: '544px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

const mq = {
  sm: `@media (min-width: ${size.sm})`,
  md: `@media (min-width: ${size.md})`,
  lg: `@media (min-width: ${size.lg})`,
  xl: `@media (min-width: ${size.xl})`,
};

const gutter = {
  mobile: '15px',
  pc: '100px',
};

export const theme = {
  fonts,
  colors,
  mq,
  gutter,
};
