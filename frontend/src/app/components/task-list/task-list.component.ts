import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
    console.log('DATA FRONTEND:');
  }

  loadTasks() {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        console.log('DATA FRONTEND:', data); 
        this.tasks = data;
      },
      error: (err) => {
        console.error('ERROR:', err);
      },
    });
  }

  editTask(task: any) {
    const newTitle = prompt('Nuevo título:', task.title);

    if (newTitle) {
      const updated = { ...task, title: newTitle };

      this.taskService.updateTask(task.id, updated).subscribe(() => {
        this.loadTasks();
      });
    }
  }
  changeStatus(task: Task) {
    const nextStatus =
      task.status === 'TODO'
        ? 'IN_PROGRESS'
        : task.status === 'IN_PROGRESS'
          ? 'DONE'
          : 'TODO';

    this.taskService
      .updateStatus(task.id!, nextStatus)
      .subscribe(() => this.loadTasks());
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }
}
