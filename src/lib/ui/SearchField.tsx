"use client";
import { Flex, styled } from "@/lib/styled-system/jsx";
import { Button } from "@/lib/ui/Button";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Search } from "react-feather";

export type SearchFieldProps = {};

export const SearchField: React.FC<SearchFieldProps> = ({}) => {
  const { query = "" } = useParams();

  const [localQuery, setQuery] = useState(decodeURIComponent(query as string));

  const router = useRouter();

  return (
    <Flex gap={{ base: 2, lg: 8 }} flexGrow={1}>
      <styled.input
        fontSize={{ base: "xl", sm: "2xl" }}
        px={4}
        py={1}
        borderRadius="lg"
        value={localQuery}
        onChange={(e) => setQuery(e.target.value)}
        minW={{ base: "unset", lg: "30rem" }}
        flexGrow={1}
        placeholder="What show would you like to watch?"
        onKeyDown={(e) =>
          e.key === "Enter"
            ? router.push(`/${encodeURIComponent(localQuery)}`)
            : ""
        }
      />

      <Button
        hideBelow={"md"}
        bg="frenchBlue"
        disabled={!localQuery}
        onClick={() => router.push(`/${encodeURIComponent(localQuery)}`)}
        fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
      >
        Search
      </Button>

      <styled.a
        hideFrom={"lg"}
        fontSize={"xl"}
        color="white"
        fontWeight={"bold"}
        bg="frenchBlue"
        w={11}
        h={11}
        borderRadius={"md"}
        cursor={"pointer"}
        href={`/${encodeURIComponent(localQuery)}`}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Search />
      </styled.a>
    </Flex>
  );
};
