export class Email{
    destinatario = '';
    assunto = '';
    conteudo = '';
    remetente = '';
    id = '';
    dataEnvio = '';

    constructor({destinatario, assunto, conteudo, dataEnvio}){
        this.destinatario = destinatario;
        this.assunto = assunto;
        this.conteudo = conteudo;
        this.dataEnvio = dataEnvio;
    }

    get introducaoDoConteudo(){
      return this.conteudo.substr(0, 140) + '...'
    }
}
