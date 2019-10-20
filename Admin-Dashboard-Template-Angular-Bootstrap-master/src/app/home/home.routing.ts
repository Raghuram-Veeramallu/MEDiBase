import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Map1Component } from './views/maps/map1/map1.component';
import { RecordsComponent } from './views/records/records.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { HomeComponent } from './home.component';


const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            { 
                path: 'dashboard',
                component: Dashboard1Component
            },
            { 
                path: 'profile',
                component: Profile1Component
            },
            { path: 'tables', children:
                [
                { path: 'table1', component: BasicTableComponent },
                ]
            },
            { path: 'maps', children:
                [
                { path: 'map1', component: Map1Component},
                ]
            },

            { path: 'records', component: RecordsComponent},
            { path: '**', component: NotFoundComponent },
        ]
    }
];


@NgModule({
    imports: [
      RouterModule.forChild(homeRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class HomeRoutingModule {}
