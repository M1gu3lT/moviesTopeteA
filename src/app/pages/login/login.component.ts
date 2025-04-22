import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';7
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = '';
  password = '';
  showPassword = false;

  constructor(private router: Router) {}

  login() {
    //aplicamos regex al input del usuario
    const passwordRegex = /^.{7,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
  if (!this.user || !this.password) {
    alert('Completa todos los campos');
    return;
  }

  

  if (!passwordRegex.test(this.password)) {
    alert(' Error en La contraseña, deve ser mayor a 6 caracteres');
    return;
  }
  if (!emailRegex.test(this.user)) {
    alert(' Email incorrecto, favor de escribirlo correctamenten');
    return;
  }

  // Si pasa la validación
  this.router.navigate(['/home']);

    if (this.user && this.password) {
      this.router.navigate(['/home']);
    } else {
      alert('Completa todos los campos');
    }
  }
}
