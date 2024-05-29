import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PersonComponent } from './pages/person/person.component';
import { BalanceComponent } from './pages/balance/balance.component';
import { DebtComponent } from './pages/debt/debt.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'person',
    component: PersonComponent,
  },
  {
    path: 'balance',
    component: BalanceComponent,
  },
  {
    path: 'debt',
    component: DebtComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
