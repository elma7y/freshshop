import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MycartComponent } from './components/mycart/mycart.component';

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
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'cart', component: MycartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
