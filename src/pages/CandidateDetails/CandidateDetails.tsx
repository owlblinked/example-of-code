import { useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../../components/UI/Card/Card";
import { ICandidateItem } from "../../types/candidates";
import { generateCountryFlagURL } from "../../helpers/generateCountryFlagURL";
import styles from "./CandidateDetails.module.css";

const FLAG_SIZE = 64;

export const CandidateDetails = () => {
  const candidate = useLoaderData() as ICandidateItem;

  const fullName = useMemo(
    () => `${candidate.firstName} ${candidate.lastName}`,
    [candidate.firstName, candidate.lastName]
  );
  const countryFlag = useMemo(
    () => generateCountryFlagURL(candidate.country, FLAG_SIZE),
    [candidate.country]
  );

  const renderDetail = (label: string, info: string) => (
    <div className="candidate-details">
      <span className="label">{label}</span>
      <span className="info">{info}</span>
    </div>
  );

  return (
    <section className="container">
      <Card className={styles.containerCard}>
        <div>
          <header className={styles.candidateHeader}>
            <img
              src={countryFlag}
              alt={`${candidate.country} flag`}
              aria-hidden
            />
            <div className={styles.wrapperInfo}>
              <h2 className="title">{fullName}</h2>
              {candidate.verified && (
                <span className={styles.verified}>borderless verified</span>
              )}
            </div>
          </header>
          <img
            className={styles.image}
            src={candidate.image}
            alt={fullName}
            width="100%"
          />
        </div>
        <div>
          <h2 className="title">Overview</h2>
          <span className={styles.badge}>{candidate.role}</span>

          {/* details about candidate */}
          {renderDetail("Full Name", fullName)}
          {renderDetail("Availability", candidate.role)}
          {renderDetail("Nationality", candidate.nationality)}
          {renderDetail(
            "Location",
            `${candidate.location}, ${candidate.country}`
          )}
        </div>
      </Card>
    </section>
  );
};

export async function loader({ _, params }: any) {
  // in a perfect world it should be this
  // const response = await fetch(`http://localhost:3000/candidates/${params.id}`);

  const response = await fetch("http://localhost:3000/candidates");

  if (!response.ok) {
    throw new Error("Failed to fetch candidate details");
  } else {
    const data = await response.json();
    return data.find((user: ICandidateItem) => user.id === params.id);
  }
}
