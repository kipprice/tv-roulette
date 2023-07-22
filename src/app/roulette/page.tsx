import { redirect } from "next/navigation";

export type RoulettePageProps = {
  /** */
};

export default async function RoulettePage({}: RoulettePageProps) {
  redirect("/");
}
