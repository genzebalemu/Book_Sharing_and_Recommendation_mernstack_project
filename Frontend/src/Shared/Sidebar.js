// import React, { useState } from 'react';
// import { Link} from 'react-router-dom'; // Ensure useNavigate is imported

// const Sidebar = () => {
//   const [isBooksOpen, setIsBooksOpen] = useState(false); // Manage Books dropdown
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Manage Sidebar visibility
//   // const navigate = useNavigate(); // Initialize useNavigate
  
//   // const handleCreateGroup = () => {
//   //   navigate('/CreateGroupPage'); // Navigate to the group creation page
//   // };

//   // Menu items for the sidebar
//   const menuItems = [
//     { label: 'Home', icon: '🏠', link: '/' },
//     { label: 'Categories', icon: '📂', link: '/categories' },
//     { label: 'Favorites', icon: '❤️', link: '/profile/favorites' },
//     { label: 'Settings', icon: '⚙️', link: '/settings' },
//     { label: 'AllUser', icon: '👤', link: '/allprofiles' },
//     { label: 'create new group', icon: '👤👤', link: '/CreateGroupPage' },

//   ];

//   return (
//     <div className={`min-h-screen bg-black text-white transition-all ${isSidebarOpen ? 'w-100' : 'w-100'}`}>
//       {/* Hamburger Button */}
//       <button
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         className="text-white text-2xl p-3 absolute top-4 left-4"
//       >
//         ☰
//       </button>

//       {/* Profile Section */}
//       <div className="p-6 flex flex-col items-center">
//         {isSidebarOpen && (
//           <>
//             <img
//               src="https://via.placeholder.com/100"
//               alt="Profile"
//               className="w-24 h-24 rounded-full border-2 border-gray-500 mb-4"
//             />
//             <h2 className="text-lg font-semibold">John Doe</h2>
//             <p className="text-gray-400 text-sm">Book Lover</p>
//           </>
//         )}
//       </div>

//       {/* Navigation Menu */}
//       <nav className="flex-grow">
//         <ul className="space-y-2">
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               <Link
//                 to={item.link}
//                 className="flex items-center px-4 py-2 hover:bg-gray-700 transition-all"
//               >
//                 <span className="mr-3">{item.icon}</span>
//                 {isSidebarOpen && item.label}
//               </Link>
//             </li>
//           ))}

//           {/* Books Dropdown */}
//           <li>
//             <button
//               onClick={() => setIsBooksOpen(!isBooksOpen)}
//               className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-700 transition-all"
//             >
//               <span className="mr-3">📚</span>
//               {isSidebarOpen && 'Books'}
//               <span className={`ml-auto ${isSidebarOpen ? '' : 'hidden'}`}>
//                 {isBooksOpen ? '▼' : '►'}
//               </span>
//             </button>
//             {isBooksOpen && (
//               <ul className="pl-8 space-y-2 mt-2">
//                 <li>
//                   <Link
//                     to="/createBookPage"
//                     className="flex items-center px-4 py-2 hover:bg-gray-600 transition-all"
//                   >
//                     Create Book
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/updateBookPage"
//                     className="flex items-center px-4 py-2 hover:bg-gray-600 transition-all"
//                   >
//                     Update Book
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/detailBookPage"
//                     className="flex items-center px-4 py-2 hover:bg-gray-600 transition-all"
//                   >
//                     Detail of Book
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/my-books"
//                     className="flex items-center px-4 py-2 hover:bg-gray-600 transition-all"
//                   >
//                     My Books
//                   </Link>
//                 </li>
                
//               </ul>
//             )}
//           </li>
//         </ul>
//       </nav>

//       {/* Footer */}
//       <div className="p-4 text-gray-400 text-sm">
//         {isSidebarOpen ? `© ${new Date().getFullYear()} Book Lovers` : '©'}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Sidebar = () => {
  const [isBooksOpen, setIsBooksOpen] = useState(false); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  const menuItems = [
    { label: 'Home', icon: '🏠', link: '/home' },
    { label: 'Favorites', icon: '❤️', link: '/profile/favorites' },
    { label: 'Settings', icon: '⚙️', link: '/settings' },
    { label: 'AllUser', icon: '👤', link: '/allprofiles' },
    { label: 'Create New Group', icon: '👤👤', link: '/CreateGroupPage' },
  ];

  return (
    <div
      className={`min-h-screen bg-black text-white transition-all ${
        isSidebarOpen ? 'w-64' : 'w-20'
      } flex flex-col`}
    >
      {/* Hamburger Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="text-white text-2xl p-3 absolute top-4 left-4 z-50 sm:hidden"
      >
        ☰
      </button>

      {/* Navigation Menu */}
      <nav className="flex-grow overflow-auto">
        <ul className="space-y-2 p-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="flex items-center px-4 py-2 hover:bg-gray-700 transition-all"
              >
                <span className="mr-3">{item.icon}</span>
                {isSidebarOpen && item.label}
              </Link>
            </li>
          ))}

          {/* Books Dropdown */}
          <li>
            <button
              onClick={() => setIsBooksOpen(!isBooksOpen)}
              className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-700 transition-all"
            >
              <span className="mr-3">📚</span>
              {isSidebarOpen && 'Books'}
              <span className={`ml-auto ${isSidebarOpen ? '' : 'hidden'}`}>
                {isBooksOpen ? '▼' : '►'}
              </span>
            </button>
            {isBooksOpen && (
              <ul className="pl-8 space-y-2 mt-2">
                <li>
                  <Link
                    to="/createBookPage"
                    className="flex items-center px-4 py-2 hover:bg-gray-600 transition-all"
                  >
                    Create Book
                  </Link>
                </li>
                
            
                
                <li>
                  <Link
                    to="/Allbooks"
                    className="flex items-center px-4 py-2 hover:bg-gray-600 transition-all"
                  >
                    All Books
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Mybooks"
                    className="flex items-center px-4 py-2 hover:bg-gray-600 transition-all"
                  >
                    My Books
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 text-gray-400 text-sm">
        {isSidebarOpen ? `© ${new Date().getFullYear()} Book Lovers` : '©'}
      </div>
    </div>
  );
};

export default Sidebar;
