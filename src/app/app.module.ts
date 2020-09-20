import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectTasksComponent } from './projects/project-tasks.component';
import {TasksServices} from './services/tasks.service';
import { ProjectTaskCardComponent } from './projects/project-task-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectTasksComponent,
    ProjectTaskCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TasksServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
