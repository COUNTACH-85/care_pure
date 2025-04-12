import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../createClient";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(session);
    };
  
    getSession(); 
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(session);
    });
  
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);
  

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <nav className="bg-green-700 p-4 text-white shadow-lg relative">
      <div className="mx-auto flex justify-between items-center gap-1.5 md:gap-4">
        <h1 className="text-lg font-semibold">HealthCare App</h1>
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul className="hidden md:flex gap-4">
          <li><NavLink to="/" className={({isActive})=>`hover:text-green-300 ${isActive? "text-green-300" : "text-white"}`}>Home</NavLink></li>
          <li><NavLink to="/dashboard" className={({isActive})=>`hover:text-green-300 ${isActive? "text-green-300" : "text-white"}`}>Dashboard</NavLink></li>
          <li><NavLink to="/diet-generator" className={({isActive})=>`hover:text-green-300 ${isActive? "text-green-300" : "text-white"}`}>Diet Generator</NavLink></li>
          <li><NavLink to="/menstrualcycle" className={({isActive})=>`hover:text-green-300 ${isActive? "text-green-300" : "text-white"}`}>Menstrual Cycle</NavLink></li>
          <li><NavLink to="/blog" className={({isActive})=>`hover:text-green-300 ${isActive? "text-green-300" : "text-white"}`}>Blog</NavLink></li>
          <li><NavLink to="/games" className={({isActive})=>`hover:text-green-300 ${isActive? "text-green-300" : "text-white"}`}>Games</NavLink></li>
          {isLoggedIn ? (
            <>
              <li><Link to="/profile" className="hover:text-green-300">Profile</Link></li>
              {/* <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-green-300"
                >
                  Sign Out
                </button>
              </li> */}
            </>
          ) : (
            <>
              <li><Link to="/login" className="hover:text-green-300">Login</Link></li>
              <li><Link to="/signup" className="hover:text-green-300">Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="absolute top-10 right-10 w-44 h-auto bg-green-800 bg-opacity-50 flex flex-col items-center justify-center z-50 rounded-lg"
          role="menu"
        >
          <ul className="flex flex-col gap-5 text-sm">
            <li><NavLink to="/" className={({isActive})=>`hover:text-green-300 ${isActive? "text-green-300" : "text-white"}`} onClick={toggleMenu} role="menuitem">Home</NavLink></li>
            <li><NavLink to="/dashboard"  className={({isActive})=>`hover:text-green-300 ${isActive? "text-green-300" : "text-white"}`} onClick={toggleMenu} role="menuitem">Dashboard</NavLink></li>
            <li><NavLink to="/dNavLinkiet-generator"  className={({isActive})=>`hover:text-green-300 ${isActive? "text-green-300" : "text-white"}`} onClick={toggleMenu} role="menuitem">Diet Generator</NavLink></li>
            <li><NavLink to="/menstrualcycle"  className={({isActive})=>`hover:text-green-300 ${isActive? "text-green-300" : "text-white"}`} onClick={toggleMenu} role="menuitem">Menstrual Cycle</NavLink></li>
            <li><NavLink to="/blog"  className={({isActive})=>`hover:text-green-300 ${isActive? "text-green-300" : "text-white"}`} onClick={toggleMenu} role="menuitem">Blog</NavLink></li>
            <li><NavLink to="/games"  className={({isActive})=>`hover:text-green-300 ${isActive? "text-green-300" : "text-white"}`} onClick={toggleMenu} role="menuitem">Games</NavLink></li>
            {isLoggedIn ? (
              <>
                <li><Link to="/profile" className="hover:text-green-300" onClick={toggleMenu} role="menuitem">Profile</Link></li>
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="hover:text-green-300"
                    role="menuitem"
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="hover:text-green-300" onClick={toggleMenu} role="menuitem">Login</Link></li>
                <li><Link to="/signup" className="hover:text-green-300" onClick={toggleMenu} role="menuitem">Sign Up</Link></li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;