import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor(private servico: EmailService) { }

  ngOnInit() {
    this.carregarEmails();
  }

  carregarEmails() {
    this.servico
      .carregar()
      .subscribe(
        listaEmailsApi => this.emailList = listaEmailsApi
      );
  }

  private _isNewEmailFormOpen = false;

  emailList = [];
  email: Email = new Email({ destinatario: '', assunto: '', conteudo: '', dataEnvio: '' });

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
