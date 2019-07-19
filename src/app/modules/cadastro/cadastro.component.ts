import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { UserInput } from 'src/app/models/dto/user-input';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', Validators.required),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    senha: new FormControl('', [Validators.required, Validators.minLength(4)]),
    avatar: new FormControl('', Validators.required, this.validaImagem.bind(this)),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')])
  })

  msgErro = '';

  constructor(private http: HttpClient,
    private roteador: Router, private servico: UserService) { }

  ngOnInit() {
  }



  validaImagem(controle: FormControl) {
    const urlInvalida = { urlInvalida: true }
    return this.http
      .head(controle.value, { observe: 'response' })
      .pipe(
        map((resposta: HttpResponseBase) => {
          if (resposta.headers.get('Content-Type').includes('image')) {
            return resposta.ok
          } else {
            return urlInvalida
          }
        })
        , catchError(() => [urlInvalida])
      )

  }

  cadastrar() {
    if (this.formCadastro.invalid) {
      this.formCadastro.markAllAsTouched();
      console.error('Campos precisam ser preenchidos');
      return;
    }



    this.servico
      .cadastrar(this.formCadastro.value)
      .subscribe(
        (user) => {
          this.roteador.navigate(['login', user.usuario])
        },
        erro => {
          this.msgErro = "Serviço não disponível";
        }
      );
  }
}
