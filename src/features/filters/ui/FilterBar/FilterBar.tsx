"use client";
import React from "react";

import { Chip } from "@/shared/ui";

import { FILTER_LIST } from "../../config";
import { useFilterContext } from "../../models";

export default function FilterBar() {
  const { filterSelection, setFilterSelection } = useFilterContext();

  const handleClickAll = () => {
    setFilterSelection(undefined);
  };

  return (
    <div className="flex items-center gap-[10px] p-[10px]">
      <p className="font-bold">Filter:</p>

      <Chip isActive={filterSelection == null} onClick={handleClickAll}>
        ALL
      </Chip>

      {FILTER_LIST.map((filterItem) => {
        const { id, text } = filterItem;

        const handleClick = () => {
          if (filterSelection === id) {
            setFilterSelection(undefined);
            return;
          }

          setFilterSelection(id);
        };

        return (
          <Chip
            key={id}
            isActive={filterSelection === id}
            onClick={handleClick}
          >
            {text}
          </Chip>
        );
      })}
    </div>
  );
}
