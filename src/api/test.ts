import { apiCall } from "./index";

export type ToDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type CreatePost = Omit<Post, "id">;

export function useFetchTodo() {
  return apiCall<ToDo>("/todos/:id", {
    method: "GET",
  });
}

export function useCreateTodo() {
  return apiCall<ToDo, CreatePost>("/posts", {
    method: "POST",
  });
}
