import { useMemo } from "react";

import { TodoItem } from "@/entities/todo/api";

import { useFilterContext } from "../models";

export default function useFilteredList(todoList: TodoItem[]) {
  const { filterSelection } = useFilterContext();

  const filteredList = useMemo(() => {
    if (filterSelection == null) return todoList;

    return todoList.filter((listItem) => listItem.category === filterSelection);
  }, [filterSelection, todoList]);

  return filteredList;
}
