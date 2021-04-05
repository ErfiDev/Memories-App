import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Store from './Store';
import App from './components/App';

render(
    <BrowserRouter>
        <Provider store={Store}>
            <App />
        </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')
);