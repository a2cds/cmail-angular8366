import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() destinatario = "";
  @Input() assunto = "";
  @Input() introducaoDoConteudo = "";
  @Input() dataEnvio = "";
  @Input() id = "";

  @Output() vaiExcluir = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  excluir() {
    this.vaiExcluir.emit(this.id);
  }

}
