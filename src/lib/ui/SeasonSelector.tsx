"use client";
import React, { useState } from "react";
import { Box, Flex, Wrap, styled } from "@/lib/styled-system/jsx";
import { SeasonsResult } from "@/lib/api/loadSeasons";
import { useParams, useRouter, usePathname } from "next/navigation";
import { Button } from "@/lib/ui/Button";

export type SeasonSelectorProps = { showId: string; seasons: SeasonsResult[] };

export const SeasonSelector: React.FC<SeasonSelectorProps> = ({
  showId,
  seasons,
}) => {
  const { seasons: seasonsStr = "" } = useParams();

  const preSelectedSeasons = seasonsStr
    ? decodeURIComponent(seasonsStr as string).split(",")
    : seasons.map((s) => s.number);

  const headerText = seasonsStr
    ? "Want to switch up seasons?"
    : "Which seasons?";

  const [selectedSeasons, setSelectedSeasons] = useState(
    new Set<number>(preSelectedSeasons.map((s) => +s))
  );
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      gap={{ base: 4, lg: 16 }}
    >
      <styled.h1 fontSize={"2xl"}>{headerText}</styled.h1>
      <Wrap
        flexDirection={"row"}
        gap={8}
        maxW={seasonsStr ? "96" : "unset"}
        justifyContent={"center"}
      >
        {seasons.map((s) => (
          <styled.label
            key={s.id}
            display="flex"
            fontSize={"xl"}
            gap={2}
            cursor={"pointer"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Box minW="20" maxW="40" w={seasonsStr ? "20" : "40"}>
              <styled.img src={s.image?.original} w="100%" h="auto" />
            </Box>
            <styled.input
              type="checkbox"
              checked={selectedSeasons.has(s.number)}
              w={8}
              h={8}
              fontSize={"2xl"}
              onChange={(e) => {
                selectedSeasons.has(s.number)
                  ? selectedSeasons.delete(s.number)
                  : selectedSeasons.add(s.number);
                setSelectedSeasons(new Set(selectedSeasons));
              }}
            />
            <styled.h2 fontSize={"xl"}>{s.number}</styled.h2>
          </styled.label>
        ))}
      </Wrap>
      <Button
        bg="frenchBlue"
        disabled={selectedSeasons.size === 0}
        onClick={() => {
          const url = `/roulette/${showId}/${[...selectedSeasons].join(",")}`;
          if (pathname === url) {
            router.refresh();
          } else {
            router.push(url);
          }
        }}
      >
        {seasonsStr ? "Update Seasons" : "Confirm Seasons"}
      </Button>
    </Flex>
  );
};
