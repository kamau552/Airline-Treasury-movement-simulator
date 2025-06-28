import { useState } from "react";
import React from "react";
import { Search } from "lucide-react";

const Sidebarsearch = () => {
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState("");

  const handleToggle = () => setShowInput((prev) => !prev);

  return (
    <div className="mb-4">
      <div
        className={`flex items-center space-x-2 p-2 text-sm rounded-lg cursor-pointer transition-colors
          hover:bg-blue-950 hover:text-white bg-white text-sidebar-iconColor`}
        onClick={handleToggle}
      >
        <Search size={20} />
        <span className="text-sm font-small">Search</span>
      </div>
      {/* conditional show of input */}
      {showInput && (
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mt-2 w-full p-2 border border-blue-900 rounded-md focus:ring-blue-950"
        />
      )}
    </div>
  );
};

export default Sidebarsearch;
