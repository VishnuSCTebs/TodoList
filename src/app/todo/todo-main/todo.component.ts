import { Component } from '@angular/core';
import { Task } from '../todo.interface';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title = 'TodoList';
  showAddModal:boolean=false

  tasks:Task[] = [];

  constructor(private todoService:TodoService){

    this.tasks=todoService.getTasks();

  }
  saveTask(task:Task){
    this.todoService.addTask(task);
    this.tasks=this.todoService.getTasks();
  }
  showAdd():void{
    this.showAddModal=true
  }

  hideAdd():void{
    this.showAddModal=false
  }

 
}
