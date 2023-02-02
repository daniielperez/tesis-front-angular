import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-info-persona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.scss']
})
export class InfoPersonaComponent implements OnInit {
  @Input() usuario: any;
  constructor() { }

  ngOnInit() {
  }

}
