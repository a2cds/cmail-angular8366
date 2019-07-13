import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserInput } from 'src/app/models/dto/user-input';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl(''),
    username: new FormControl(''),
    senha: new FormControl(''),
    avatar: new FormControl(''),
    telefone: new FormControl('')
  })

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  cadastrar() {
    if (this.formCadastro.invalid) {
      console.error('Campos precisam ser preenchidos');
      return;
    }

    const dtoUser = new UserInput(this.formCadastro.value);

    this.http
      .post('http://localhost:3200/users', dtoUser)
      .subscribe(
        resposta => console.log(resposta),
        erro => console.error(erro),
        () => {
          this.formCadastro.reset();
        }
      );
  }
}
