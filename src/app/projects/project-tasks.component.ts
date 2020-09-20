import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Tasks } from '../models/tasks.model';
import {Router} from '@angular/router';
import {TasksServices} from '../services/tasks.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.css']
})
export class ProjectTasksComponent implements OnInit, OnChanges {
  tasksList: Tasks[];
  task_id: number;
  max_tasks: number;
  max_tasks_status: string;
  @ViewChild("taskForm") public projectTaskForm: NgForm;

  /* -------- Initialise Model -------- */
  task: Tasks={
    taskId:0,
    title: null,
    description: null,
    dueDate: null
  }
  constructor(private taskService: TasksServices,private router: Router) { }

  ngOnInit() {
  }

  ngOnChanges(simpleChganges: SimpleChanges){
    console.log(simpleChganges);
    console.log(document.getElementById( "development").childElementCount);
  }

  /* ------- Add New Task --------- */

  addTask():void{
    this.tasksList=this.taskService.getTaskList();
    this.max_tasks=+this.tasksList.length;
    if(this.tasksList.length >= 1){
      this.task.taskId=+this.tasksList[this.tasksList.length-1].taskId+1;
    }else{
      this.task.taskId=1;
    }
    if(this.max_tasks >= 5){
      this.max_tasks_status="You have added maximum tasks";
    }else{
      const newTask : Tasks = Object.assign({}, this.task);
      this.taskService.addTasks(newTask);
      this.projectTaskForm.form.reset();
      this.tasksList=this.taskService.getTaskList();
      this.max_tasks_status="";
    }
  }

  /* ---------- Drag And Drop ----------- */
  allowDropTask(ev: any) {
    ev.preventDefault();
  }
  
  dragTask(ev: any) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  dropTask(ev: any) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

}
