import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  direction: 'ltr',
  palette: {
    text: {
      primary: '#193451',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>

    </Provider>
  </StrictMode>,
)
