import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudos',
  templateUrl: './estudos.component.html',
  styleUrls: ['./estudos.component.css']
})
export class EstudosComponent implements OnInit {
  bateraState:boolean;
  guitaState:boolean;
  tecladoState:boolean;
  bassState:boolean;
  guitaBaseState:boolean;
  violaoState:boolean;
  stateForm=true;
  constructor() { }

  ngOnInit() {
  }

  bateraSelect(){
    this.stateForm = false;
    this.bateraState= true;
    this.guitaState= false;
    this.guitaBaseState=false;
    this.bassState=false;
    this.tecladoState= false;
    this.violaoState= false;
  }

  guitaSelect(){
    this.stateForm = false;
    this.bateraState= false;
    this.guitaState= true;
    this.tecladoState= false;
    this.violaoState= false;
    this.guitaBaseState=false;
    this.bassState=false;
  }

  violaoSelect(){
    this.stateForm = false;
    this.bateraState= false;
    this.guitaState= false;
    this.tecladoState= false;
    this.violaoState= true;
    this.guitaBaseState=false;
    this.bassState=false;
  }

  tecladoSelect(){
    this.stateForm = false;
    this.bateraState= false;
    this.guitaState= false;
    this.tecladoState= true;
    this.violaoState= false;
    this.guitaBaseState=false;
    this.bassState=false;
  }

  bassSelect(){
    this.stateForm = false;
    this.guitaBaseState=false;
    this.bassState=true;
    this.stateForm = false;
    this.bateraState= false;
    this.guitaState= false;
    this.tecladoState= true;
    this.violaoState= false;
  }

  guitaBaseSelect(){
    this.stateForm = false;
    this.guitaBaseState=true;
    this.bassState=false;
    this.stateForm = false;
    this.bateraState= false;
    this.guitaState= false;
    this.tecladoState= true;
    this.violaoState= false;
  }

}
