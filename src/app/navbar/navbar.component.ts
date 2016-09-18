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
            name: "Home",
            url: "/home"
        },
        {
            name: "Admin",
            url: "/admin"
        }
    ];

    constructor() {
    }
}
