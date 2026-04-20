export interface Task {
  id?: number;
  title: string;
  description?: string;
  assignee: string;
  status?: string;
  createdAt?: string;
  dueDate?: string;
}
