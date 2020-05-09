import { Memories } from "../Content";

export const getURLFromIndex = (index: number) => {
  if (index === 1 || index === 2) {
    return "home";
  }
  if (index === 3) {
    return "lucaspelloni";
  }
  return Memories[index - 4].url;
};

export const getIndexFromURL = (url: string): number => {
  if (url === "home") {
    return 1;
  }
  if (url === "lucaspelloni") {
    return 3;
  }
  const m = Memories.find(u => u.url === url);
  return Memories.indexOf(m || Memories[0]) + 4;
};
