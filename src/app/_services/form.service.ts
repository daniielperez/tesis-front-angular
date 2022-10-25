import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor(private formBuilder: FormBuilder) {}

  newFormSede(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      nombre: [d?.nombre, [Validators.required]],
      direccion: [d?.direccion, [Validators.required]],
      telefono: [d?.telefono, [Validators.required]],
      extension: [d?.extension, [Validators.required]],
      caracteristica: [d?.caracteristica],
    });
  }
  newFormExtension(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      codigo: [d?.codigo, [Validators.required]],
      nombre: [d?.nombre, [Validators.required]],
    });
  }
  newFormEdificio(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      nombre: [d?.nombre, [Validators.required]],
      direccion: [d?.direccion],
    });
  }
  newFormPlanEstudio(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      nombre: [d?.nombre, [Validators.required]],
      idPrograma: [d?.programa.id, [Validators.required]],
    });
  }
  newFormBloque(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      nombre: [d?.nombre, [Validators.required]],
      idEdificio: [d?.idEdificio, [Validators.required]],
    });
  }
  newFormPiso(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      nombre: [d?.nombre, [Validators.required]],
      caracteristica: [d?.caracteristica],
      bloque: [d?.bloque, [Validators.required]],
    });
  }
  newFormSalon(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      nombre: [d?.nombre, [Validators.required]],
      cupo: [d?.cupo, [Validators.required]],
      dimension: [d?.dimension, [Validators.required]],
      codDispositivo: [d?.codDispositivo],
      idPiso: [d?.idPiso],
      idTipoSalon: [d?.idTipoSalon, [Validators.required]],
    });
  }
  newFormTsalon(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      nombre: [d?.nombre, [Validators.required]],
    });
  }
  newFormDispositivo(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      nombre: [d?.nombre, [Validators.required]],
      fecha: [d?.fecha, [Validators.required]],
      nui: [d?.nui, [Validators.required]],
      salon: [d?.salon, [Validators.required]],
    });
  }
  newFormSesion(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      fechain: [d?.fechain, [Validators.required]],
      horaen: [d?.horaen, [Validators.required]],
      horasa: [d?.horasa],
      expedicion: [d?.expedicion, [Validators.required]],
      novedad: [d?.novedad],
      tipclase: [d?.tipclase, [Validators.required]],
      url: [d?.url],
      salon: [d?.salon, [Validators.required]],
    });
  }
  newFormFalta(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      descripcion: [d?.descripcion],
      falta: [d?.falta, [Validators.required]],
      sesion: [d?.sesion, [Validators.required]],
      estudiante: [d?.estudiante, [Validators.required]],
    });
  }
  newFormAnexo(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      archivo: [d?.archivo, [Validators.required]],
      fecha: [d?.fecha, [Validators.required]],
      hora: [d?.hora, [Validators.required]],
      falta: [d?.falta, [Validators.required]],
    });
  }
  newFormEstudiante(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      codigo: [d?.codigo, [Validators.required]],
      nombre: [d?.nombre, [Validators.required]],
      apellido: [d?.apellido, [Validators.required]],
      direccion: [d?.direccion, [Validators.required]],
      telefono: [d?.telefono, [Validators.required]],
      celular: [d?.celular, [Validators.required]],
      correo: [d?.correo, [Validators.required, Validators.email]],
      foto: [d?.foto],
    });
  }
  newFormAsistencia(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      entrada: [d?.entrada, [Validators.required]],
      salida: [d?.salida],
      sesion: [d?.sesion, [Validators.required]],
      estudiante: [d?.estudiante, [Validators.required]],
    });
  }
  newFormHorario(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      dia: [d?.dia, [Validators.required]],
      hinicio: [d?.hinicio],
      tclase: [d?.tclase, [Validators.required]],
      hfin: [d?.hfin, [Validators.required]],
      carga: [d?.carga, [Validators.required]],
      salon: [d?.salon, [Validators.required]],
    });
  }
  newFormMatmateria(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      codigo: [d?.codigo, [Validators.required]],
      codmat: [d?.codmat, [Validators.required]],
      fecha: [d?.fecha, [Validators.required]],
      iprmat: [d?.iprmat, [Validators.required]],
      hormat: [d?.hormat, [Validators.required]],
      estmat: [d?.estmat, [Validators.required]],
      fccmat: [d?.fccmat, [Validators.required]],
      grumat: [d?.grumat, [Validators.required]],
      fcmmat: [d?.fcmmat, [Validators.required]],
      ipcmat: [d?.ipcmat, [Validators.required]],
      frmmat: [d?.frmmat, [Validators.required]],
      antmat: [d?.antmat, [Validators.required]],
      estudiante: [d?.estudiante, [Validators.required]],
      espacio: [d?.espacio, [Validators.required]],
      carga: [d?.carga, [Validators.required]],
    });
  }
  newFormCarga(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      codigo: [d?.codigo, [Validators.required]],
      periodo: [d?.codigo, [Validators.required]],
      grupo: [d?.grupo, [Validators.required]],
      tipo: [d?.tipo, [Validators.required]],
      jornada: [d?.jornada, [Validators.required]],
      intensidad: [d?.intensidad, [Validators.required]],
      integracion: [d?.integracion, [Validators.required]],
      docente: [d?.docente, [Validators.required]],
      espacio: [d?.espacio, [Validators.required]],
    });
  }
  newFormCargasesion(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      sesion: [d?.sesion, [Validators.required]],
      carga: [d?.carga, [Validators.required]],
    });
  }
  newFormDocente(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      codigo: [d?.codigo, [Validators.required]],
      nombre: [d?.nombre, [Validators.required]],
      apellido: [d?.apellido, [Validators.required]],
      snombre: [d?.snombre, [Validators.required]],
      sapellido: [d?.sapellido, [Validators.required]],
      direccion: [d?.direccion, [Validators.required]],
      telefono: [d?.telefono, [Validators.required]],
      celular: [d?.celular, [Validators.required]],
      correo: [d?.correo, [Validators.required]],
    });
  }
  newFormEspacio(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      semestre: [d?.semestre, [Validators.required]],
      nombre: [d?.nombre, [Validators.required]],
      idPlanEstudio: [d?.planEstudio.id, [Validators.required]],
    });
  }
  newFormPrograma(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      codigo: [d?.codigo, [Validators.required]],
      nombre: [d?.nombre, [Validators.required]],
      semestre: [d?.semestre, [Validators.required]],
      metodologia: [d?.metodologia, [Validators.required]],
      estado: [d?.estado, [Validators.required]],
      indicativo: [d?.indicativo, [Validators.required]],
      facultad: [d?.facultad, [Validators.required]],
    });
  }
  newFormFacultad(d?) {
    return this.formBuilder.group({
      id: [d?.id],
      codigo: [d?.codigo, [Validators.required]],
      nombre: [d?.nombre, [Validators.required]],
    });
  }
}
