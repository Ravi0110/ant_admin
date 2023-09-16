import { Route, Routes } from 'react-router-dom'
import { PageRoutes } from '.'
import { Suspense } from 'react'

const Router = () => {
  return (
    <Routes>
      {PageRoutes.map((route) => (
        <Route key={route?.path} path={route?.path} element={<Suspense fallback={<h1>Loading</h1>}>{route?.component}</Suspense>} />
      ))}
    </Routes>
  )
}

export default Router
