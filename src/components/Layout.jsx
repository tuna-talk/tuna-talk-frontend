import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
};
export default Layout;
