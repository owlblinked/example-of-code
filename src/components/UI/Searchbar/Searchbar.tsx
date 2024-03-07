import { ChangeEventHandler, useState } from "react";
import styles from "./Searchbar.module.css";

interface ISearchProps {
  placeholder: string;
  searchHandler: (searchQuery: string) => void;
}

export const SearchBar = ({ searchHandler, placeholder }: ISearchProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    setSearchValue(e.target.value);
    searchHandler(e.target.value.toLowerCase()); // Call the parent component's searchHandler
  };

  return (
    <input
      type="search"
      value={searchValue}
      className={styles.searchbar}
      placeholder={placeholder}
      onChange={handleChange}
      aria-label={placeholder}
      role="search"
    />
  );
};
