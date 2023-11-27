"use client";

import { trpc } from "@/lib/trpc/trpc-client";

export default function RootPage() {
  const query = trpc.todos.getTodos.useQuery();

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {JSON.stringify(query.data)}
    </div>
  );
}
