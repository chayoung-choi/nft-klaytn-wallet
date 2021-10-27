import { lazy } from 'react'

const DefaultRoute = '/home'

const Routes = [
	{
		path: '/home',
		component: lazy(() => import('../../views/Home'))
	},
  {
    path: '/2',
    exact: true,
    component: lazy(() => import('../../views/Page2'))
  },
  {
    path: '/3',
    exact: true,
    component: lazy(() => import('../../views/Page3'))
  }
]

export { DefaultRoute, Routes }
