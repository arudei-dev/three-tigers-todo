import dayjs from "dayjs";
import { API_KEY, API_URL } from "../config";
import { TodoItem } from "./types";

const adaptTodoItem = (rawTodo?: unknown): TodoItem | null => {
  if (!rawTodo || typeof rawTodo !== "object") return null;

  const { category, completed, createdAt, id, task } = rawTodo as Record<
    string,
    unknown
  >;

  if (
    typeof id !== "number" ||
    typeof category !== "string" ||
    typeof completed !== "boolean" ||
    typeof createdAt !== "string" ||
    typeof task !== "string"
  ) {
    return null;
  }

  return {
    id,
    completed,
    category,
    task,
    formattedTimestamp: dayjs(createdAt).format("YYYY/MM/D HH:mm"),
  };
};

export default function initGetTodoItem() {
  const abortController = new AbortController();

  const headers = new Headers();
  headers.append("x-api-key", API_KEY);

  const get = () =>
    fetch(API_URL, {
      headers,
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        if (!Array.isArray(data)) throw Error("Invalid data");

        return data
          .map(adaptTodoItem)
          .filter((item): item is TodoItem => Boolean(item));
      });

  return [get, { abortController }] as const;
}
