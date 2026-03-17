import React from "react";
import { Header, Footer } from "../index";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <>
      <Header />
      {/* Main Content */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default UserLayout;
