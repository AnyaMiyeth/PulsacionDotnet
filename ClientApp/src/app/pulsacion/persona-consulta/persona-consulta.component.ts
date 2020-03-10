import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {
personas:Persona[];
searchText:string;
  constructor() { }

  ngOnInit() {
    this.personas = [
      {identificacion:"1111", nombre:"Juan", sexo:"M" ,edad:3, pulsacion:41},
      {identificacion:"2222", nombre:"Marta", sexo:"M" ,edad:3, pulsacion:41}
    ]
  }

}
