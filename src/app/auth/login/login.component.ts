import {Component} from '@angular/core';
import {Card} from 'primeng/card';
import {Image} from 'primeng/image';
import {InputText} from 'primeng/inputtext';
import {FloatLabel} from 'primeng/floatlabel';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-login',
  imports: [
    Card,
    Image,
    InputText,
    FloatLabel,
    Button
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
