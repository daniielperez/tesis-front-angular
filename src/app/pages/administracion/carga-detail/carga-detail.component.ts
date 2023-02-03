import { Component, OnDestroy, OnInit } from '@angular/core';
import { CargaAcademicaService } from '../../../_services';

@Component({
  selector: 'ngx-carga-detail',
  templateUrl: './carga-detail.component.html',
  styleUrls: ['./carga-detail.component.scss']
})
export class CargaDetailComponent implements OnInit, OnDestroy {
  cargaAcademica:any;
  constructor(
    private _cargaService: CargaAcademicaService,
    
  ) { }
  ngOnDestroy(): void {
    this._cargaService.clearCarga();
  }

  ngOnInit() {
    this._cargaService.carga$.subscribe((cargaAcademica)=>{
      this.cargaAcademica = this._cargaService.getCarga();
      console.log(this.cargaAcademica)
    });
    
  }

}
