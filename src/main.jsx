import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const myelement = (
  <table>
  <tr>
    <th>Name</th>
  </tr>
  <tr>
    <td>John</td>
  </tr>
  <tr>
    <td>Elsa</td>
  </tr>
  </table>
)
    

createRoot(document.getElementById('root')).render(
  <App/>
)
