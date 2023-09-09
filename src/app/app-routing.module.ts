import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact-us',
    pathMatch: 'full',
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./components/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
