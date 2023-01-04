import React from "react";
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { data } from '../../staticData';
import { AuthContext } from "../../context/AuthContext";
import { useSessionStorage } from '../../hooks/useSessionStorage';

import { HomePage } from '../home/HomePage';
import { Login } from '../login/Login';
import { Logout } from "../logout/Logout";
import { Register } from '../register/Register';
import { Catalog } from '../catalog/Catalog';
import { Search } from '../search/Search';
import { Details } from '../details/Details';

import { AnimatePresence, useTransform } from "framer-motion";
import { Header } from "../header/Header";

function AnimatedRoutes() {
  const location = useLocation();
  const [lessons, setLessons] = useState(data);
  const [auth, setAuth] = useSessionStorage('auth', {});

  const userLoginHandler = (userData) => {
    setAuth(userData);
  }
  const userLogoutHandler = () => {
    setAuth({})
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <AuthContext.Provider value={{ auth, userLoginHandler, userLogoutHandler }}>
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<Catalog lessons={lessons} />} />
          <Route path="/catalog/:lessonId" element={<Details lessons={lessons} />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </AuthContext.Provider>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;