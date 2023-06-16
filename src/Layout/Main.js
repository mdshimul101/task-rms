import React from "react";
import { Outlet } from "react-router-dom";

import FooterNew from "../components/Shared/FooterNew/FooterNew";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <FooterNew></FooterNew>
    </div>
  );
};

export default Main;
