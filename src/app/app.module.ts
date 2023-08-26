import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { SidenavbarComponent } from 'src/app/sidenavbar/sidenavbar.component';
import { UploadComponent } from 'src/app/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    NavbarComponent,
    SidenavbarComponent,
    UploadComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
