import React from 'react'
import {RecoilRoot} from "recoil"
import Layout from "./layout/Layout"
import {BrowserRouter as AppRouter, Switch} from 'react-router-dom'

const App = () => (
    <RecoilRoot>
      <AppRouter basename={process.env.REACT_APP_BASENAME}>
        <Switch>
          <Layout/>
        </Switch>
      </AppRouter>
    </RecoilRoot>
)
export default App
