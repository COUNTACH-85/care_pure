import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-green-700 p-4 text-white shadow-lg">
            <div className="max-w-5xl mx-auto flex justify-between">
                <h1 className="text-lg font-semibold">HealthCare App</h1>
                <ul className="flex gap-4">
                    <li><Link to="/home" className="hover:text-green-300">Home</Link></li>
                    <li><Link to="/diet-generator" className="hover:text-green-300">Diet Generator</Link></li>
                    <li><Link to="/blog" className="hover:text-green-300">Blog</Link></li>
                    <li><Link to="/login" className="hover:text-green-300">Login</Link></li>
                    {/* <li><Link to="/signup" className="hover:text-green-300">Sign Up</Link></li> */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;