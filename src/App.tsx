import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { CartProvider } from './hooks/useCart';

import GlobalStyle from './styles/global';
import defaultTheme from './styles/themes/default';

import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Routes />
          <GlobalStyle />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
