import React from 'react'
import { Route, Routes } from "react-router"
import Home from '../Pages/Home'

const Router = () => {
    return (
        <Routes>
            <Route path="/" exact={true} element={<Home />} />
        </Routes>
    )
}

export default Router
