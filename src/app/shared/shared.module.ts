import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ModalActions, ModalComponent, ModalContent } from "./modal";

@NgModule({
    imports: [CommonModule],
    declarations: [ModalActions, ModalComponent, ModalContent],
    exports: [
        CommonModule, FormsModule,
        ModalActions, ModalComponent, ModalContent
    ]
})
export class SharedModule {
}