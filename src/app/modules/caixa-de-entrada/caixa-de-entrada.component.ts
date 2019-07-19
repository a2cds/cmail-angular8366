import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor(private servico: EmailService) { }

  ngOnInit() {
  }

  private _isNewEmailFormOpen = false;

  emailList = [];
  email: Email = new Email({ destinatario: '', assunto: '', conteudo: '' });

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  set isNewEmailFormOpen(value) {
    this._isNewEmailFormOpen = value;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm) {

    if (formEmail.invalid) {
      formEmail.controls['para'].markAsTouched;
      formEmail.controls['assunto'].markAsTouched;
      return;
    }

    let novoEmail = new Email(this.email);

    this.servico.enviar(novoEmail)
      .subscribe(
        (resposta) => {
          console.log(resposta);
          this.emailList.push(novoEmail);
          formEmail.reset();

          this.toggleNewEmailForm();
        },
        erro => console.error(erro)
      );
  }
}
