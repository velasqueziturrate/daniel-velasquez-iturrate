import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '/home', component: HomeComponent},
  { path: '/programacion', component: ProgramacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }