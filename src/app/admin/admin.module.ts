import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MdCardModule } from "@angular2-material/card";
import { MdButtonModule } from "@angular2-material/button";
import { MdSliderModule } from "@angular2-material/slider";

import { AdminComponent } from "./admin.component";
import { adminRoutes } from "./admin.routes";

@NgModule({
    declarations: [ AdminComponent ],
    imports: [
        CommonModule,
        MdCardModule,
        MdButtonModule,
        MdSliderModule,
        RouterModule,
        adminRoutes
    ]
})
export class AdminModule {
}
