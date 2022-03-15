import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudosComponent } from './estudos/estudos.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'mural', component: InicioComponent},
  {path:'estudos', component: EstudosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
