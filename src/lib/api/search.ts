import { TV_MAZE_API_ROOT_URL } from "./_constants";

export const search = async (query: string) => {
  const resp = await fetch(`${TV_MAZE_API_ROOT_URL}/search/shows?q=${query}`);
  return (await resp.json()) as SearchResult[];
};

export type SearchResult = {
  score: number;
  show: {
    id: number;
    url: string;
    name: string;
    officialSite?: string;
    summary: string;
    image: {
      medium?: string;
      original: string;
    };
  };
};
