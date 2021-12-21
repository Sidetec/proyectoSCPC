import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-resumen-inventario',
  templateUrl: './resumen-inventario.component.html',
  styleUrls: ['./resumen-inventario.component.css']
})
export class ResumenInventarioComponent {

  task: Task = {
    name: 'Seleccione Tipo de Especie',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Equipamiento Computacional', completed: false, color: 'primary'},
      {name: 'Equipamiento Medico', completed: false, color: 'primary'},
      {name: 'Equipamiento Industrial', completed: false, color: 'primary'},
      {name: 'Equipamiento Clinico', completed: false, color: 'primary'},
      {name: 'Equipamiento NO Clinico', completed: false, color: 'primary'},
      {name: 'Vehiculos', completed: false, color: 'primary'}
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
}