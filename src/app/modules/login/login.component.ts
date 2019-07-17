import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  }

  constructor(private httpClient: HttpClient,
    private roteador: Router) { }

  ngOnInit() {
  }

  handleLogin(formLogin: NgForm) {
    if (formLogin.invalid) {
      formLogin.controls['email'].markAsTouched();
      formLogin.controls['senha'].markAsTouched();
      return;
    }

    this.httpClient
      .post('http://localhost:3200/login', this.login)
      .subscribe(
        (response: any) => {
          console.log(response);
          localStorage.setItem('cmail-token', response.token);
        }, erro => {
          console.log(erro);
        }
      )
  }

}
