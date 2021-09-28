import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheatsComponent } from './cheats/cheats.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheatDetailComponent } from './cheat-detail/cheat-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CheatDetailComponent},
  { path: 'cheats', component: CheatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
