import { createBrowserRouter,Navigate } from 'react-router-dom'

import Editor from '../views/Editor'

const router = createBrowserRouter([
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
])
