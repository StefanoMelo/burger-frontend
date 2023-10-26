import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import PropTypes from 'prop-types'

function PrivateRoute() {
  const user = localStorage.getItem('codeburger:userData')
  if (!user) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}

export default PrivateRoute

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
