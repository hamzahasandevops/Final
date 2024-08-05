import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Dashboard from "./Pages/Dashboard";
import Cart from "./Pages/Cart";
import Form from "./Pages/Forms/Form";
import SignUp from "./Pages/Forms/SignUp";
import Fetching from "./Components/Fetching";
import ViewMore from "./Components/ViewMore";
import MobileSearch from "./Pages/Forms/MobileTabs/MobileSearch";

import MediCategory from "./Pages/Forms/MobileTabs/MediCategory";
import ItemDetail from "./Pages/Forms/MobileTabs/ItemDetail";

function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/cart" element={<Cart />} />
          {/* for form submission */}
          <Route path="/form" element={<Form />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/viewmore" element={<ViewMore />} />
          <Route path="/mobilesearch" element={<MobileSearch />} />
          <Route path="/mobilecategory" element={<MediCategory />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          {/* //this is for reading data from db */}
          <Route path="/fetching" element={<Fetching />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
