import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import OTPInput from "./components/OTPInput";
import PasswordReset from "./components/PasswordReset";

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" Component={SignIn} />
      <Route path="/signup" Component={SignUp} />
      <Route path="/otp" Component={OTPInput} />
      <Route path="/reset-password" Component={PasswordReset} />
    </Routes>
  </Router>
);

export default AppRoutes;
