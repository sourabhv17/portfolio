import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Body from './components/Body';
import Header from './components/Header';



const AppLayout = () => {
  return <div><Header/>
  <Body />
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);

