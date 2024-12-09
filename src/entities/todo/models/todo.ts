"use client";

import { useEffect, useState } from "react";

import { ApiMetadata } from "@/shared/lib/utility-types/api";

import { TodoItem } from "../api/types";
import initGetTodoItem from "../api/todo";

export default function useGetTodoList() {
  const [metadata, setMetadata] = useState<ApiMetadata<TodoItem[]>>({
    status: "loading",
  });

  useEffect(() => {
    const [get, { abortController }] = initGetTodoItem();

    setMetadata({ status: "loading" });

    get()
      .then((data) => {
        setMetadata({
          status: "done",
          data,
        });
      })
      .catch((error: Error) => {
        setMetadata({
          status: "error",
          error,
        });
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return {
    ...metadata,
  };
}
