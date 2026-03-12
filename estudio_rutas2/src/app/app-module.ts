import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { PageNotFound } from './page-not-found/page-not-found';
import { Cursos } from './cursos/cursos';
import { CursosDetalles } from './cursos-detalles/cursos-detalles';
import { ContactInfo } from './contact-info/contact-info';
import { ContactDetails } from './contact-details/contact-details';

@NgModule({
  declarations: [
    App,
    Home,
    Contact,
    About,
    PageNotFound,
    Cursos,
    CursosDetalles,
    ContactInfo,
    ContactDetails,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
