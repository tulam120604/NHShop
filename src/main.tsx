import ReactDOM from 'react-dom/client';
import { BrowserRouter as Browser } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { DataProvider } from './ContextProvide/DataProvider.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Browser>
    <DataProvider>
      <App />
    </DataProvider>
  </Browser>
  // </React.StrictMode>,
)
