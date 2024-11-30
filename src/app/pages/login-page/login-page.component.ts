import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth/auth-service/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router);

  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })


  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['']);
      }) 
    }
  }
}
