import { suggestEpisode } from "@/lib/api/loadEpisodes";
import { Flex, styled } from "@/lib/styled-system/jsx";
import { PropsWithChildren } from "react";
import { RegenerateButton } from "@/lib/ui/RegenerateButton";

export type EpisodePageProps = PropsWithChildren & {
  params: {
    showId: string;
    seasons: string;
  };
};

export default async function EpisodePage({
  params: { showId, seasons: seasonsStr },
}: EpisodePageProps) {
  const seasons = decodeURIComponent(seasonsStr).split(",");
  const episode = await suggestEpisode(showId, seasons);

  return (
    <Flex
      flexDir={"column"}
      alignItems={"center"}
      gap={2}
      w={{ base: "95vw", lg: "60rem" }}
      p={{ base: 4, lg: 16 }}
      borderRadius={"lg"}
      bg="white"
      boxShadow={"md"}
    >
      <styled.h1 fontSize={"lg"}>You should watch...</styled.h1>
      <styled.h2 fontSize={"2xl"}>{episode.name}</styled.h2>
      <styled.span>
        Season {episode.season}, Episode {episode.number}
      </styled.span>
      <styled.img
        src={episode?.image?.original}
        h={{ base: "25vh", lg: "200px" }}
        w="auto"
      />
      <styled.span
        dangerouslySetInnerHTML={{ __html: episode.summary as string }}
      />
      <RegenerateButton />
    </Flex>
  );
}
