import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <div className='hidden md:flex justify-center items-center h-screen font-bold'>
          <div >
            <div>
              Sorry, This site is not available for Desktop and Ipad versions.  
              <span className='text-$orange ml-1'>
                 But It's coming soon
              </span>
            </div>
            <div className='text-center text-$orange'>Try again by the mobile version</div>
          </div>

        </div>
        <div className='md:hidden'>
          <App />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
