import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AdminComponent } from "./admin.component";
import { adminRoutes } from "./admin.routes";

@NgModule({
    declarations: [ AdminComponent ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        adminRoutes
    ]
})
export class AdminModule {
}
