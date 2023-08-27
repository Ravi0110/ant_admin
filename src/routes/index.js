import { lazy } from 'react'
const Dashboard =  lazy(() => import('../pages/Dashboard'))

// ** Default Route
const DefaultRoute = '/dashboard'

// ** Routes
const PageRoutes = [
  {
    path: '/login',
    layout: 'BlankLayout',
    authRoute: true
  },
  {
    path: '/register',
    layout: 'BlankLayout',
    authRoute: true
  },
  {
    path: '/forgot-password',
    layout: 'BlankLayout',
    authRoute: true
  },
  {
    path: '/dashboard',
    component: <Dashboard />
  }
]


export { DefaultRoute, PageRoutes }