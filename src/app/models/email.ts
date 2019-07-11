export class Email{
    destinatario = '';
    assunto = '';
    conteudo = '';

    constructor({destinatario, assunto, conteudo}){
        this.destinatario = destinatario;
        this.assunto = assunto;
        this.conteudo = conteudo;
    }
}