import { loadSeasons } from "@/lib/api/loadSeasons";
import { Flex } from "@/lib/styled-system/jsx";
import { SeasonSelector } from "@/lib/ui/SeasonSelector";
import { PropsWithChildren } from "react";

export type ShowRoulettePageProps = PropsWithChildren & {
  params: { showId: string };
};

export default async function ShowRoulettePage({
  children,
  params: { showId },
}: ShowRoulettePageProps) {
  const seasons = await loadSeasons(showId);

  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      gap={{ base: "4", lg: 16 }}
      alignItems={{ base: "center", lg: "flex-start" }}
    >
      {children}
      <SeasonSelector seasons={seasons} showId={showId} />
    </Flex>
  );
}
