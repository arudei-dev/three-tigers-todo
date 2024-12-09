"use client";

import React from "react";

import { TodoItem } from "@/entities/todo/api/types";
import { TodoCard } from "@/entities/todo/ui";
import useFilteredList from "@/features/filters/lib/useFilteredList";

interface Props {
  todoList: TodoItem[];
  onClickCheckbox?: (id: number) => void;
}

export default function FilteredList(props: Props) {
  const { todoList, onClickCheckbox } = props;

  const filteredList = useFilteredList(todoList);

  return (
    <>
      {filteredList.map((todo) => {
        const { category, completed, id, task, formattedTimestamp } = todo;

        return (
          <TodoCard
            key={id}
            title={task}
            description={category}
            timestamp={formattedTimestamp}
            isDone={completed}
            onClickCheckbox={() => onClickCheckbox?.(id)}
          />
        );
      })}
    </>
  );
}
