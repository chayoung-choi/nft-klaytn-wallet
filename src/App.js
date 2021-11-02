import React from 'react'
import {RecoilRoot} from "recoil"
import {BrowserRouter as AppRouter, Switch} from 'react-router-dom'
import Layout from "./layout/Layout";

const App = () => (
    <RecoilRoot>
      <AppRouter basename={process.env.REACT_APP_BASENAME}>
        <Switch>
          <Layout className='vh-100'/>
        </Switch>
      </AppRouter>
    </RecoilRoot>
)
export default App
