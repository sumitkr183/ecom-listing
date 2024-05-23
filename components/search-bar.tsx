import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
  return (
    <div className="relative flex-1">
      <input
        type="search"
        className="block w-full p-4 pe-10 text-sm text-gray-900 border border-gray-300 bg-light focus:outline-none"
        placeholder="Search for anything..."
      />
      <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
        <CiSearch className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
};
