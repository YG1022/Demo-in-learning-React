import './App.css'
import LifeCircle from './design_pattern/life_circle'
import React from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Provider store={reduxStore}>
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
        <RecoilRoot>
          <Recoil_demo />
        </RecoilRoot>
        <hr />
        <Zustand_demo /> */}
        <LifeCircle />
      </header>
    </div>
  )
}

export default App
