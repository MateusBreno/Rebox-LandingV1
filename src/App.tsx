import { ThemeProvider } from 'styled-components';
import RouterLogic from './Router';
import { GlobalStyles } from './theme/GlobalStyles';
import theme from './theme/theme.json';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyles />
      <RouterLogic />
    </ThemeProvider>
  );
};

export default App;
