import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { ContatoComponent } from './components/contato-component/contato-component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'music', component: MusicaComponent},
  {path: 'contact', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
