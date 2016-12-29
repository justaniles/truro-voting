import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { TitleBarService } from "../core/title-bar";

@Component({
    selector: "tv-home",
    templateUrl: "./home.component.html",
    styleUrls: [ "./home.component.scss" ]
})
export class HomeComponent {


    constructor(
        private router: Router,
        private titleBarService: TitleBarService
    ) {
        titleBarService.updateTitleBar(false);
    }

    public gotoAdmin(): void {
        this.router.navigateByUrl("/admin");
    }

    public gotoVoting(): void {
        this.router.navigateByUrl("/voting");
    }
}
