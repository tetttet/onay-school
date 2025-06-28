import React from "react";

type SearchProps = {
  search: string;
  setSearch: (value: string) => void;
};

const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Поиск курсов..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Search;
