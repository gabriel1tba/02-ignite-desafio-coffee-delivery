import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ShoppingCartSimple, Trash } from 'phosphor-react';

import GlobalStyle from './styles/global';
import defaultTheme from './styles/themes/default';

import CartButton from './components/CartButton';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Coffee Delivery</h1>
      <p>Count: {count}</p>
      <CartButton
        icon={ShoppingCartSimple}
        color='purple'
        onClick={increment}
        style={{ marginTop: 20, marginLeft: 20 }}
      />

      <CartButton
        icon={ShoppingCartSimple}
        onClick={increment}
        variant='common'
        style={{ marginTop: 20, marginLeft: 20 }}
      />

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
