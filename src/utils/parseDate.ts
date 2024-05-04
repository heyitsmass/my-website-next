import { EducationBadgeProps } from "@/education";

export type TDateInfo = EducationBadgeProps["date"]["start"];

const parseDate = ({ year, month, day }: TDateInfo) => {
  return new Date(
    Date.parse(`${year}-${month}-${day}`)
  ).toLocaleDateString(undefined, {
    month: "short",
    year: "numeric",
  });
};

export default parseDate;
