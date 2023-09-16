import { lazy } from 'react'
import NotFound from '../pages/NotFound'
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Tables = lazy(() => import('../pages/Tables'))
const Forms = lazy(() => import('../pages/Forms'))
const Alert = lazy(() => import('../pages/components/Alert'))
const Drawer = lazy(() => import('../pages/components/Drawer'))
const Message = lazy(() => import('../pages/components/Message'))
const Modal = lazy(() => import('../pages/components/Model'))
const Login = lazy(() => import('../pages/Auth/Login'))
const SignUp = lazy(() => import('../pages/Auth/Signup'))
const Profile = lazy(() => import('../pages/User/Profile'))

// ** Default Route
const DefaultRoute = '/login'

// ** Routes
const PageRoutes = [
  {
    path: '/',
    layout: 'BlankLayout',
    authRoute: true,
    component: <Login />
  },
  {
    path: '/login',
    layout: 'BlankLayout',
    authRoute: true,
    component: <Login />
  },
  {
    path: '/sign-up',
    layout: 'BlankLayout',
    authRoute: true,
    component: <SignUp />
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
  },
  {
    path: '/profile',
    component: <Profile />
  },
  {
    path: '/*',
    layout: 'BlankLayout',
    component: <NotFound /> 
  }
]

export { DefaultRoute, PageRoutes }
