// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
//
// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store'; // Redux store'u import edin

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
