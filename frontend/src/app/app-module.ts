import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { Login } from './components/login/login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Registro } from './components/registro/registro';
import { Viajes } from './components/viajes/viajes';
import { Cabecera } from './components/cabecera/cabecera';
import { Tiempo } from './components/tiempo/tiempo';
import { Inicio } from './components/inicio/inicio';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { Footer } from './components/footer/footer';
import { SobreNosotros } from './components/sobre-nosotros/sobre-nosotros';

@NgModule({
  declarations: [App, Login, Registro, Viajes, Cabecera, Tiempo, Inicio, Footer, SobreNosotros],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, BaseChartDirective],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideCharts(withDefaultRegisterables()),
  ],
  bootstrap: [App],
})
export class AppModule {}
