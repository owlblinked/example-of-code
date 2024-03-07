import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../../components/UI/Card/Card";
import { SearchBar } from "../../components/UI/Searchbar/Searchbar";
import { CandidatesList } from "../../components/candidates/CandidatesList/CandidatesList";
import { ICandidateItem } from "../../types/candidates";

import styles from "./CandidatesCatalog.module.css";

const TITLE = "Direct Candidates";
const SUBTITLE = "These candidates have applied to you directly";
const SEARCH_PLACEHOLDER = "Search";

export const CandidatesCatalog = () => {
  const candidatesData = useLoaderData() as ICandidateItem[];

  const [filteredCandidates, setFilteredCandidates] =
    useState<ICandidateItem[]>(candidatesData);

  const searchHandler = (searchQuery: string) => {
    const filtered = candidatesData.filter(
      (user) =>
        user.firstName.toLowerCase().startsWith(searchQuery) ||
        user.lastName.toLowerCase().startsWith(searchQuery) ||
        `${user.firstName} ${user.lastName}`
          .toLowerCase()
          .startsWith(searchQuery)
    );
    setFilteredCandidates(filtered);
  };

  return (
    <section className="container">
      <Card>
        <h1 className="title">{TITLE}</h1>
        <p className="subtitle">{SUBTITLE}</p>
      </Card>
      <div className={styles.options}>
        <SearchBar
          placeholder={SEARCH_PLACEHOLDER}
          searchHandler={searchHandler}
        />
      </div>
      <CandidatesList data={filteredCandidates} />
    </section>
  );
};

export async function loader() {
  const response = await fetch("http://localhost:3000/candidates");

  if (!response.ok) {
    throw new Error("Failed to fetch candidates data");
  } else {
    const data = await response.json();
    return data;
  }
}
