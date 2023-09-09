import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleheaderComponent } from './titleheader/titleheader.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    TitleheaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    CarouselModule,
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    TitleheaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
