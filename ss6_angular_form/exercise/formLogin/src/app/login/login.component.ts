import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;


  constructor() {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',[Validators.minLength(6)])
    })
  }

}
