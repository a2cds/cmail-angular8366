import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _isNewEmailFormOpen = false;

  emailList = [];
  email:Email = new Email({destinatario: '', assunto: '', conteudo: ''});

  get isNewEmailFormOpen(){
    return this._isNewEmailFormOpen;
  }

  set isNewEmailFormOpen(value){
    this._isNewEmailFormOpen = value;
  }

  toggleNewEmailForm(){
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm){

    if(formEmail.invalid){
      formEmail.controls['para'].markAsTouched;
      formEmail.controls['assunto'].markAsTouched;
      return;
    }

    let newEmail = new Email(this.email);

    this.emailList.push(newEmail);

    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    }
    formEmail.reset();

    this.toggleNewEmailForm();

  }
}
