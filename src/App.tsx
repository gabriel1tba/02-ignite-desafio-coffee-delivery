import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Trash } from 'phosphor-react';

import GlobalStyle from './styles/global';
import defaultTheme from './styles/themes/default';

import Button from './components/Button';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Coffee Delivery</h1>
      <p>Count: {count}</p>
      <Button icon={Trash} color='purple' onClick={increment}>
        LABEL
      </Button>

      <Button
        style={{ marginTop: 20 }}
        icon={Trash}
        variant='common'
        color='purple'
        size='small'
        fontSize='small'
        onClick={increment}
      >
        Increment
      </Button>

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
