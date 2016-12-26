import { Component } from "@angular/core";

interface NavbarItem {
    name: string;
    url: string;
}

@Component({
    selector: ".tv-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: [ "./navbar.component.scss" ]
})
export class NavbarComponent {

    navbarItems: NavbarItem[] = [
        {
            name: "Voting",
            url: "/voting"
        },
        {
            name: "Admin",
            url: "/admin"
        }
    ];

    constructor() {
    }
}
