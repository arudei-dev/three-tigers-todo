"use client";

import { useState } from "react";

import { buildContext } from "@/shared/lib/factories/buildContext";

import { FilterIDs } from "../config";

export const [FilterProvider, useFilterContext] = buildContext("Filter", () => {
  const [filterSelection, setFilterSelection] = useState<FilterIDs>();

  return {
    filterSelection,
    setFilterSelection,
  };
});
