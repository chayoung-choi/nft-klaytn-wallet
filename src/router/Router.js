import React, { lazy, Suspense } from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import { DefaultRoute, Routes } from './routes'

const Home = lazy(() => import('../views/Home'))
const Page2 = lazy(() => import('../views/Page2'))
const Page3 = lazy(() => import('../views/Page3'))

const Router = () => {

	const ResolveRoutes = () => {
		return Routes.map(route => {
			return (
				<Route
					key={route.path}
					path={route.path}
					exact={route.exact === true}
					render={props => {
						return (
							<Suspense fallback={null}>
								<route.component {...props} />
							</Suspense>
						)
					}}
				/>
			)
		})
	}

	return (
		<Suspense fallback={null}>
			<Switch>
				<Route
					exact
					path='/'
					render={() => {
						return <Redirect to={DefaultRoute} />
					}}
				/>
				{ResolveRoutes()}
				{/*<Route exact path='/' render={(props) => <Home props={props}></Home>} />*/}
				{/*<Route exact path='/2' render={(props) => <Page2 props={props}></Page2>} />*/}
				{/*<Route exact path='/3' render={(props) => <Page3 props={props}></Page3>} />*/}
			</Switch>
		</Suspense>
	)
}
export default Router
