import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import Editor from '../pages/Editor'

const router: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/editor" />,
    children: [
      {
        path: 'editor',
        element: <Editor />,
      },
    ],
  },
]

export default router
