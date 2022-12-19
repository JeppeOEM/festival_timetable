import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav></Nav>
      {children}
    </div>
  );
};

export default Layout;
