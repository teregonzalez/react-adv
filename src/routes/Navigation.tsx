import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from '../logo.svg'

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="ReactLogo"/>
            <ul>
                <li>
                    <NavLink to="/home" className={({ isActive}) => isActive ? 'nav-active' : '' }> Home Pages</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive}) => isActive ? 'nav-active' : '' }> About Pages</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={({ isActive}) => isActive ? 'nav-active' : '' }> Users Pages</NavLink>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="about" element={ <h1> About Pages </h1>}></Route>
            <Route path="users" element={ <h1> Users Pages </h1>}></Route>
            <Route path="home" element={ <h1> Home Pages </h1>}></Route>
            <Route path="/*" element={ <Navigate to="home" replace></Navigate>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Navigation
