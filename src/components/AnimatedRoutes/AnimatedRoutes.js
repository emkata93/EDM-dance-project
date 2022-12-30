import React from "react";
import { useState } from 'react';
import { data } from '../../staticData';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from '../home/HomePage';
import { Login } from '../login/Login';
import { Register } from '../register/Register';
import { Catalog } from '../catalog/Catalog';
import { Search } from '../search/Search';
import { Details } from '../details/Details';
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();
    const [lessons, setLessons] = useState(data);
    return(
        <AnimatePresence exitBeforeEnter>        
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalog" element={<Catalog lessons={lessons} />} />
        <Route path="/catalog/:lessonId" element={<Details lessons={lessons} />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      </AnimatePresence>
    )
}

export default AnimatedRoutes;