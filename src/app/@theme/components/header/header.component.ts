import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from "@nebular/theme";

import { UserData } from "../../../@core/data/users";
import { AnalyticsService, LayoutService } from "../../../@core/utils";
import { map, takeUntil } from "rxjs/operators";
import { Subject, Observable, Subscription } from "rxjs";
import { RippleService } from "../../../@core/utils/ripple.service";
import { CurrentThemeService } from "../../../@core/utils/theme.service";
import { AuthenticationService } from "../../../_services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-header",
  styleUrls: ["./header.component.scss"],
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public materialTheme$: Observable<boolean>;
  userPictureOnly: boolean = false;
  user: any;

  recordsSub: Subscription;

  themes = [
    {
      value: "default",
      name: "Light",
    },
    {
      value: "dark",
      name: "Dark",
    },
    {
      value: "cosmic",
      name: "Cosmic",
    },
    {
      value: "corporate",
      name: "Corporate",
    },
    {
      value: "material-light",
      name: "Material Light",
    },
    {
      value: "material-dark",
      name: "Material Dark",
    },
  ];

  currentTheme = "default";

  usersKey = "angular-9-jwt-refresh-token-users";

  userMenu = [{ title: "Profile" }, { title: "Log out" }];

  public constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private userService: UserData,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private rippleService: RippleService,
    private analytics: AnalyticsService,
    private currentThemeService: CurrentThemeService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.materialTheme$ = new Observable((subscriber) => {
      const themeName: string = this.currentThemeService.getCurrentTheme();
      subscriber.next(themeName.startsWith("material"));
    });
  }

  ngOnInit() {
    this.recordsSub = this.menuService.onItemClick().subscribe((event) => {
      this.onItemSelection(event.item.title);
    });

    this.currentTheme = this.themeService.currentTheme;

    this.user = JSON.parse(localStorage.getItem(this.usersKey))[0];

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl)
      );

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe((themeName) => {
        this.currentTheme = themeName;
        this.rippleService.toggle(themeName?.startsWith("material"));
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.currentThemeService.setCurrentTheme(themeName);
    this.themeService.changeTheme(themeName);

    this.materialTheme$ = new Observable((subscriber) => {
      subscriber.next(
        this.currentThemeService.getCurrentTheme().startsWith("material")
      );
    });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, "menu-sidebar");
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  startSearch() {
    this.analytics.trackEvent("startSearch");
  }

  trackEmailClick() {
    this.analytics.trackEvent("clickContactEmail", "click");
  }

  onItemSelection(title) {
    if (title === "Log out") {
      this.authenticationService.logout();
      this.router.navigate(["/auth/login"]);
    } else if (title === "Profile") {
      // Do something on Profile
    }
  }
}
