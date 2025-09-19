
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          Blog App
        </Link>
        <div className="flex items-center space-x-2">
          <label htmlFor="light-theme" className="text-gray-600 dark:text-gray-300">
            <input 
              type="radio" 
              id="light-theme"
              name="theme"
              value="light"
              checked={theme === "light"}
              onChange={() => toggleTheme()}
              className="mr-1"
            />
            Light
          </label>

          <label htmlFor="dark-theme" className="text-gray-600 dark:text-gray-300">
            <input 
              type="radio" 
              id="dark-theme"
              name="theme"
              value="dark"
              checked={theme === "dark"}
              onChange={() => toggleTheme()}
              className="mr-1"
            />
            Dark
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
