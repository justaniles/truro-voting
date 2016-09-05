import { Component } from "@angular/core";

interface NavbarItems {
  name: string;
  url: string;
}

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: [ "./navbar.component.scss" ]
})
export class NavbarComponent {

  navbarItems: NavbarItems[] = [

  ];

  constructor() {
  }
}
