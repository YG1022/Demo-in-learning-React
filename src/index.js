import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Test1 from './ts_test/Test1';
import Test2 from './ts_test/Test2';
import Test3 from './ts_test/Test3';
import Test4 from './ts_test/Test4';
import Test5 from './ts_test/Test5';
import Test6 from './ts_test/Test6';
import store from './ts_test/store';
import queryStore from './ts_test/queryStore';
import Test7, { Test7Store } from './ts_test/Test7';
import { RecoilRoot } from 'recoil';
import Test8 from './ts_test/Test8';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RecoilRoot>
            {false && <App />}
            {/* <Test1 />
        <hr />
        <Test2 />
        <hr />
        <Test3 />
        <hr />
        <Test4 />
        <hr /> */}
            <Provider store={store}>
                <Test5 />
            </Provider>
            <hr />
            <Provider store={queryStore}>
                <Test6 />
            </Provider>
            <hr />
            <Provider store={Test7Store}>
                <Test7 />
            </Provider>
            <hr />
            <Test8 />
        </RecoilRoot>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
