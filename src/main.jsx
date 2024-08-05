import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastProvider } from './components/ToastContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ToastProvider>
    <App />
</ToastProvider>
)
