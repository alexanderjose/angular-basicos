import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  providers: [],
  exports: [
    ListadoComponent
  ]
})
export class HeroesModule { }
