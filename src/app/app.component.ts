import { Component } from "@angular/core";

import { TitleBarService } from "./core/title-bar";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: [ "./app.component.scss" ]
})
export class AppComponent {
    private titleBarVisible = false;

    constructor(titleBarService: TitleBarService) {
        titleBarService.titleBarVisible.subscribe((visible) => {
            this.titleBarVisible = visible;
        });
    }
}
