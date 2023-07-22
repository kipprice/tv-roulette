"use client";

import React from "react";
import type { SearchResult } from "@/lib/api/search";
import { Box, Flex, Spacer, styled } from "@/lib/styled-system/jsx";
import { useRouter } from "next/navigation";
import { Button } from "@/lib/ui/Button";

export type SearchResultCardProps = {
  searchResult: SearchResult;
};

export const SearchResultCard: React.FC<SearchResultCardProps> = ({
  searchResult,
}) => {
  const router = useRouter();

  const {
    show: { name, id, officialSite, image, summary },
  } = searchResult;

  return (
    <>
      {/* card itself */}
      <Flex
        bg="white"
        borderRadius={"lg"}
        boxShadow={"md"}
        p={8}
        gap={8}
        flexDirection={"column"}
        alignItems={"center"}
        borderStyle="solid"
        borderWidth={1}
        borderColor={"syracuseRedOrange"}
      >
        {/* show image */}
        {image?.original ? (
          <styled.img
            src={image.original}
            h="200px"
            w="auto"
            alt={`image for ${name}`}
          />
        ) : (
          <Flex
            h="200px"
            w="150px"
            bg="gray.100"
            alignItems={"center"}
            justifyContent={"center"}
          >
            (No Image)
          </Flex>
        )}

        {/* show details */}
        <Flex flexDirection={"column"} gap={4} flexGrow={1}>
          <styled.h2 fontSize={"xl"}>{name}</styled.h2>
          <styled.span dangerouslySetInnerHTML={{ __html: summary }} />
          {officialSite ? (
            <styled.a href={officialSite} color="frenchBlue">
              Official Site
            </styled.a>
          ) : null}
          <Spacer flexGrow={1} />
          {/*this is a button*/}
          <Button
            bg="frenchBlue"
            onClick={() => router.push(`/roulette/${id}`)}
          >
            Select
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
