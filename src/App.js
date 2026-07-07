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
import ForgotPassword from "./pages/ForgotPassword";
import HelpCenter from "./pages/HelpCenter";
import FAQs from "./pages/FAQs";
import FarmingGuides from "./pages/FarmingGuides";
import Blog from "./pages/Blog";
import ApiDocs from "./pages/ApiDocs";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";

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
            <Route path="/forgot-password" element={<ForgotPassword />} />
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
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/guides" element={<FarmingGuides />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/docs" element={<ApiDocs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
