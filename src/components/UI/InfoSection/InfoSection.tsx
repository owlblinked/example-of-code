import { memo } from "react";
import { Card } from "../Card/Card";

interface IInfoSection {
  title: string;
  subtitle: string;
}

export const InfoSection = memo(({ title, subtitle }: IInfoSection) => (
  <Card>
    <h1 className="title">{title}</h1>
    <p className="subtitle">{subtitle}</p>
  </Card>
));
