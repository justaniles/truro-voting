import { Component } from "@angular/core";
import { Event, NavigationStart } from "@angular/router";

import { TitleBarItem } from "./title-bar.models";
import { TitleBarService } from "./title-bar.service";

@Component({
    selector: "tv-title-bar",
    templateUrl: "./title-bar.component.html",
    styleUrls: [ "./title-bar.component.scss" ]
})
export class TitleBarComponent {

    private visible = true;
    private titleBarText = "";
    private titleBarItems: TitleBarItem[] = [];

    constructor(titleBarSerivce: TitleBarService) {
        titleBarSerivce.titleBarVisible.subscribe((visible) => {
            this.visible = visible;
        });

        titleBarSerivce.titleBarText.subscribe((text) => {
            this.titleBarText = text;
        });

        titleBarSerivce.titleBarItems.subscribe((items) => {
            this.titleBarItems = items;
        });
    }
}
