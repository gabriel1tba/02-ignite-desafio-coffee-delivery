import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import defaultTheme from './styles/themes/default';

import QuantitySelector from './components/QuantitySelector';

const App = () => {
  const [count, setCount] = useState(0);

  const decrement = () =>
    setCount((prev) => {
      if (prev > 0) return prev - 1;
      return prev;
    });

  const increment = () => setCount(count + 1);

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Coffee Delivery</h1>
      <p>Count: {count}</p>

      <QuantitySelector
        quantity={count}
        onDecrement={decrement}
        onIncrement={increment}
      />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
