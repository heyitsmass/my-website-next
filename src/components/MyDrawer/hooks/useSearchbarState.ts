import { useState } from "react";

/**
 * Dont use this hook directly, use {@linkcode useSearchbar} instead
 * @returns Searchbar State Handlers
 */
const useSearchbarState = ({ height = 60 }: { height?: number }) => {
  const [pre_search, setSearch] = useState("");
  return {
    value: pre_search,
    height,
    set: (value: string) => setSearch((prev) => (prev = value)),
    clear: () => setSearch(""),
  } as const;
};

export default useSearchbarState;
