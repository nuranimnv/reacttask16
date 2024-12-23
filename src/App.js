import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import ClockPage from './Pages/ClockPages';
import StopwatchPage from './Pages/StopwatchPage';
import TimePage from './Pages/TimePage';
import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ClockPage />} />
        <Route path="/stopwatch" element={<StopwatchPage />} />
        <Route path="/timer" element={<TimePage />} />
      </Routes>
    </>
  );
};

export default App;
