import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/logo.webp";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)
  console.log(user);

  const handelSignOut = () =>{
    logOut()
    .then()
    .catch()

  }

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    // Close the mobile menu when opening the dropdown
    setMobileMenuOpen(false);
  };

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    // Close the dropdown when opening the mobile menu
    setDropdownOpen(false);
  };

  const NavLinks = (
    <>
      <nav className="flex   gap-3  md:gap-4 lg:gap-10 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </>
  );

  const ProfileNav = <>

      <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><NavLink to='/'>Dashboard</NavLink></li>

      <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><NavLink to='/balance'>Balance</NavLink></li>


     {
      user ?
      <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><Link to='/'><button onClick={handelSignOut} >Sign Out</button></Link></li>
      :
      <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><NavLink to='/login'>Login</NavLink></li>
     }


      {/* <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><NavLink to='/login'>Login</NavLink></li> */}
  
  </>

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className=" flex flex-wrap items-center justify-between mx-auto mt-8 mb-10">
        <Link className="flex items-center">
          <img src={logo} className="h-12 mr-3" alt="" />
          <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">
            Fitness Hub
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          <div className="relative">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isDropdownOpen}
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>

            {
              user ? <img
              className="w-8 h-8 rounded-full"
              src={user.photoURL}
              alt="user photo"
            /> 
            :
            <img
                className="w-8 h-8 rounded-full"
                src={logo}
                alt="user photo"
              />
            }
            </button>


            {/* Dropdown menu */}


            <div
              className={`z-50 ${
                isDropdownOpen ? "block" : "hidden"
              } absolute right-0 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {
                    user ? <p>Welcome, {user.displayName}</p>
                    :
                    <p>Your Name</p>
                  }
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                 {
                  user ? <p>{user.email}</p>
                  :
                  <p>Your Email here</p>
                 }
                </span>
              </div>
              

              <ul className="py-2" aria-labelledby="user-menu-button">
                {ProfileNav}
              </ul>


              
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isDropdownOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-5 h-5 ${isMobileMenuOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen ? (
          <div
            className="items-center justify-between md:hidden w-full mt-4 border border-gray-100 rounded-lg bg-gray-50 bg-opacity-90 backdrop-blur-md dark:bg-gray-800 dark:border-gray-700 dark:bg-opacity-90 dark:backdrop-blur-md"
            id="navbar-mobile-menu"
          >
            <ul className="flex flex-col p-4 space-y-4">
              <li className="block text-gray-900 dark:text-white hover:text-blue-700">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-900 dark:text-white hover:text-blue-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-900 dark:text-white hover:text-blue-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-900 dark:text-white hover:text-blue-700"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-900 dark:text-white hover:text-blue-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        ) : null}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* <li
              className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
            >
              <NavLink>Home</NavLink>
            </li> */}
            {NavLinks}

            {/* <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
