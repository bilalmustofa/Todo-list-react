import { FiSearch, FiMoon, FiChevronDown, FiChevronUp, FiSun } from "react-icons/fi";
import { useState } from "react";

function Navigation({ setDarkMode, darkMode, search, setSearch }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-8 flex items-center gap-4">
        {/* search input */}
        <div className="relative flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search note..."
            className={`w-full rounded-sm border border-[#6C63FF] px-4 py-1 text-sm outline-none ${darkMode ? "placeholder-white" : "placeholder-black"}`}
          />
          <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6C63FF] cursor-pointer" />
        </div>

        {/*filter*/}
        <div className="relative">
          <button
            className="flex items-center justify-around gap-4 rounded-sm bg-[#6C63FF] px-4 py-1 text-sm font-medium text-white cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            ALL
            {isOpen ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
          </button>

          {isOpen && (
            <div className="absolute flex flex-col gap-1 text-sm font-medium bg-white text-[#6C63FF] border border-[#6C63FF] rounded-md py-1">
              <button className="text-left w-full hover:bg-[#d6d5fa] px-2 cursor-pointer">
                ALL
              </button>
              <button className="text-left w-full hover:bg-[#d6d5fa] px-2 cursor-pointer">
                Complete
              </button>
              <button className="text-left w-full hover:bg-[#d6d5fa] px-2 cursor-pointer">
                Incomplete
              </button>
            </div>
          )}
        </div>

        {/* Dark mode */}
        <button onClick={() => setDarkMode(!darkMode)} className="rounded-sm bg-[#6C63FF] p-1 text-white cursor-pointer hover:bg-[#534cc2]">
          {darkMode ? <FiSun size={20}/> : <FiMoon size={20}/>}
        </button>
      </div>
    </>
  );
}

export default Navigation;
