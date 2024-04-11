import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";

import Header from "./comp/Header";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import FooterComp from "./comp/Footer";

export default function App() {
  return (

    <BrowserRouter>
    <Header />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/sign-up" element={<SignUp />} />
       <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  )
}
