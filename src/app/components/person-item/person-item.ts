import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-person-item',
  imports: [CommonModule],
  templateUrl: './person-item.html',
  styleUrl: './person-item.css',
})
export class PersonItem {
  @Input() personas: Person[] = [];
  @Output() eliminar = new EventEmitter<number>();
  @Output() editar = new EventEmitter<number>();
}