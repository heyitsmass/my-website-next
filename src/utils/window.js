/**
 * Creates a window from the provided data array
 * @param data Array of data to be paginated
 * @param pageLength Number of items per page
 * @param sortBy Field to sort by - must be a keyof TSkill and a number
 * @returns Array of paginated data
 */

const createWindow = ({ pageLength = 3, ...props }) => {
  const { data, order, sortBy, filterBy } = props;

  let tmp = data;

  if (filterBy) {
    const { mode, value } = filterBy;

    if (value !== "All")
      switch (mode) {
        case "inclusive": //include result
          tmp = tmp.find((v) => v.name === value);
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