import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargaAcademicaService {
  private cargaSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public carga$: Observable<any> = this.cargaSubject.asObservable();

constructor() { }

  setCarga(carga: any){
    this.cargaSubject.next(carga);
    localStorage.setItem('cargaSelect',JSON.stringify(carga));
  }

  getCarga(){
    return JSON.parse(localStorage.getItem('cargaSelect'));
  }

  clearCarga(){
    localStorage.removeItem('cargaSelect');
  }

}


