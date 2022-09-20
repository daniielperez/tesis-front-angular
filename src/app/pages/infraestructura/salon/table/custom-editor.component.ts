import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { DefaultEditor } from "ng2-smart-table";

@Component({
  template: `
    <input
      [ngClass]="inputClass"
      #id
      [type]="this.cell.getColumn().type"
      required
      class="form-control short-input"
      [id]="cell.getId()"
      [disabled]="!cell.isEditable()"
      [placeholder]="cell.getTitle()"
      (click)="onClick.emit($event)"
      (keyup)="updateValue()"
      (keydown.enter)="onEdited.emit($event)"
      (keydown.esc)="onStopEditing.emit()"
    /><br />
    <input
      [ngClass]="inputClass"
      #url
      class="form-control short-input"
      [name]="cell.getId()"
      [disabled]="!cell.isEditable()"
      placeholder="Url"
      (click)="onClick.emit($event)"
      (keyup)="updateValue()"
      (keydown.enter)="onEdited.emit($event)"
      (keydown.esc)="onStopEditing.emit()"
    />
    <div [hidden]="true" [innerHTML]="cell.getValue()" #htmlValue></div>
  `,
})
export class CustomEditorComponent
  extends DefaultEditor
  implements AfterViewInit
{
  @ViewChild("id") id: ElementRef;
  @ViewChild("url") url: ElementRef;
  @ViewChild("htmlValue") htmlValue: ElementRef;

  constructor() {
    super();
  }

  ngAfterViewInit() {
    if (this.cell.newValue !== "") {
      this.id.nativeElement.value = this.getId();
    }
  }

  updateValue() {
    const id = this.id.nativeElement.value;
    this.cell.newValue = id;
  }

  getId(): string {
    return this.htmlValue.nativeElement.innerText;
  }
}
