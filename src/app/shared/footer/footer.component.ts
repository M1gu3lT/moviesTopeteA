// footer.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Si utilizas rutas en Angular para cerrar sesión

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private router: Router) {}

  // Lógica para cerrar sesión
  logout() {
    // Aquí va la lógica para cerrar sesión
    console.log('Cerrando sesión...');
    // Por ejemplo, eliminar un token o redirigir a la página de login
    this.router.navigate(['/login']);  // Redirige a la página de login
  }
}
