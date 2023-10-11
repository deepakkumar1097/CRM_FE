import React from "react";
import Navbar from "./Navbar";

function Layout({ children, linksArray, ColorModeContext, user }) {
  return (
    <div className="layout">
      <Navbar
        links={linksArray}
        ColorModeContext={ColorModeContext}
        user={user}
      />
      {children}
    </div>
  );
}

export default Layout;
