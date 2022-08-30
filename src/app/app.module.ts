import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IcelinkPageComponent } from './pages/icelink-page/icelink-page.component';
import { PandoraPageComponent } from './pages/pandora-page/pandora-page.component';
import { EmporioarmaniPageComponent } from './pages/emporioarmani-page/emporioarmani-page.component';
import { CasioPageComponent } from './pages/casio-page/casio-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent,
    IcelinkPageComponent,
    PandoraPageComponent,
    EmporioarmaniPageComponent,
    CasioPageComponent,
    DetailPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
