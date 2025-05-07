import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
      });
    
      const [showPassword, setShowPassword] = useState(false);
      const navigate = useNavigate();

      const handleChange = (e) => {
        setLoginForm({
          ...loginForm,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('Form submitted:', loginForm);
        try {
            const response = await axios.post("http://localhost:5000/api/Users/Login", loginForm)
            if(response.data.message === "Login successful") {
                const token= response.data.token;
                localStorage.setItem("Token",token )
                navigate('/')
            }
        } catch (error) {
            console.error("Signup failed:", error.response ? error.response.data : error.message);

        }
      };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="flex flex-col md:flex-row w-full max-w-[900px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left side - Full-height Book image */}
        <div className="w-full md:w-1/2 h-full hidden md:block">
          <img src="/book.png" alt="Book" className="h-full w-full object-cover" />
        </div>

        {/* Right side - Login Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Login</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name='email'
              value={loginForm.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* Password with toggle */}
            <div className="relative">
              <input
                name='password'
                value={loginForm.password}
                onChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div className="pt-8">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition font-bold text-lg"
              >
                Signin
              </button>
            </div>
          </form>


          <div className="py-4 text-center flex flex-row space-x-2">
            <p>Don’t have an account?</p>
            <Link to="/signup" className="text-blue-500 hover:underline">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
