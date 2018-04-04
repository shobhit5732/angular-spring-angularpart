import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksAddComponent } from './tasks/tasks-add/tasks-add.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import {HttpModule} from "@angular/http";
import {TaskService} from "./tasks/task.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, HelloComponent, TasksComponent, TasksAddComponent, TasksListComponent ],
  bootstrap:    [ AppComponent],
  providers:    [TaskService]
})
export class AppModule { }
