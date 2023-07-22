"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "@/lib/ui/Button";

export type RegenerateButtonProps = {};

export const RegenerateButton: React.FC<RegenerateButtonProps> = ({}) => {
  const router = useRouter();

  return (
    <Button bg="frenchBlue" onClick={() => router.refresh()} mt={8}>
      Something Different Please
    </Button>
  );
};
