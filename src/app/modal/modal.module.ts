import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ModalComponent } from "./modal.component";
import { ModalActions, ModalContent } from "./modal.directives";

@NgModule({
    imports: [ CommonModule, RouterModule ],
    declarations: [ ModalComponent, ModalActions, ModalContent ],
    exports: [ ModalComponent, ModalActions, ModalContent ]
})
export class ModalModule {
}
