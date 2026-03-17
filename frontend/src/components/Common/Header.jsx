import React from "react";
import { Topbar, Navbar, CardDrawer } from "../index";

function Header() {
  return (
    <header className="border-b border-gray-200">
      <Topbar />
      <Navbar />
      <CardDrawer />
    </header>
  );
}

export default Header;
