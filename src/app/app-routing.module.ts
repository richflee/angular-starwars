import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
    {
        path: 'people', component: PeopleComponent
    },
    {
        path: '', component: PeopleComponent
    }
];

export const AppRoutingProviders: any[] = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
