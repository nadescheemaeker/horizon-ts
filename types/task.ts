export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type TaskInput = Omit<
  Task,
  "id" | "createdAt" | "updatedAt" | "completed"
>;
