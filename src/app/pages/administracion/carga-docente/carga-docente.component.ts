import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargaAcademicaService } from '../../../_services';

@Component({
  selector: 'ngx-carga-docente',
  templateUrl: './carga-docente.component.html',
  styleUrls: ['./carga-docente.component.scss']
})
export class CargaDocenteComponent implements OnInit {

  @Input() cargas:any;
  constructor(
    private _cargaAcademicaService: CargaAcademicaService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToCargaDetail(carga: any){
    this._cargaAcademicaService.setCarga(carga);
    this.router.navigate(["pages/administracion/carga-detail"]);
  }

}
