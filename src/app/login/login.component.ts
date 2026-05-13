import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatModules } from '../../core/mat-modules';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatModules],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  hidePassword = true;

  model = {
    fullName: '',
    email: '',
    password: ''
  };

  constructor(
    private snackBar: MatSnackBar
  ) { }

  togglePassword(): void {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(form: NgForm): void {

    if (form.invalid) {

      this.showError(
        'Please fill all required fields'
      );

      return;
    }

    console.log(this.model);

    this.showSuccess(
      'Account created successfully'
    );

    form.resetForm();

    this.hidePassword = true;
  }

  showSuccess(message: string): void {

    this.snackBar.open(
      message,
      'Close',
      {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['success-snackbar']
      }
    );
  }

  showError(message: string): void {

    this.snackBar.open(
      message,
      'Close',
      {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['error-snackbar']
      }
    );
  }
}