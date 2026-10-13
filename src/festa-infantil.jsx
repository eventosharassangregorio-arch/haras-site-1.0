import React from 'react'
import ReactDOM from 'react-dom/client'
import KidsPage from './kids/KidsPage.jsx'
import './styles.css'
import { initTracking } from './lib/tracking.js'

initTracking()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KidsPage />
  </React.StrictMode>
)
