import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: 'ngx-view-espacioAcademico-modal',
  templateUrl: './view-espacioAcademico-modal.component.html',
  styleUrls: ['./view-espacioAcademico-modal.component.scss']
})
export class ViewEspacioAcademicoModalComponent implements OnInit {
  @Input() matricula: any;

  constructor(
    protected ref: NbDialogRef<ViewEspacioAcademicoModalComponent>,
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.ref.close();
  }

}
