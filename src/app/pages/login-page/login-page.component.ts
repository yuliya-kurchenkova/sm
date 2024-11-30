import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })


  onSubmit(event: Event) {
    console.log(this.form.value); 
    // {
    //     "username": "YliyaKurcha",
    //     "password": "dovCQq8d74"
    // }
  }
}
