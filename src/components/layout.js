import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/header">Header</Link>
          </li>
          <li>
            <Link to="/footer">Footer</Link>
          </li>
          <li>
            <Link to="/bodyusestate">useState</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
