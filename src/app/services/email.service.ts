import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Email } from '../models/email';
import { EmailInput } from '../models/dto/email-input';
import { EmailOutput } from '../models/dto/email-output';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EmailService {

  url = environment.api + 'emails';

  headersAuth = {
    headers: new HttpHeaders('Authorization: ' + localStorage.getItem('cmail-token'))
  }

  constructor(private httpClient: HttpClient) { }

  enviar(email: Email) {

    let emailDto = new EmailInput(email);

    return this.httpClient
      .post(this.url, emailDto, this.headersAuth);

  }

  excluir(id: String) {
    console.log(this.url + '/' + id);
    return this.httpClient
      .delete(this.url + '/' + id, this.headersAuth)
  }

  carregar(): Observable<Email[]> {
    return this.httpClient
      .get<EmailOutput[]>(this.url, this.headersAuth)
      .pipe(
        map(
          listaEmails => {
            return listaEmails.map(
              emailApi => {
                let email: Email = {
                  destinatario: emailApi.to,
                  conteudo: emailApi.content,
                  assunto: emailApi.subject,
                  remetente: emailApi.from,
                  id: emailApi.id,
                  dataEnvio: emailApi.created_at,
                  introducaoDoConteudo: emailApi.content.substr(0, 140) + '...'
                }
                return email;
              }
            )
          }
        )
      )
  }

}
