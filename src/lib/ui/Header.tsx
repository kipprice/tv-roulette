import React from "react";
import { Flex, styled } from "../styled-system/jsx";
import { SearchField } from "./SearchField";
import { Tv } from "react-feather";

export type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <styled.header
      bg="syracuseRedOrange"
      display={"flex"}
      alignItems={"center"}
      gap={{ base: 2, lg: 8 }}
      px={{ base: 2, lg: 8 }}
      py={{ base: 2, lg: 4 }}
      borderBottomStyle="solid"
      borderBottomColor={"syracuseRedOrange"}
      borderBottomWidth={1}
      flexDirection={"row"}
    >
      <styled.a
        hideBelow={"md"}
        fontSize={"xl"}
        color="white"
        fontWeight={"bold"}
        bg="gamboge"
        px={4}
        py={2}
        borderRadius={"md"}
        cursor={"pointer"}
        href="/"
      >
        <Flex alignItems="flex-start" gap={4}>
          <Tv />
          TV Roulette
        </Flex>
      </styled.a>
      <styled.a
        hideFrom={"lg"}
        fontSize={"xl"}
        color="white"
        fontWeight={"bold"}
        bg="gamboge"
        w={11}
        h={11}
        borderRadius={"md"}
        cursor={"pointer"}
        href="/"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexShrink={0}
      >
        <Tv />
      </styled.a>
      <SearchField />
    </styled.header>
  );
};
