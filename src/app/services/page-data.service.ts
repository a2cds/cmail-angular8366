import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PageDataService {

  titulo = new Subject<string>()

  atualizarTitulo(tituloNovo) {
    this.titulo.next(tituloNovo);
  }

}
