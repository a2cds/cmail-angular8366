import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserInput } from '../models/dto/user-input';
import { Observable } from 'rxjs';
import { UserOutput } from '../models/dto/user-output';
import { map } from 'rxjs/operators';
import { User } from '../models/user';


export class UserService {

  url = environment.api + 'users';

  constructor(private httpClient: HttpClient) { }

  cadastrar(dadosFormCadastro): Observable<User> {

    const dtoUser = new UserInput(dadosFormCadastro);

    return this.httpClient
      .post<UserOutput>(this.url, dtoUser)
      .pipe(
        map(userApi => ({
          nome: userApi.name,
          usuario: userApi.username
        }))
      )
  }
}
