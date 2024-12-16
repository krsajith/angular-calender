import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TestContainerComponent } from './test-container/test-container.component';
import { CalenderComponent } from './calender/calender.component';

export const routes: Routes = [
    {
        path:'test',component:TestComponent
    },
    {
        path:'container',component:TestContainerComponent
    },
    {
        path:'calender',component:CalenderComponent
    }
];
