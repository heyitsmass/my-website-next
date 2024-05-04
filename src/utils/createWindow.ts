import { FILTER, SkillConfig, SkillGroup, TSkill } from "@/me";

export type WindowArgs<T extends SkillGroup = SkillGroup> = {
  /**
   * The data to create a window of
   */
  data: TSkill<T>[];
  /** number of results to display per page on the carousel
   * @default 3
   */
  pageLength?: number;
} & Pick<SkillConfig<T>, "sortBy" | "filterBy" | "order">;

/**
 * Creates a window from the provided data array
 * @param data Array of data to be paginated
 * @param pageLength Number of items per page
 * @param sortBy Field to sort by - must be a keyof TSkill and a number
 * @returns Array of paginated data
 */

const createWindow = <S extends SkillGroup>({
  pageLength = 3,
  ...props
}: WindowArgs<S>) => {
  const { data, order, sortBy, filterBy } = props;

  let tmp: TSkill<S> | TSkill<S>[] = data;

  if (filterBy) {
    const { mode, value } = filterBy;

    if (value !== FILTER.BY.ALL)
      switch (mode) {
        case "inclusive": //include result
          tmp = tmp.find((v) => v.name === value)!;
          break;
        default: //exclude
          tmp = tmp.filter((v) => v.name === value);
      }
  }

  if (tmp instanceof Array) {
    switch (order) {
      case "ascending":
        tmp.sort((a, b) => a[sortBy] - b[sortBy]);
      case "descending":
        tmp.sort((a, b) => b[sortBy] - a[sortBy]);
      default:
        break;
    }

    return Array.from(
      { length: Math.ceil(tmp.length / pageLength) },
      (_, i) => {
        const start = i * pageLength;
        return tmp.slice(start, start + pageLength);
      }
    );
  }

  return tmp;
};

export default createWindow;
