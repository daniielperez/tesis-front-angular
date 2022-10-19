import { DatePipe } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbIconLibraries,
  NbToastrService,
} from "@nebular/theme";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { respuestaUpload, SolicitudUpload } from "../../../_models";
import { SolicitudService } from "../../../_services";
// import { valorReloj, XsegundoService } from "../../../_services/reloj.service";

@Component({
  selector: "ngx-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
  // providers: [XsegundoService],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UploadComponent implements OnInit, OnDestroy {
  public solicitudUpload: SolicitudUpload;
  public solicitud: SolicitudUpload;
  public respuestaUpload: respuestaUpload;
  public isErrors: boolean;
  public load: boolean = false;
  index = 1;
  destroy$: Subject<boolean> = new Subject<boolean>();
  // hora: number;
  // minutos: number;
  // ampm: string;
  // segundos: number;

  // datos$: Observable<valorReloj>;
  public solicitudStateUpload: SolicitudUpload;
  public solicitudesUpload = [];
  public files: any[] = [];
  public upload = false;

  constructor(
    private datePipe: DatePipe,
    iconsLibrary: NbIconLibraries,
    private toastrService: NbToastrService,

    public _solicitudService: SolicitudService
  ) {
    iconsLibrary.registerFontPack("fa", {
      packClass: "fa",
      iconClassPrefix: "fa",
    });
  }

  ngOnInit(): void {
    this.upload = false;
    this.solicitudStateUpload = null;
    this.solicitudUpload = null;
    this._solicitudService
      .getByTipo("USUARIOS")
      .pipe(takeUntil(this.destroy$))
      .subscribe((request) => {
        console.log(request);
        this.solicitudesUpload = request;
        this.solicitudStateUpload = this.solicitudesUpload.find(
          (p) => p.estado == "Procesando"
        );
        this.solicitudesUpload = this.solicitudesUpload.filter(
          (item) => item !== this.solicitudStateUpload
        );
        console.log(this.solicitudesUpload);
        this.upload = this.solicitudStateUpload ? true : false;
      });
    // if (this.solicitudStateUpload) {
    //   this.datos$ = this.segundo.getInfoReloj();
    //   this.datos$.subscribe((x) => {
    //     this.hora = x.hora - 5;
    //     this.minutos = parseInt(x.minutos);
    //     this.ampm = x.ampm;
    //     this.segundos = parseInt(x.segundo);
    //   });
    //   this.upload = true;
    // }
  }

  onFileChange(pFileList: File[]) {
    this.files = pFileList;

    this.solicitudUpload = {
      id: "null",
      username: "12314",
      nomArchivo: this.files[0].name,
      numValid: "null",
      estado: "listo para validar",
      tiempo: null,
      fechaInicio: new Date(),
    };
    // this.solicitudUpload = SolicitudUpload.solicitudUploadToJson(
    //   this.solicitud
    // );
  }

  deleteFromArray() {
    // this.files.splice(index, 1);
    this.files = [];
    this.isErrors = false;
    this.solicitudUpload = null;
    console.log(this.files);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  onSubmit() {
    console.log(this.solicitudUpload);
    this.isErrors = false;
    this.load = true;
    let fd = new FormData();
    fd.append("file", this.files[0]);
    fd.append("solicitud", JSON.stringify(this.solicitudUpload));
    this._solicitudService
      .insert(fd)
      .pipe(takeUntil(this.destroy$))
      .subscribe((request) => {
        this.load = false;
        if (request.status == 200) {
          this.respuestaUpload = request.body;
          console.log(this.respuestaUpload);
          if (this.respuestaUpload.valid) {
            let status: NbComponentStatus = "success";
            this.showToast(
              status,
              "¡Estamos trabjando!",
              "El archivo se esta cargando"
            );
            this.ngOnInit();
          } else {
            let status: NbComponentStatus = "danger";
            this.showToast(
              status,
              "¡Oh cielos!",
              "El archivo presenta errores"
            );
            this.isErrors = true;
          }
        }
      });
  }

  showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 6000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
      preventDuplicates: false,
    };
    const titleContent = title ? `${title}` : "";

    this.index += 1;

    this.toastrService.show(body, `${titleContent}`, config);
  }
}
