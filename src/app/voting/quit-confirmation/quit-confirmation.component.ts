import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { ModalComponent } from "../../shared/modal";

@Component({
    selector: "quit-confirmation-modal",
    template:
    `<modal #modal>
        <modal-content>
            <span>Do you want to quit? Your votes will not be cast.</span>
        </modal-content>
        <modal-actions>
            <button class="btn-flat" (click)="cancel()">Cancel</button>
            <button class="btn-flat" (click)="confirmQuit()">Quit</button>
        </modal-actions>
    </modal>`
})
export class QuitConfirmationComponent {
    
    @ViewChild("modal")
    private modal: ModalComponent;

    constructor(
        private router: Router
    ) {}

    public showConfirmationDialog(): void {
        this.modal.show();
    }

    private confirmQuit(): void {
        this.router.navigateByUrl("/");
    }

    private cancel(): void {
        this.modal.dismiss();
    }
}
