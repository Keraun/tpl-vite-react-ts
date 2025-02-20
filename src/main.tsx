import 'promise-polyfill';
import 'whatwg-fetch';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app';
import './global.less'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
