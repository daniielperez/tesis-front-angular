import { DatePipe } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
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
import { SolicitudService, WebSocketService } from "../../../_services";
// import { valorReloj, XsegundoService } from "../../../_services/reloj.service";

@Component({
  selector: "ngx-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
  providers: [WebSocketService],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UploadComponent implements OnInit, OnDestroy {
  @Input() tipo: string;
  @Input() titulo: string;
  public solicitudUpload: SolicitudUpload;
  public solicitud: SolicitudUpload;
  public respuestaUpload: respuestaUpload;
  public isErrors: boolean;
  public load: boolean = false;
  index = 1;
  user: any;
  usersKey = "angular-9-jwt-refresh-token-users";
  stompClient;
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
    private webSocketService: WebSocketService,
    public _solicitudService: SolicitudService
  ) {
    iconsLibrary.registerFontPack("fa", {
      packClass: "fa",
      iconClassPrefix: "fa",
    });

    this.user = JSON.parse(localStorage.getItem(this.usersKey));
    console.log(this.user);
    this.stompClient = this.webSocketService.connect();

    this.stompClient.connect({}, (frame) => {
      this.stompClient.subscribe("/topic/upload-finish", (request) => {
        this.ngOnInit();
      });
      this.stompClient.send(
        "/app/chat.addUser",
        {},
        JSON.stringify({ sender: this.user.username, type: "JOIN" })
      );
    });
  }

  ngOnInit(): void {
    this.upload = false;
    this.solicitudStateUpload = null;
    this.solicitudUpload = null;
    this._solicitudService
      .getByTipo(this.tipo)
      .pipe(takeUntil(this.destroy$))
      .subscribe((request) => {
        this.solicitudesUpload = request;
        this.solicitudStateUpload = this.solicitudesUpload.find(
          (p) => p.estado == "Procesando"
        );
        this.solicitudesUpload = this.solicitudesUpload.filter(
          (item) => item !== this.solicitudStateUpload
        );
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
      username: this.user.username,
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
    this.webSocketService.disconnect(this.stompClient);
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
    switch (this.tipo) {
      case "USUARIOS":
        this.insertCallService(fd, "personas");
        break;
      case "CARGAS_ACADEMICAS":
        this.insertCallService(fd, "cargas-academicas");
        break;
      case "MATRICULA":
        this.insertCallService(fd, "matricula");
        break;

      default:
        break;
    }
  }

  insertCallService(fd: FormData, endPoint: String) {
    this._solicitudService
      .insert(fd, endPoint)
      .pipe(takeUntil(this.destroy$))
      .subscribe((request) => {
        this.load = false;
        if (request.status == 200) {
          this.respuestaUpload = request.body;
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
