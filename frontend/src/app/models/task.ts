export interface Task {
  id?: number;
  title: string;
  description?: string;
  assignee: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
  createdAt?: string;
  dueDate?: string;
}
