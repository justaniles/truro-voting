import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "tv-home",
    templateUrl: "./home.component.html",
    styleUrls: [ "./home.component.scss" ]
})
export class HomeComponent {

    private router: Router;

    constructor(router: Router) { 
        this.router = router;
    }

    public gotoAdmin(): void {
        this.router.navigateByUrl("/admin");
    }

    public gotoVoting(): void {
        this.router.navigateByUrl("/voting");
    }
}
