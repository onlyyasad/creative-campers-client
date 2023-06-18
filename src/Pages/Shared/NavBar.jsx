import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useInstructor from "../../hooks/useInstructor";
import useStudent from "../../hooks/useStudent";

const NavBar = () => {
  const { user, logOutUser } = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();

  const activeClass = "text-yellow-400 font-semibold hover:text-yellow-400";
  const inactiveClass = "font-semibold text-white hover:text-yellow-400";

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        localStorage.removeItem("car-access-token");
      })
      .catch();
  };

  const menuItems = (
    <>
      <p>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          Home
        </NavLink>
      </p>
      <p>
        <NavLink
          to="/instructors"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          Instructors
        </NavLink>
      </p>
      <p>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          Classes
        </NavLink>
      </p>
      <p>
        <NavLink to="" className={inactiveClass}>
          About Us
        </NavLink>
      </p>
      <p>
        <NavLink to="" className={inactiveClass}>
          Blogs
        </NavLink>
      </p>
      {user && (
        <p>
          <NavLink
            to={
              (isAdmin && "/dashboard/admin") ||
              (isInstructor && "/dashboard/instructor") ||
              (isStudent && "/dashboard/student")
            }
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Dashboard
          </NavLink>
        </p>
      )}
    </>
  );
  return (
    <div className="bg-blue-700">
      <div className="container mx-auto">
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <div
                tabIndex={0}
                className="menu menu-sm dropdown-content p-4 space-y-4 z-10 shadow rounded-none bg-blue-700 w-96"
              >
                {menuItems}
                {user && (
                  <button
                    onClick={handleLogOut}
                    className="btn btn-outline btn-warning btn-sm normal-case md:hidden"
                  >
                    Sign Out
                  </button>
                )}
              </div>
            </div>
            <p className="normal-case text-white text-xs">
              {" "}
              <span className="font-bold text-white text-xl">Creative</span>
              <span className="text-yellow-400 font-bold text-xl">
                Campers
              </span>{" "}
              <br /> by BlueDot Academy
            </p>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="menu menu-horizontal gap-4 px-1">{menuItems}</div>
          </div>
          <div className="navbar-end gap-4">
            {/* Dark mode, light mode toggle button */}
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                onChange={handleThemeToggle}
                type="checkbox"
                checked={theme === "light" ? false : true}
              />

              {/* sun icon */}
              <BiSun className="swap-on text-2xl text-white" />

              {/* moon icon */}
              <BiMoon className="swap-off text-2xl text-black" />
            </label>
            {user ? (
              <>
                <img
                  className="btn btn-circle border-none"
                  src={user.photoURL}
                  alt=""
                />
                <button
                  onClick={handleLogOut}
                  className="btn btn-outline btn-warning btn-sm normal-case hidden md:block"
                >
                  Sign Out
                </button>{" "}
              </>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline btn-warning btn-sm normal-case">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
