import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Detect from "./pages/Detect";
import Result from "./pages/Result";
import Chat from "./pages/Chat";
import Weather from "./pages/Weather";
import History from "./pages/History";
import ReportDetail from "./pages/ReportDetail";
import Tips from "./pages/Tips";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/"            element={<Home />} />
            <Route path="/login"       element={<Login />} />
            <Route path="/register"    element={<Register />} />
            <Route path="/dashboard"   element={<Dashboard />} />
            <Route path="/detect"      element={<Detect />} />
            <Route path="/result"      element={<Result />} />
            <Route path="/chat"        element={<Chat />} />
            <Route path="/weather"     element={<Weather />} />
            <Route path="/history"     element={<History />} />
            <Route path="/history/:id" element={<ReportDetail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/tips"        element={<Tips />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
