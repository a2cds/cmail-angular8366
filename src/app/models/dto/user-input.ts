export class UserInput {
  name = '';
  username = '';
  phone = '';
  password = '';
  avatar = '';

  constructor({nome, username, senha, avatar, telefone}){
    this.name = nome;
    this.username = username;
    this.phone = telefone;
    this.password = senha;
    this.avatar = avatar;
  }
}
