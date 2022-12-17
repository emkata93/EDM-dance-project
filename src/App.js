import { Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import { useEffect } from 'react';

import { Header } from './components/header/Header';
import { HomePage } from './components/home/HomePage';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Catalog } from './components/catalog/Catalog';
import { Footer } from './components/footer/Footer';
import { Search } from './components/search/Search';
import { Details } from './components/details/Details';
import { data } from './staticData';

function App() {

  const [lessons, setLessons] = useState(data);

  return (
    <div id="box">
      <Header />

      <main id="main-content" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalog" element={<Catalog lessons={lessons} />} />
        <Route path="/catalog/:lessonId" element={<Details lessons={lessons} />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
