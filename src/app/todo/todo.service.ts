import { Injectable } from '@angular/core';
import { Task } from './todo.interface';
@Injectable({
  providedIn: 'root'
})
export class TodoService {



  tasks:Task[]=[];
  constructor() { 

  }

  getTasks():Task[] {

    return this.tasks;

  }
  addTask(task:Task):void{
    console.log([...this.tasks])
    console.log("before",this.tasks)
    console.log(task)
  
    this.tasks=[task];


    console.log("after",this.tasks)
  }

}
