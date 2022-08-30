
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {IcelinkPageComponent} from './pages/icelink-page/icelink-page.component';
import {DetailPageComponent} from './pages/detail-page/detail-page.component';
import {PandoraPageComponent} from './pages/pandora-page/pandora-page.component';
import {EmporioarmaniPageComponent} from './pages/emporioarmani-page/emporioarmani-page.component';
import {CasioPageComponent} from './pages/casio-page/casio-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent },
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'icelink', component: IcelinkPageComponent},
  {path: 'detail/:id', component: DetailPageComponent},
  {path: 'pandora', component: PandoraPageComponent},
  {path: 'emporioarmani', component: EmporioarmaniPageComponent},
  {path: 'casio', component: CasioPageComponent},


];
@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
