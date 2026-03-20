import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-item',
  imports: [],
  templateUrl: './person-item.html',
  styleUrl: './person-item.css',
})
export class PersonItem {
  @Input() correo = '';
  @Input() fechaNacimiento = '';
  @Input() edad = '';
}
