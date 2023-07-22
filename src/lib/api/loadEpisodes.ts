import { TV_MAZE_API_ROOT_URL } from "./_constants";

export const suggestEpisode = async (showId: string, seasons: string[]) => {
  const resp = await fetch(
    `${TV_MAZE_API_ROOT_URL}/shows/${showId}/episodes?specials=true`
  );
  const episodes = (await resp.json()) as EpisodeResult[];
  const filteredEpisodes = episodes.filter(
    (e) => e.season && seasons.includes(e.season.toString())
  );
  return filteredEpisodes[Math.floor(Math.random() * filteredEpisodes.length)];
};

export type EpisodeResult = {
  id: number;
  name?: string;
  season?: number;
  number?: number;
  image: {
    medium?: string;
    original: string;
  };
  summary?: string;
};
