import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ComingSoonAllVersion from './component/notice/comingSoonAllVersion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        {/* this set ui for close site when user open pc or ipad version */}
        <div className='hidden md:flex justify-center items-center h-screen font-bold'>
        <ComingSoonAllVersion/>
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


// Note from Frontend development
// all page  --> routes folder
// all component --> component folder
// all image  --> public/img folder
// all function --> service folder
