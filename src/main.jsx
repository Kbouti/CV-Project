import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { TestComponent } from './components/testComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestComponent />
  </React.StrictMode>,
)
