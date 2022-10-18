import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { NbIconLibraries } from "@nebular/theme";
import { SolicitudUpload } from "../../../_models";
import { SolicitudService } from "../../../_services";
// import { valorReloj, XsegundoService } from "../../../_services/reloj.service";

@Component({
  selector: "ngx-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
  // providers: [XsegundoService],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UploadComponent implements OnInit {
  public solicitudUpload: SolicitudUpload;
  public solicitud: SolicitudUpload;

  // hora: number;
  // minutos: number;
  // ampm: string;
  // segundos: number;

  // datos$: Observable<valorReloj>;
  public solicitudStateUpload: SolicitudUpload;
  public solicitudesUpload = [
    new SolicitudUpload(
      "1",
      "daniel",
      "nombreArchivo.excel",
      1,
      // "Procesando",
      "Finalizo",
      "5:48:01"
    ),
    new SolicitudUpload(
      "1",
      "daniel",
      "nombreArchivo.excel",
      2,
      "Finalizo",
      "5:48:01"
    ),
  ];
  public files: any[] = [];
  public upload = false;

  constructor(
    iconsLibrary: NbIconLibraries,
    public _solicitudService: SolicitudService
  ) {
    iconsLibrary.registerFontPack("fa", {
      packClass: "fa",
      iconClassPrefix: "fa",
    });
  }

  ngOnInit(): void {
    this.solicitudStateUpload = this.solicitudesUpload.find(
      (p) => p.estado == "Procesando"
    );
    this.solicitudesUpload = this.solicitudesUpload.filter(
      (item) => item !== this.solicitudStateUpload
    );
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
    this.upload = this.solicitudStateUpload ? true : false;
  }

  onFileChange(pFileList: File[]) {
    this.files = pFileList;
    this.solicitudUpload = {
      id: "null",
      username: "12314",
      nomArchivo: this.files[0].name,
      numValid: "null",
      estado: "listo para validar",
      fechaInicio: "12:45:03",
    };
    // this.solicitudUpload = SolicitudUpload.solicitudUploadToJson(
    //   this.solicitud
    // );
  }

  deleteFromArray() {
    // this.files.splice(index, 1);
    this.files = [];
    this.solicitudUpload = null;
    console.log(this.files);
  }

  onSubmit() {
    console.log(this.solicitudUpload);
    let fd = new FormData();
    fd.append("file", this.files[0]);
    fd.append("solicitud", JSON.stringify(this.solicitudUpload));
    this._solicitudService.insert(fd).subscribe((request) => {
      console.log(request);
    });
  }
}

// {"id":"null","nomArchivo":"Jane","userneme":"daniel","fechaInicio":"100000.0","timpo": "98218281812"}
// {"id":null,"username":"12314","nombreArchivo":"Book1.xlsx","numValid":null,"estado":"listo para validar","fechaInicio":"12:45:03"}
