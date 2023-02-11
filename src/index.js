import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyle/GlobalStyle';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyles>
        <App />
    </GlobalStyles>,
);
reportWebVitals();
