import { Component, OnInit } from '@angular/core';
// Despues de implementar en em modulo Formularios reactivos
// aca usamos FormsControl para manejarlos
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('', [
      // Validators.minLength(4),
      // Validators.maxLength(20),
      Validators.required,
      Validators.email
    ]);
    // Estamos mostrangos los cambios en consola
    // para ver que esta sucedioendo
    this.emailField.valueChanges
    .subscribe(value => {
      console.log(value);
    });
  }

  ngOnInit() {
  }

  sendEmail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }

}
