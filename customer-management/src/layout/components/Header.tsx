import React from "react";

import Logo from "../../assets/new-logo.png";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 w-full p-1 bg-white/30 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-lg font-semibold flex gap-16">
          <img src={Logo} alt="V" className="w-10 ml-10" />
          <h1 className="text-center">HEADER</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
