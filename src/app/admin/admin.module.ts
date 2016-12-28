import { NgModule } from "@angular/core";

import { AdminComponent } from "./admin.component";
import { adminRoutes } from "./admin.routes";
import { CandidateEditComponent } from "./candidate-edit";
import { SharedModule } from "../shared";

@NgModule({
    declarations: [ AdminComponent, CandidateEditComponent ],
    imports: [
        SharedModule,
        adminRoutes
    ]
})
export class AdminModule {
}
