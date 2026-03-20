import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  imports: [FormsModule],
  templateUrl: './person-form.html',
  styleUrl: './person-form.css',
})
export class PersonForm {
  correo= '';
  fechaNacimiento = '';
  edad = '';

}
