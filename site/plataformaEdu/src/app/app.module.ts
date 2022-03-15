import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavComponent } from './nav/nav.component';
import { EstudosComponent } from './estudos/estudos.component';
import { AreaComponent } from './area/area.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [					
    AppComponent,
      InicioComponent,
      NavComponent,
      EstudosComponent,
      AreaComponent,
      SobreComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
