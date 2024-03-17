import { memo } from "react";
import { Link } from "react-router-dom";
import { ICandidateItem } from "../../../types/candidates";
import { Card } from "../../UI/Card/Card";
import { generateCountryFlagURL } from "../../../helpers/generateCountryFlagURL";
import styles from "./CandidateItem.module.css";

interface ICandidateItemProps {
  item: ICandidateItem;
}

const FLAG_SIZE = 48;

export const CandidateItem = memo(({ item }: ICandidateItemProps) => {
  const fullName = `${item.firstName} ${item.lastName}`;
  const countryFlag = generateCountryFlagURL(item.country, FLAG_SIZE);

  const renderDetail = (label: string, info: string) => (
    <div className="candidate-details">
      <span className="label">{label}</span>
      <span className="info">{info}</span>
    </div>
  );

  return (
    <li>
      <Link to={`/candidate/${item.id}`} className={styles.item}>
        <Card>
          <img className={styles.image} src={item.image} alt={fullName} />
          <header className={styles.header}>
            <p className={styles.name}>{fullName}</p>
            <img src={countryFlag} alt={`${item.country} flag`} aria-hidden />
          </header>
          {item.verified && (
            <span className={styles.badgeText}>borderless verified</span>
          )}

          {/* details about candidate */}
          {renderDetail("Location", item.location)}
          {renderDetail("Role", item.role)}
        </Card>
      </Link>
    </li>
  );
});
