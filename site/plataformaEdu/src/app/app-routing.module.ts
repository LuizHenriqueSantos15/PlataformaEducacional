import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { EstudosComponent } from './estudos/estudos.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path:'mural', component: InicioComponent},
  {path:'estudos', component: EstudosComponent},
  {path:'area', component: AreaComponent},
  {path:'', component: AreaComponent},
  {path:'sobre', component: SobreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
