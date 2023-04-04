import './App.css'
import { Provider } from 'react-redux'
import toolkitStore from './state_management/redux_toolkit_demo/store'
import Redux_toolkit_demo from './state_management/redux_toolkit_demo/redux_toolkit_demo'
import queryStore from './state_management/redux_toolkit_query_demo/queryStore'
import Redux_toolkit_query_demo from './state_management/redux_toolkit_query_demo/redux_toolkit_query_demo'
import Redux_demo, { reduxStore } from './state_management/redux_demo'
import Recoil_demo from './state_management/recoil_demo'
import Zustand_demo from './state_management/zustand_demo/zustand_demo'
import { RecoilRoot } from 'recoil'
import React from 'react'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <RecoilRoot>
          <Provider store={reduxStore}>
            <Redux_demo />
          </Provider>
          <hr />
          <Provider store={toolkitStore}>
            <Redux_toolkit_demo />
          </Provider>
          <hr />
          <Provider store={queryStore}>
            <Redux_toolkit_query_demo />
          </Provider>
          <hr />
          <Recoil_demo />
          <hr />
          <Zustand_demo />
        </RecoilRoot>
      </header>
    </div>
  )
}

export default App
