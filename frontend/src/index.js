import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom'
import TopNavBar from './components/topBar/TopNavBar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TopNavBar/>
      <div className=' pt-2 h-[100vh] w-full bg-gradient-to-t from-green-300'>
        <App />
      </div>
    </Router>
  </React.StrictMode>
);
