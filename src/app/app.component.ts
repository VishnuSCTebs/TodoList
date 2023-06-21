import { Component } from '@angular/core';
import { Task } from './todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
  showAddModal:boolean=false
  tasks:Task[]=[]


  showAdd():void{
    this.showAddModal=true
  }

  hideAdd():void{
    this.showAddModal=false
  }

  addTask(task:Task):void{
    console.log(task)
    this.tasks.push(task)
    console.log(this.tasks)
  }
}
