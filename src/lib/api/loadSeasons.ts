import { TV_MAZE_API_ROOT_URL } from "./_constants";

export const loadSeasons = async (showId: string) => {
  const resp = await fetch(`${TV_MAZE_API_ROOT_URL}/shows/${showId}/seasons`);
  return (await resp.json()) as SeasonsResult[];
};

export type SeasonsResult = {
  id: number;
  number: number;
  name?: string;
  image: {
    medium?: string;
    original: string;
  };
  summary?: string;
};
