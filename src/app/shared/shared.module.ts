import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleheaderComponent } from './titleheader/titleheader.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, TitleheaderComponent],
  imports: [CommonModule, MaterialModule, FormsModule, AppRoutingModule],
  exports: [HeaderComponent, NavbarComponent, TitleheaderComponent],
})
export class SharedModule {}
