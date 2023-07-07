import { Component, Input,Output,EventEmitter } from '@angular/core';
import { TaskList,Task } from '../todo.interface';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})


export class TodoAddComponent {

  @Input('show') show: boolean = false
  @Output() closeModalEvent:EventEmitter<any> = new EventEmitter()
  @Output() saveTaskEvent = new EventEmitter<Task>()

  taskTypes:TaskList[]=[{
    id:'001',
    name:'Work',
    icon:'assets/icons/work.svg',
    color:'#2563eb'
  },
  {
    id:'002',
    name:'Health',
    icon:'assets/icons/health.svg',
    color:'#10b981'
  }
,
{
  id:'003',
  name:'Learn',
  icon:'assets/icons/learn.svg',
  color:'#7c3aed'
},{
  id:'004',
  name:'Hobby',
  icon:'assets/icons/hobby.svg',
  color:'#f43f5e'
}];


  task:Task={
    title:'',
    description:'',
    date:new Date(),
    time:''

  }



  ngOnInit(){
    this.task={...this.task,...this.taskTypes[0]}
  }





  onTaskSave() {
    this.saveTaskEvent.emit(this.task)
    this.closeModalEvent.emit()
    
  }

  onTaskTypeClick(taskType: TaskList) {
    this.task.color=taskType.color
    this.task.name=taskType.name
    this.task.id=taskType.id,
    this.task.icon=taskType.icon
    console.log(this.task)
  }


 
  closeAddModal():void{
      this.closeModalEvent.emit()
  }
  

}
