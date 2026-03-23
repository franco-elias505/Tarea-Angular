import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-person-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './person-form.html',
  styleUrl: './person-form.css',
})
export class PersonForm implements OnChanges {
  @Input() personaEditar: Person | null = null;
  @Output() personaEmit = new EventEmitter<Person>();
  @Output() cancelar = new EventEmitter<void>();

  correo = '';
  fechaNacimiento = '';
  edad: number | null = null;
  modoEdicion = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['personaEditar']) {
      return;
    }

    if (this.personaEditar) {
      this.correo = this.personaEditar.correo;
      this.fechaNacimiento = this.personaEditar.fechaNacimiento;
      this.edad = this.personaEditar.edad;
      this.modoEdicion = true;
      return;
    }

    this.limpiarFormulario();
    this.modoEdicion = false;
  }

  guardar() {
    if (!this.correo || !this.fechaNacimiento || this.edad === null) {
      return;
    }

    const persona: Person = {
      correo: this.correo.trim(),
      fechaNacimiento: this.fechaNacimiento,
      edad: Number(this.edad)
    };

    this.personaEmit.emit(persona);
    this.limpiarFormulario();
    this.modoEdicion = false;
  }

  cancelarEdicion() {
    this.cancelar.emit();
    this.limpiarFormulario();
    this.modoEdicion = false;
  }

  private limpiarFormulario() {
    this.correo = '';
    this.fechaNacimiento = '';
    this.edad = null;
  }
}