"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc/trpc-client";

export function TodoList() {
  const [content, setContent] = useState<string>("");

  const query = trpc.todos.getTodos.useQuery();

  const mutation = trpc.todos.createTodo.useMutation({
    onSuccess: () => {
      query.refetch();
    },
  });

  const setDoneTodo = trpc.todos.setDone.useMutation({
    onSuccess: () => {
      query.refetch();
    },
  });

  if (query.isLoading) {
    return <div>loading...</div>;
  }

  if (query.isError) {
    return (
      <div className="flex flex-col">
        <p className="text-rose-500">error has occured</p>
        <button
          onClick={() => {
            query.refetch();
          }}
        >
          retry
        </button>
      </div>
    );
  }

  const data = query.data;

  return (
    <div>
      <div>{data.length === 0 && "database is empty"}</div>
      <div className="space-y-4 mb-6">
        <p className="text-lg font-semibold">Todos</p>
        {data.map((todo) => {
          return (
            <div key={todo.id} className="flex gap-3 items-center">
              <input
                id={`check-${todo.id}`}
                type="checkbox"
                className="scale-150"
                checked={!!todo.done}
                onClick={() => {
                  setDoneTodo.mutate({
                    id: todo.id,
                    done: !todo.done,
                  });
                }}
              />
              <label htmlFor={`check-${todo.id}`} className="text-lg">
                {todo.content}
              </label>
            </div>
          );
        })}
      </div>
      <div>
        <form className="flex flex-col space-y-4">
          <label className="font-semibold" htmlFor="content">
            content
          </label>
          <input
            type="text"
            name="content"
            id="content"
            placeholder="some content"
            className="bg-[#121212] px-4 py-2 rounded-lg "
            onChange={(ev) => {
              setContent(ev.target.value);
            }}
          />
          <button
            type="button"
            className="border-gray-300 border-2 rounded-xl px-4 py-1 font-semibold"
            onClick={(ev) => {
              ev.preventDefault();
              mutation.mutate({
                content,
              });
            }}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
