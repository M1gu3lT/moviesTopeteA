import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../../shared/movie-card/movie-card.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, NavbarComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  peliculas = [
    {
      id: 1,
      titulo: 'Deadpool',
      imagen: 'assets/imagenesP/deadpool3.webp',
      descripcion: 'Un antihéroe irreverente'
    },
    {
      id: 2,
      titulo: 'Invencible',
      imagen: 'assets/imagenesP/invencible2.webp',
      descripcion: 'Héroe que siempre es vencido'
    },
    {
      id: 3,
      titulo: 'Spiderman',
      imagen: 'assets/imagenesP/spiderman.webp',
      descripcion: 'El hombre que araña'
    },
    {
      id: 4,
      titulo: 'Interstellar',
      imagen: 'assets/imagenesP/interstellar.webp',
      descripcion: 'Ambientada en un futuro distópico...'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
