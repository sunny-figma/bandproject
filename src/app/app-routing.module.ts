import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BandComponent } from './components/band/band.component';
import { TourComponent } from './components/tour/tour.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';




const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'login page' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'profile page' }
  },

  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'sign up page' }
  },

  {
    path: 'band',
    component: BandComponent,
    data: { title: 'sign up page' }
  },

  {
    path: 'tour',
    component: TourComponent,
    data: { title: 'sign up page' }
  },

  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'sign up page' }
  },

{ path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
