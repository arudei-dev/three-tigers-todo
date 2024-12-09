"use client";

import { useState } from "react";

import { TodoItem } from "@/entities/todo/api";
import useGetTodoList from "@/entities/todo/models/todo";
import { FilterBar, FilteredList } from "@/features/filters/ui";
import { AppBar } from "@/shared/ui";

interface TodoViewProps {
  data: TodoItem[];
}

function TodoView(props: TodoViewProps) {
  const [list, setList] = useState(props.data);

  const handleClickCheckbox = (id: number) => {
    const newList = [...list];
    const currIdx = newList.findIndex((item) => item.id === id);

    newList[currIdx].completed = !newList[currIdx].completed;

    setList(newList);
  };

  return <FilteredList todoList={list} onClickCheckbox={handleClickCheckbox} />;
}

export default function Home() {
  const todoResponse = useGetTodoList();

  return (
    <>
      <AppBar title="To-Do" />

      <div className="max-w-[586px] p-[36px_24px] m-auto gap-[10px] flex flex-col">
        <FilterBar />

        {todoResponse.status === "done" && (
          <TodoView data={todoResponse.data} />
        )}
      </div>
    </>
  );
}
