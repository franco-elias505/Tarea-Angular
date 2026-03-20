import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './components/card/card';
import { PersonItem } from './components/person-item/person-item';
import { PersonForm } from './components/person-form/person-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, PersonItem, PersonForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Stevie Ray Vaughan');
  protected readonly image = signal('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSdhU5ukfka20VXVGpzwPHyuI2skYCNHO7A&s');
  correo = signal('papafritas@gmail.com');
  fechaNacimiento = signal('24/05/2005');
  edad = signal('20');

}
