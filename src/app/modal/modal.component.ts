import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "modal",
    templateUrl: "modal.component.html",
    styleUrls: [ "modal.component.scss" ]
})
export class ModalComponent {

    @Input()
    public active = false;

    @Output()
    public activeChange = new EventEmitter<boolean>();

    @Output()
    public onDismiss = new EventEmitter<any>();

    /**
     * Shows this modal immediately.
     */
    public show(): void {
        if (!this.active) {
            this.updateActive(true);
        }
    }

    /**
     * Dismisses this modal immediately.
     */
    public dismiss(): void {
        if (this.active) {
            this.updateActive(false);
            this.onDismiss.emit(null);
        }
    }

    private stopPropagation(event: Event) {
        event.stopPropagation();
    }

    /**
     * Updates whether this modal is active and showing and emits the change event so
     * that the modal's active property can be used in two-way binding.
     * @param value The new active value.
     */
    private updateActive(value: boolean): void {
        this.active = value;
        this.activeChange.emit(value);
    }
}
