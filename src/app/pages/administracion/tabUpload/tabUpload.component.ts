import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { WebSocketService } from "../../../_services";

@Component({
  selector: "ngx-tabUpload",
  templateUrl: "./tabUpload.component.html",
  styleUrls: ["./tabUpload.component.scss"],
  providers: [WebSocketService],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TabUploadComponent implements OnInit {
  tipo: String;
  constructor() {}

  ngOnInit(): void {}

  onChangeTab(tipo: String) {
    this.tipo = tipo["tabTitle"];
  }
}
