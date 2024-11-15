import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, onLogout }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   setIsLoggedIn(!!userInfo);
  // }, []);

  // const handleLogout = async () => {
  //   try {
  //     await axios.post("/api/users/logout");
  //     localStorage.removeItem("userInfo");
  //     setIsLoggedIn(false);
  //     navigate("/login");
  //   } catch (error) {
  //     console.error(error);
  //     // Display an error message to the user
  //   }
  // };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">My Website</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="text-white hover:text-gray-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
              <Link to="/register" className="text-white hover:text-gray-300">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
