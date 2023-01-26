import { createBrowserRouter } from 'react-router-dom'
import Editor from '../pages/Editor'

export const router = createBrowserRouter([
  { path: '/', element: <Editor/> },
  { path: 'editor', element: <Editor/> },
])

export default router
