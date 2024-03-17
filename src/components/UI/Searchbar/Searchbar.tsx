import { ChangeEventHandler, memo } from "react";
import styles from "./Searchbar.module.css";

interface ISearchProps {
  placeholder: string;
  searchHandler: (searchQuery: string) => void;
}

export const SearchBar = memo(
  ({ searchHandler, placeholder }: ISearchProps) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      e.preventDefault();

      searchHandler(e.target.value);
    };

    return (
      <input
        type="search"
        className={styles.searchbar}
        placeholder={placeholder}
        onChange={handleChange}
        aria-label={placeholder}
        role="search"
      />
    );
  }
);
