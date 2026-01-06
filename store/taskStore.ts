import { create } from "zustand";
import { Task, TaskInput } from "@/types/task";

interface TaskStore {
  tasks: Task[];
  addTask: (task: TaskInput) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, updates: Partial<TaskInput>) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],

  addTask: (taskInput) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          ...taskInput,
          id: crypto.randomUUID(),
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    })),

  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed, updatedAt: new Date() }
          : task
      ),
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updates, updatedAt: new Date() } : task
      ),
    })),
}));
