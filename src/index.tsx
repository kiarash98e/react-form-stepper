import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'
import theme from './theme/theme'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()
const container = document.getElementById('root')!;
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <App />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
reportWebVitals();
