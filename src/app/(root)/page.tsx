import { TodoList } from "@/components/todos/todo-list";

export default function RootPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <TodoList />
    </div>
  );
}
