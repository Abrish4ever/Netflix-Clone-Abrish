import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import HomePage from '../HomePage/HomePage'
import { Routes, Route } from "react-router";
import MoviePage from '../MoviePage/MoviePage';


const Main = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default Main