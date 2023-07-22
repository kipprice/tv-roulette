import { Flex, styled } from "@/lib/styled-system/jsx";

export type HomePageProps = {
  /** */
};

export default async function HomePage({}: HomePageProps) {
  return (
    <Flex flexDir={"column"} gap={8}>
      <styled.h1 fontSize="2xl" fontWeight={"bold"}>
        Welcome to TV Roulette!
      </styled.h1>

      <styled.p maxW={{ base: "95vw", lg: "40rem" }}>
        Are you the type of person who watches shows over and over again, until
        you basically have them all memorized? Do you use these shows as
        background noise, depending on the fact that you really don&apos;t need
        to pay attention to be able to jump back in? Do you and your partner /
        friends / family know you want to watch a particular procedural, but
        don&apos;t want to actually decide where in that show you should start?
        TV Roulette is for you!
      </styled.p>

      <styled.p maxW={{ base: "95vw", lg: "40rem" }}>
        Simply search for the show you want, optionally narrow down the seasons,
        and let TV Roulette suggest an episode to you. If you don&apos;t like
        the results, you can retry as many times as you&apos;d like.
      </styled.p>

      <styled.p maxW={{ base: "95vw", lg: "40rem" }}>
        TV Roulette uses the{" "}
        <styled.a color="greenBlue" href="https://www.tvmaze.com/api">
          TV Maze API
        </styled.a>{" "}
        to power the suggester,{" "}
        <styled.a color="greenBlue" href="https://feathericons.com/">
          Feather
        </styled.a>{" "}
        for its icons, and was made by{" "}
        <styled.a color="greenBlue" href="https://kipprice.com">
          Kip
        </styled.a>{" "}
        and{" "}
        <styled.a color="greenBlue" href="http://hjfarr.com">
          HJ
        </styled.a>
        . If you like it, let us know!
      </styled.p>
    </Flex>
  );
}
