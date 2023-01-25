import type { RouteObject } from 'react-router-dom'
import Editor from '../pages/Editor'

const router: RouteObject[] = [
  {
    path: '/',
    element: <Editor/>,
  },
  {
    path: '/editor',
    element: <Editor/>,
  },
]
export default router
