import './App.css'

import { Button, Space } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'

import reactLogo from './assets/react.svg'

const Wrapper = styled.section`
  margin: 0 auto;
  width: 300px;
  text-align: center;
`
const ButtonA = styled.button`
  width: 100px;
  background: skyblue;
  color: red;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Space wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space>
      <Wrapper>
        <ButtonA>Hello World</ButtonA>
      </Wrapper>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
