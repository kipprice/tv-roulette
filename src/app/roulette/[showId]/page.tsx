import { PropsWithChildren } from "react";

export type ShowRoulettePageProps = PropsWithChildren & {
  params: { showId: string };
};

export default async function ShowRoulettePage({}: ShowRoulettePageProps) {
  return <></>;
}
