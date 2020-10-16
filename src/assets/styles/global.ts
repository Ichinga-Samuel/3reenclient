import { createGlobalStyle } from 'styled-components';
import variables from '!!raw-loader!../styles/global.scss';

const GlobalStyle = createGlobalStyle`
  ${variables}
`;

export default GlobalStyle;
