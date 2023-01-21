import { createBrowserRouter } from 'react-router-dom'

import Editor, { editorLoader } from '../views/Editor'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'team',
        element: <Editor />,
        loader: editorLoader,
      },
    ],
  },
])
