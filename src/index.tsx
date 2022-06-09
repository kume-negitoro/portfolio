import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style/tailwind.css'
import './style/markdown.css'
import 'devicon'

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)
root.render(<App />)
