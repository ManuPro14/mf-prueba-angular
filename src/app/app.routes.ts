import { RouterModule, Routes } from '@angular/router';
import { UserFollowersComponent } from './user-followers/user-followers.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'user-detail/:username',
    loadComponent: () => import('./user-details/user-details.component').then(m => m.UserDetailsComponent)
  },
  {
    path: 'followers/:username',
    loadComponent: () =>
    import('./user-followers/user-followers.component').then(m => UserFollowersComponent),
  },
  {
    path: 'remoteEntry.js',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }