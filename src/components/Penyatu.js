import React from "react"
import { useLocation, Routes, Route } from "react-router-dom"

import Portofolio from "./Portofolio"
import Project from "./project"
import Skill from "./Skill"


const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Portofolio />} />
            <Route exact path="/Project" element={<Project />} />
            <Route exact path="/skill" element={<Skill />} />

        </Routes>
    )
}

export default AnimatedRoutes