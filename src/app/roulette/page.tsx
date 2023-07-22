import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export type RoulettePageProps = PropsWithChildren & {
  /** */
};

export default async function RoulettePage({}: RoulettePageProps) {
  redirect("/");
}
