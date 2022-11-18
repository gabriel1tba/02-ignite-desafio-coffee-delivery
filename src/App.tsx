import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import defaultTheme from './styles/themes/default';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Coffee Delivery</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
