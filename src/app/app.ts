import { Component, signal } from '@angular/core';
import { Card } from './components/card/card';
import { PersonItem } from './components/person-item/person-item';
import { PersonForm } from './components/person-form/person-form';
import { Person } from './components/models/person.model';

@Component({
  selector: 'app-root',
  imports: [Card, PersonItem, PersonForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Stevie Ray Vaughan');
  protected readonly image = signal('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSdhU5ukfka20VXVGpzwPHyuI2skYCNHO7A&s');

  listaPersonas = signal<Person[]>([]);
  indiceEdicion = signal<number | null>(null);

  guardarPersona(persona: Person) {
    const indice = this.indiceEdicion();

    if (indice === null) {
      this.listaPersonas.update(lista => [...lista, persona]);
      return;
    }

    this.listaPersonas.update(lista =>
      lista.map((item, i) => (i === indice ? persona : item))
    );
    this.indiceEdicion.set(null);
  }

  eliminarPersona(indice: number) {
    this.listaPersonas.update(lista => lista.filter((_, i) => i !== indice));

    if (this.indiceEdicion() === indice) {
      this.indiceEdicion.set(null);
    }
  }

  editarPersona(indice: number) {
    this.indiceEdicion.set(indice);
  }

  cancelarEdicion() {
    this.indiceEdicion.set(null);
  }

  get personaEnEdicion(): Person | null {
    const indice = this.indiceEdicion();
    if (indice === null) {
      return null;
    }
    return this.listaPersonas()[indice] ?? null;
  }
}