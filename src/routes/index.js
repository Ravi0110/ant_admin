import { lazy } from 'react'
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Tables = lazy(() => import('../pages/Tables'))
const Forms = lazy(() => import('../pages/Forms'))
const Alert = lazy(() => import('../pages/components/Alert'))
const Drawer = lazy(() => import('../pages/components/Drawer'))
const Message = lazy(() => import('../pages/components/Message'))
const Modal = lazy(() => import('../pages/components/Model'))

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
  },
  {
    path: '/tables',
    component: <Tables />
  },
  {
    path: '/forms',
    component: <Forms />
  },
  {
    path: '/alert',
    component: <Alert />
  },
  {
    path: '/drawer',
    component: <Drawer />
  },
  {
    path: '/message',
    component: <Message />
  },
  {
    path: '/modal',
    component: <Modal />
  }
]

export { DefaultRoute, PageRoutes }
