import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './components/home-component/home-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { NavBarComponent } from './components/nav-bar-component/nav-bar-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { ContatoComponent } from './components/contato-component/contato-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    FooterComponent,
    NavBarComponent,
    MusicaComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
