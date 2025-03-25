import { Routes } from '@angular/router';
import { UserFollowersComponent } from './user-followers/user-followers.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user-detail/midudev'
  },
  {
    path: 'user-detail/:username',
    loadComponent: () => import('./user-details/user-details.component').then(m => m.UserDetailsComponent)
  },
  {
    path: 'followers/:username',
    loadComponent: () =>
    import('./user-followers/user-followers.component').then(m => UserFollowersComponent),
  },
];