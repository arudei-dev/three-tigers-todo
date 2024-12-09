export const FILTER_LIST = [
  {
    id: "personal",
    text: "PERSONAL",
  },
  {
    id: "work",
    text: "WORK",
  },
] as const;

export type FilterIDs = (typeof FILTER_LIST)[number]["id"];
