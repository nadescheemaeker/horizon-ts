import AddTaskForm from "@/components/AddTaskForm";
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <main className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Task Manager
          </h1>
          <p className="text-gray-600">
            Organize your tasks and boost your productivity
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-[1fr,2fr]">
          <div>
            <AddTaskForm />
          </div>

          <div>
            <TaskList />
          </div>
        </div>
      </main>
    </div>
  );
}
