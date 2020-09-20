import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from '../models/tasks.model';

@Component({
  selector: 'app-project-task-card',
  templateUrl: './project-task-card.component.html',
  styleUrls: ['./project-task-card.component.css']
})
export class ProjectTaskCardComponent implements OnInit {

  @Input() task: Tasks;
  cardExpand=false;
  constructor() { }

  ngOnInit() {
  }

}
