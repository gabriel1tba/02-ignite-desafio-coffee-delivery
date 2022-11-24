import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import defaultTheme from './styles/themes/default';

import QuantitySelector from './components/QuantitySelector';

const App = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = (value: number) =>
    setCount((prev) => (prev > 0 ? value : prev));

  const handleIncrement = (value: number) => setCount(value);

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Coffee Delivery</h1>
      <p>Count: {count}</p>

      <QuantitySelector
        quantity={count}
        onDecrement={(value) => handleDecrement(value)}
        onIncrement={(value) => handleIncrement(value)}
      />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
