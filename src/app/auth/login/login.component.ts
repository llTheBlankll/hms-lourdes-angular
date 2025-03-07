import {Component, inject} from '@angular/core';
import {Card} from 'primeng/card';
import {Image} from 'primeng/image';
import {InputText} from 'primeng/inputtext';
import {FloatLabel} from 'primeng/floatlabel';
import {Button} from 'primeng/button';
import {FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [
    Card,
    Image,
    InputText,
    FloatLabel,
    Button,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly authService = inject(AuthService);

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  public onSubmit() {
    if (this.loginForm.valid) {

    }
  }
}
