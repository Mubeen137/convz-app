import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./core/core.module').then((m) => m.CoreModule) },
  { path: 'app', loadChildren: () => import('./main/main.module').then((m) => m.MainModule), canActivate: [authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
