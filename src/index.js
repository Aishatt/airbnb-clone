import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/App.css';


function Nav() {
  return (
    <header className="head">  
    <img src='images/icon5.jpeg'
                style={{width:40}} alt=""/>
                <p>INSPIRE</p>
     </header>
  
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>
);
