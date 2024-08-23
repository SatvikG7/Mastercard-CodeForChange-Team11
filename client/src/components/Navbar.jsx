import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import LogoutButton from "./auth/LogOut";
import "./styles/Navbar.css";

// eslint-disable-next-line react/prop-types
const Navbar = ({ page }) => {
  const [menu, setMenu] = useState(false);
  const { user } = useAuthContext();

  const simple =
    "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  const highlight =
    "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";
    return (
        <>
          {/* Main Navigation Bar */}
          <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
              <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ICVLVxM2YETZjJFi6-yHr1D4Y_ul8RrY_A&s" className="h-10" alt="MasterCard Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                 <h1>Y4D - Beneficiary Management System</h1>
                </span>
              </a>
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <img src="https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_1280.png" className="h-9" alt="whastapp"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iN0nGbRtwii1D4Ft4vkO729jmT_1t3fdCw&s" className="h-5" alt="call"/>
                <a href="tel:5541251234" className="text-sm text-gray-500 dark:text-white hover:underline">
                  (+91) 8282828811
                </a>
                {!user ? (
                  <li>
                    <a href="/login" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">
                      Login
                    </a>
                  </li>
                ) : (
                  <LogoutButton />
                )}
                {/* Button to the right of Login */}
              </div>
            </div>
          </nav>
      
          {/* Menu Toggle Button */}
          <button
            onClick={() => {
              setMenu(!menu);
            }}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={menu}>
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
      
          {/* User Role Display */}
          {user ? (
            <p className="text-white">
              {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              {"'s"} Login
            </p>
          ) : null}
      
          {/* Dropdown Menu */}
          <div
            className={
              menu
                ? "w-full md:block md:w-auto"
                : "hidden w-full md:block md:w-auto"
            }
            id="navbar-default">
            <nav className="bg-[rgb(230,169,126)] dark:bg-gray-700">
              <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                  <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                    <li>
                      <a href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">
                        <b>Home</b>
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="text-gray-900 dark:text-white hover:underline py-1">
                        <b>Programs</b>
                      </a>
                    </li>
                    <li>
                      <a href="/programs" className="text-gray-900 dark:text-white hover:underline py-1">
                        <b>Dashboard</b>
                      </a>
                    </li>
                    <li>
                      <a href="/donation" className="text-gray-900 dark:text-white hover:underline py-1">
                        <b>Donation</b>
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="text-gray-900 dark:text-white hover:underline py-1">
                      <b>About us</b>
                      </a>
                    </li>

                    {user && user.role === "admin" ? (
                      <li>
                        <a href="/admin" className="text-gray-900 dark:text-white hover:underline">
                          Admin Dashboard
                        </a>
                      </li>
                      
                    ) : null}

                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </>
      );
    }
        

export default Navbar;

    // <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 w-full z-10">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    //       <img src="/mc.svg" className="w-8 h-8" alt="Logo" />
    //       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
    //         {"<Code for Change>"} Team 11
    //       </span>
    //     </a>
    //     <button
    //       onClick={() => {
    //         setMenu(!menu);
    //       }}
    //       data-collapse-toggle="navbar-default"
    //       type="button"
    //       className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //       aria-controls="navbar-default"
    //       aria-expanded="false">
    //       <span className="sr-only">Open main menu</span>
    //       <svg
    //         className="w-5 h-5"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 17 14">
    //         <path
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M1 1h15M1 7h15M1 13h15"
    //         />
    //       </svg>
    //     </button>
    //     {user ? (
    //       <p className="text-white">
    //         {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
    //         {"'s"} Login
    //       </p>
    //     ) : null}
    //     <div
    //       className={
    //         menu
    //           ? "w-full md:block md:w-auto"
    //           : "hidden w-full md:block md:w-auto"
    //       }
    //       id="navbar-default">
    //       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center justify-center">
    //         <li>
    //           <a href="/" className={page === "home" ? highlight : simple}>
    //             Home
    //           </a>
    //         </li>

    //         <li>
    //           <a
    //             href="/about"
    //             className={page === "about" ? highlight : simple}>
    //             About
    //           </a>
    //         </li>

    //         {user && user.role === "admin" ? (
    //           <>
    //             <li>
    //               <a
    //                 href="/admin"
    //                 className={page === "admin" ? highlight : simple}>
    //                 Admin Dashboard
    //               </a>
    //             </li>
    //           </>
    //         ) : null}
    //         <li>
    //           <a
    //             href="/ai"
    //             className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:shadow-lg">
    //             <button className="nav-btn">AI</button>
    //           </a>
    //         </li>

    //         {!user ? (
    //           <>
    //             <li>
    //               <a
    //                 href="/login"
    //                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
    //                 Login
    //               </a>
    //             </li>
    //           </>
    //         ) : (
    //           <>
    //             <LogoutButton />
    //           </>
    //         )}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

