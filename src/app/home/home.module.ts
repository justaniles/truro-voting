import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ActionBarComponent } from "./action-bar/action-bar.component";
import { CandidateCardComponent } from "./candidate-card/candidate-card.component";
import { HomeComponent } from "./home.component";
import { homeRoutes } from "./home.routes";
import { ValidationModalComponent } from "./validation-modal/validation-modal.component";
import { ModalModule } from "../modal";

@NgModule({
    declarations: [
        ActionBarComponent,
        CandidateCardComponent,
        HomeComponent,
        ValidationModalComponent
    ],
    imports: [
        CommonModule,
        ModalModule,
        RouterModule,
        homeRoutes
    ]
})
export class HomeModule {
}
