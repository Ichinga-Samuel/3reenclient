import { createGlobalStyle } from 'styled-components';
import variables from '!!raw-loader!./scss/global.scss';

const GlobalStyle = createGlobalStyle`
  ${variables}
`;

export default GlobalStyle;
