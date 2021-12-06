import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>menu</nav>
      <div>{children}</div>
    </>
  );
};
