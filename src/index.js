import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Auth0Provider from './Auth0Provider';

render(
  <Auth0Provider
    domain="lacrivella.auth0.com"
    client_id="uB7qCZnvxreSEKisY6xRZfycF0Mb2qUB"
    redirect_uri="http://localhost:7890" >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
