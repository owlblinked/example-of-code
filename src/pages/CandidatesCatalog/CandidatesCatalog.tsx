import debounce from "lodash.debounce";
import { useCallback, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { SearchBar } from "../../components/UI/Searchbar/Searchbar";
import { CandidatesList } from "../../components/candidates/CandidatesList/CandidatesList";
import { InfoSection } from "../../components/UI/InfoSection/InfoSection";
import { ICandidateItem } from "../../types/candidates";

import styles from "./CandidatesCatalog.module.css";

const TITLE = "Direct Candidates";
const SUBTITLE = "These candidates have applied to you directly";
const SEARCH_PLACEHOLDER = "Search";

export const CandidatesCatalog = () => {
  const candidatesData = useLoaderData() as ICandidateItem[];

  const [filteredCandidates, setFilteredCandidates] =
    useState<ICandidateItem[]>(candidatesData);

  const searchHandler = useCallback(
    debounce((searchQuery: string) => {
      const lowerCaseSearchQuery = searchQuery.toLowerCase();

      const filterCandidate = ([...arg]: string[]) => {
        for (let i = 0; i < arg.length; i++) {
          if (arg[i].toLowerCase().startsWith(lowerCaseSearchQuery)) {
            return true;
          }
        }

        return false;
      };

      const filtered = candidatesData.filter(
        ({ firstName, lastName, location }) =>
          filterCandidate([
            firstName,
            lastName,
            `${firstName} ${lastName}`,
            location,
          ])
      );

      setFilteredCandidates(filtered);
    }, 500),
    [candidatesData]
  );

  return (
    <section className="container">
      <InfoSection title={TITLE} subtitle={SUBTITLE} />

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
  try {
    const response = await fetch("http://localhost:3000/candidates");

    if (!response.ok) {
      throw new Error("Failed to fetch candidates data");
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}
