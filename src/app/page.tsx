"use client";

import useGetTodoList from "@/entities/todo/models/todo";
import { FilterBar } from "@/features/filters/ui";
import { TodoView } from "@/pages/todo";
import { AppBar } from "@/shared/ui";

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
