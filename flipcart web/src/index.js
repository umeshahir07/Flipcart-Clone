import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mystore } from './Components/Store';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-kln6uc0wb4ci3tjc.us.auth0.com"
  clientId="2u4obVv4fUG1HYcXsXTSDt8KFUqmN2Qu"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
 <Provider store={mystore}>
     <BrowserRouter>
   <App />
  </BrowserRouter>

 </Provider>
 </Auth0Provider>,
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
