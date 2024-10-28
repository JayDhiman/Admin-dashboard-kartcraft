import React from 'react';
import Navbar from './Header/Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

      const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
      };
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar  onToggleSidebar={toggleSidebar} />

      <div className="flex-1 flex">
        <Sidebar open={sidebarOpen} onClose={toggleSidebar} className="" />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-300 bg-opacity-25">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;





