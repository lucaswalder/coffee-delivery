import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={defaultTheme}>
    <StrictMode>
      <App />
      <GlobalStyle />
    </StrictMode>
  </ThemeProvider>
)
