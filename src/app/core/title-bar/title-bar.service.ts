import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { TitleBarItem } from "./title-bar.models";

@Injectable()
export class TitleBarService {

    public titleBarVisible = new BehaviorSubject<boolean>(false);
    public titleBarText = new BehaviorSubject<string>("");
    public titleBarItems = new BehaviorSubject<TitleBarItem[]>([]);

    public updateTitleBar(visible: boolean, titleBarText: string = "", titleBarItems: TitleBarItem[] = []): void {
        this.titleBarVisible.next(visible);
        this.titleBarText.next(titleBarText);
        this.titleBarItems.next(titleBarItems);
    }
}