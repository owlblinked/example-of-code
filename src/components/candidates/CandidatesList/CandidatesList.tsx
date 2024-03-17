import { memo } from "react";
import { CandidateItem } from "../CandidateItem/CandidateItem";
import { ICandidateItem } from "../../../types/candidates";
import styles from "./CandidatesList.module.css";

interface ICandidatesListProps {
  data: ICandidateItem[];
  loading?: boolean;
}

const LOADING_TEXT = "Loading candidates...";
const ERROR_TEXT = "No candidates available. Please check back later.";

export const CandidatesList = memo(
  ({ data, loading = false }: ICandidatesListProps) => {
    if (loading) {
      return <p>{LOADING_TEXT}</p>;
    }

    if (data.length === 0) {
      return <p>{ERROR_TEXT}</p>;
    }

    return (
      <ul className={styles.candidatesGrid}>
        {data.map((item) => (
          <CandidateItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }
);
