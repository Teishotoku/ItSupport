import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/App'
import './index.scss'
import Header from "./comp/header/Header.jsx"
import Goals from "./comp/goals/Goals.jsx"
import Choose from "./comp/choose/Choose.jsx"
import Work from "./comp/work/Work.jsx"
import Technologies from "./comp/technologies/Technologies.jsx"
import Industries from "./comp/industries/Industries.jsx"
import Regist from "./comp/regist/Regist.jsx"
import Footer from "./comp/footer/Footer.jsx"
import TEST from './comp/TEST/TEST.jsx'
import { mas } from './comp/TEST/massive.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   <TEST title = {mas[0].title} description = {mas[0].description} />
  </StrictMode>,
)
