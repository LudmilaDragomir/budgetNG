import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
//  simport { RecordsComponent } from '../records/records.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'records', loadChildren: () => import('src/app/records/records.module').then(m => m.RecordsModule)}
  // {path: 'records', component: RecordsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
