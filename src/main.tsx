import { ThemeProvider } from "@mui/system";
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';

import App from './App.tsx'
import theme from "./theme/index.ts";
import './index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider theme={theme("light")}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
