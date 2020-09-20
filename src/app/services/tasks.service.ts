import {Injectable} from '@angular/core';
import { Tasks } from '../models/tasks.model';

@Injectable()
export class TasksServices{
    private taskList: Tasks[]=[];

    addTasks(task: Tasks):void{
        this.taskList.push(task);
    }

    getTaskList(): Tasks[]{
        return this.taskList;
    }
}