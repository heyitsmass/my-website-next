import {
  FILTER,
  SkillAttributeItems,
  SkillGroup,
  SortDirection,
  collector,
  filterOptions,
  skillGroups,
  sortOptions,
} from "@/me";
import { useMemo } from "react";

const baseItems = {
  skillGroup: skillGroups,
  sortBy: sortOptions,
  order: ["None", "ascending", "descending"] as SortDirection[],
};

const useSkillItems = ({
  skillGroup,
  order,
}: {
  skillGroup: SkillGroup;
  order: SortDirection;
}) => {
  return {
    ...baseItems,

    filterBy: [FILTER.BY.ALL, ...filterOptions[skillGroup]],

    ...sortOptions.reduce((acc, option) => {
      return {
        ...acc,
        [option]: [FILTER.BY.ALL, ...collector(option, order)],
      };
    }, {} as SkillAttributeItems),
  };
};

export default useSkillItems;
