import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TaskService } from './app/tasks/tasks.service';
import { InjectionToken } from '@angular/core';

export const TaskServiceToken = new InjectionToken<TaskService>('tasks-service-token'); 

bootstrapApplication(AppComponent, {
    providers: [{provide: TaskServiceToken, useClass: TaskService }]
}).catch((err) => console.error(err));
// bootstrapApplication(AppComponent).catch((err) => console.error(err));