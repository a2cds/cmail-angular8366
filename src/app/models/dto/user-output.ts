export class UserOutput {
  avatarUrl = "";
  email = "";
  id = "";
  nome = "";
  senha = "";
  telefone = "";
  updatedAt = "";
  username = "";

  constructor({avatar_url, email, id, name, password, phone, updated_at, username}){
    this.avatarUrl = avatar_url;
    this.email = email;
    this.id = id;
    this.nome = name;
    this.senha = password;
    this.telefone = phone;
    this.updatedAt = updated_at;
    this.username = username;
  }
}
