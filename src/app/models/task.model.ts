export interface Task {
  id: string;
  userId: string;
  title: string;
  description: string;
  priority: number; // 1-5
  dueDate: string;
  completed: boolean;
}