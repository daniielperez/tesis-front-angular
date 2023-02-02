import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-carga-docente',
  templateUrl: './carga-docente.component.html',
  styleUrls: ['./carga-docente.component.scss']
})
export class CargaDocenteComponent implements OnInit {

  @Input() cargas:any;
  constructor() { }

  ngOnInit() {
  }

}
