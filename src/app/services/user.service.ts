import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserInput } from '../models/dto/user-input';
import { Observable } from 'rxjs';
import { UserOutput } from '../models/dto/user-output';
import { map } from 'rxjs/operators';


export class UserService {

  url = environment.api + 'users';

  constructor(private httpClient: HttpClient) { }

  cadastrar(dadosFormCadastro): Observable<UserOutput> {

    const dtoUser = new UserInput(dadosFormCadastro);

    return this.httpClient
      .post(this.url, dtoUser)
      .pipe(
        map((userApi: any) => new UserOutput(userApi))
      )

  }
}
