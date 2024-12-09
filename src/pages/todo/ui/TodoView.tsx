"use client";

import { useState } from "react";

import { TodoItem } from "@/entities/todo/api";
import { FilteredList } from "@/features/filters/ui";

interface TodoViewProps {
  data: TodoItem[];
}

export default function TodoView(props: TodoViewProps) {
  const [list, setList] = useState(props.data);

  const handleClickCheckbox = (id: number) => {
    const newList = [...list];
    const currIdx = newList.findIndex((item) => item.id === id);

    newList[currIdx].completed = !newList[currIdx].completed;

    setList(newList);
  };

  return <FilteredList todoList={list} onClickCheckbox={handleClickCheckbox} />;
}
