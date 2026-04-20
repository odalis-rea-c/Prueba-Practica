import { Component, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})


export class TaskFormComponent {

  task: Task = {
    title: '',
    description: '',
    assignee: '',
    dueDate: '',
    status: 'DONE'
  };

  constructor(private taskService: TaskService) {}

  createTask() {
    this.taskService.createTask(this.task)
      .subscribe(() => {
        alert('Tarea creada');
        this.task = { title: '', description: '', assignee: '', dueDate: '', status: 'DONE'};
      });
  }
}
