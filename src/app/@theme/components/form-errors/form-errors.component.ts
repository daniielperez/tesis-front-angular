import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-form-errors",
  templateUrl: "./form-errors.component.html",
  styleUrls: ["./form-errors.component.scss"],
})
export class FormErrorsComponent implements OnInit {
  @Input() campo: any;
  @Input() control: any;
  constructor() {}

  ngOnInit() {
    // console.log(this.control);
  }
}
