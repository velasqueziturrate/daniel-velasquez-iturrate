import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { LaboralComponent } from './laboral/laboral.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { AlimentacionComponent } from './alimentacion/alimentacion.component';
import { FitnessComponent } from './fitness/fitness.component';
import { RelajacionComponent } from './relajacion/relajacion.component';
import { LibrosComponent } from './libros/libros.component';
import { SaludComponent } from './salud/salud.component';
import { FinanzasComponent } from './finanzas/finanzas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgramacionComponent,
    LaboralComponent,
    IdiomasComponent,
    AlimentacionComponent,
    FitnessComponent,
    RelajacionComponent,
    LibrosComponent,
    SaludComponent,
    FinanzasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
