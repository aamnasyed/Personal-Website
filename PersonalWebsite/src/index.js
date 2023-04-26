import { createRoot } from "react-dom/client"

import { Homepage, Portfolio, AboutMe } from "./components"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./index.css"
const App = () => {
    return (
        <BrowserRouter>
        
            <nav id="navbar">
                <Link to="/"> Home</Link>

                <Link to="/aboutme"> About Me </Link>

                <Link to="/profile"> Portfolio </Link>

            </nav>

            <Routes> 
                <Route path="/" element={<Homepage/>} />
                <Route path="/aboutme" element={<AboutMe/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
            </Routes>
        </BrowserRouter>

    )
}

let appElement = document.getElementById("app")
let root = createRoot (appElement)
root.render(<App/>)