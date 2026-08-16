import { FiSearch, FiMoon, FiChevronDown } from "react-icons/fi";
import { useState } from 'react';

function Navigation() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-8 flex items-center gap-4">
        {/* search input */}
        <div className="relative flex-1">
          <input type="text" placeholder="Search note..." 
                className="w-full rounded-sm border border-[#6C63FF] px-4 py-1 text-sm outline-none"/>
          <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6C63FF]"/>
        </div>

        {/*filter*/}
        <div className="relative">
          <button className="flex items-center gap-2 rounded-sm bg-[#6C63FF] px-3 py-1 text-sm font-medium text-white"
                  onClick={() => setIsOpen(!isOpen)}>
            ALL
            <FiChevronDown size={16} />
          </button>
        </div>

        {/* Dark mode */}
        <button className="rounded-sm bg-[#6C63FF] p-1 text-white">
          <FiMoon size={20} />
        </button>
      </div>
    </>
  );
}

export default Navigation;
