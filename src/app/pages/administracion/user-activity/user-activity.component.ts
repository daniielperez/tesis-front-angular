import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { EventInput } from "@fullcalendar/core";
import { NbThemeService } from "@nebular/theme";
import { takeWhile } from "rxjs/operators";

import {
  UserActivityData,
  UserActive,
} from "../../../@core/data/user-activity";

@Component({
  selector: "ngx-user-activity",
  styleUrls: ["./user-activity.component.scss"],
  templateUrl: "./user-activity.component.html",
})
export class ECommerceUserActivityComponent implements OnDestroy, OnInit {
  private alive = true;
  @Input() actividades: EventInput[] = [];
  userActivity: UserActive[] = [];
  type = "month";
  types = ["week", "month", "year"];
  currentTheme: string;

  constructor(
    private themeService: NbThemeService,
    private userActivityService: UserActivityData
  ) {
    this.themeService
      .getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe((theme) => {
        this.currentTheme = theme.name;
      });

  }
  ngOnInit(): void {
  }

 

  ngOnDestroy() {
    this.alive = false;
  }
}
