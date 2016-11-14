import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "action-bar",
    templateUrl: "action-bar.component.html",
    styleUrls: [ "action-bar.component.scss" ]
})
export class ActionBarComponent {

    @Input()
    public message: string;

    @Input()
    public primaryButtonText: string;

    @Input()
    public secondaryButtonText: string;

    @Input()
    public visible: boolean;

    @Output()
    public primaryButtonClicked = new EventEmitter();

    @Output()
    public secondaryButtonClicked = new EventEmitter();

}
