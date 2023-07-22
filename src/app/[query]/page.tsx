import { search } from "@/lib/api/search";
import { Flex, Grid } from "@/lib/styled-system/jsx";
import { SearchResultCard } from "@/lib/ui/SearchResultCard";

export type SearchResultPageProps = {
  params: { query: string };
};

export default async function SearchResultPage({
  params: { query },
}: SearchResultPageProps) {
  const searchResults = await search(query);

  return (
    <Flex flexDirection={"column"} gap={8} alignItems="center">
      <Grid
        gridTemplateColumns={{ base: "1", md: "2", lg: "3" }}
        gap={{ base: 2, lg: 8 }}
      >
        {searchResults.map((searchResult) => (
          <SearchResultCard
            key={searchResult?.show?.id}
            searchResult={searchResult}
          />
        ))}
      </Grid>
    </Flex>
  );
}
