import React from "react";

interface SidebarProps {
  filters: {
    category: string[];
  };
  handleFilterChange: (type: string, value: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleFilterChange }) => {
  return (
    <aside className="p-4 border-r dark:border-r-[1px] dark:border-[#94a1b2] lg:max-w-[20%] text-[#E2BFD9] dark:text-white space-y-4">
      <h2 className="text-lg font-semibold">Categories</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          "Development",
          "Design",
          "Video",
          "Writing",
          "Marketing",
          "Music",
        ].map((category) => (
          <button
            key={category}
            className="px-3 py-1 border dark:border-0 rounded bg-[#C8A1E0] text-[#674188] dark:bg-[#7f5af0] dark:text-white"
          >
            {category}
          </button>
        ))}
      </div>

      <h2 className="text-lg font-semibold">Filters</h2>
      <div className="mb-4">
        <label className="block mb-2">Budget</label>
        <input type="range" min="0" max="500" className="w-full" />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Timeline</label>
        <select className="w-full border rounded">
          <option>Select timeline</option>
          <option>1 week</option>
          <option>2 weeks</option>
          <option>1 month</option>
          <option>3 months</option>
        </select>
      </div>

      <div>
        <label className="block mb-2">Experience Level</label>
        <select className="w-full border rounded">
          <option>Select experience level</option>
          <option>Entry</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </select>
      </div>
    </aside>
  );
};

export default Sidebar;
