import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MdCardModule } from "@angular2-material/card";
import { MdButtonModule } from "@angular2-material/button";
import { MdInputModule } from "@angular2-material/input";
import { MdSlideToggleModule } from "@angular2-material/slide-toggle";
import { MdSliderModule } from "@angular2-material/slider";

import { AdminComponent } from "./admin.component";
import { adminRoutes } from "./admin.routes";

@NgModule({
    declarations: [ AdminComponent ],
    imports: [
        CommonModule,
        FormsModule,
        MdCardModule,
        MdButtonModule,
        MdInputModule,
        MdSlideToggleModule,
        MdSliderModule,
        RouterModule,
        adminRoutes
    ]
})
export class AdminModule {
}
