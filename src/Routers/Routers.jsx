import React from "react";
import HalamanLogin from "../Pages/Login Page/LoginPage";
import HalamanRegistrasi from "../Pages/Registration Page/HalamanRegistrasi";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import LandingPage from "../Pages/LandingPage/LandingPage";
import SearchFlight from "../Pages/Search Flight/SearchFlight";
import SearchHotel from "../Pages/Search Hotel/SearchHotel";
import FlightSchedule from "../Pages/Flight Schedule/FlightSchedule";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<HalamanLogin />} />
          <Route path="/regist" element={<HalamanRegistrasi />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search/flight" element={<SearchFlight />} />
          <Route path="/search/hotel" element={<SearchHotel />} />
          <Route path="/search/flight/schedule" element={<FlightSchedule />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
