import styles from "./Card.module.css";

interface ICardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children }: ICardProps) => (
  <div className={`${styles.card} ${className}`}>{children}</div>
);
