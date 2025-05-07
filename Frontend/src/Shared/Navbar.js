


// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; 
// import logo from '../../assets/logo.svg'; 
// import { useAuth } from '../../context/Authcontext';
// import { jwtDecode } from 'jwt-decode';
// import axiosInstance from '../../axosinstance';

// const Navbar = ( ) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { isLoggedIn, setIsLoggedIn, email, updateUser } = useAuth();
//   const token = localStorage.getItem('token');
//   const userId = token ? jwtDecode(token).id : null;
//   const userEmail= token ? jwtDecode(token).email:null;
//   const [user, setUser] = useState([]);
//   const [previewImage, setPreviewImage] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const handleAvatarClick = () => {
//     navigate(`/profile/${userId}`); 
//   };

//   const navigate = useNavigate();
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//  const Logout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     updateUser(null); // Optionally reset user state

//     navigate("/login")
//   };

//   useEffect(() => {
//     axiosInstance
//       .get(`http://localhost:5000/user/${userId}`)
//       .then((response) => {
//         setUser(response.data);
//         setPreviewImage(response.data.profile_picture); 
//         setLoading(false);
//       })
//       .catch((error) => console.error(error));
//   }, [userId ]);
//   // useEffect(() => {
//   //   if (userId) {
//   //     axiosInstance
//   //       .get(`http://localhost:5000/user/${userId}`)
//   //       .then((response) => {
//   //         setUser(response.data);
//   //         // setPreviewImage(response.data.profile_picture);
//   //       })
//   //       .catch((error) => {
//   //         console.error(error);
//   //         setUser(null); // Clear user state if the profile is not found
//   //         // setPreviewImage(null);
//   //       });
//   //   } else {
//   //     setUser(null);
//   //     setPreviewImage(null);
//   //   }
//   // }, [userId, user]);

//   return (
//     <nav className="bg-black p-4 shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <Link to = "/" className="flex items-center">
//           <img
//             src={logo} 
//             alt="MyApp Logo"
//             className="h-10"
//           />
//           <span className="text-white ml-2 text-xl font-bold">Book Lovers</span>
//         </Link>

//         <div className="hidden md:flex space-x-8">
//           <Link to="/home" className="text-white hover:text-gray-300">
//             Home
//           </Link>
         
//           {isLoggedIn ? (
//             <>
//           <button onClick={handleAvatarClick}>
            
//           <img
//             src={user.profile_picture} // Avatar image
//             alt="Profile Avatar"
//             className="w-8 h-8 rounded-full hover:ring-2 ring-blue-500"
//           />
         
//            </button>
//            <span className="text-white ml-2">{ user.email }</span>
//               <button
//                 onClick={()=>Logout()}
//                 className="text-white hover:text-gray-300 px-3 border rounded-full border-orange-600 border-2 "
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link to="/login" className="text-white hover:text-gray-300">
//               Login
//             </Link>
//           )}
//         </div>

//         <button
//           onClick={toggleMenu}
//           className="md:hidden text-white focus:outline-none"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>


//         <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
//           <div className="flex flex-col space-y-4 p-4 bg-black">
//             <Link to="/home" className="text-white hover:text-gray-300">
//               Home
//             </Link>
//             {isLoggedIn ? (
//               <>
//                 <Link to={`/profile/${userId}`} className="text-white hover:text-gray-300">
//                   Profile
//                 </Link>
//                 <button
//                   onClick={() => Logout()}
//                   className="text-white hover:text-gray-300"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <Link to="/login" className="text-white hover:text-gray-300">
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react'

const Navbar = () => {
  return (
    <div>
      
    </div>
  )
}

export default Navbar
