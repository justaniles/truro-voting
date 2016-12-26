import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ActionBarComponent } from "./action-bar/action-bar.component";
import { CandidateCardComponent } from "./candidate-card/candidate-card.component";
import { VotingComponent } from "./voting.component";
import { homeRoutes } from "./voting.routes";
import { ValidationModalComponent } from "./validation-modal/validation-modal.component";
import { SharedModule } from "../shared";

@NgModule({
    declarations: [
        ActionBarComponent,
        CandidateCardComponent,
        VotingComponent,
        ValidationModalComponent
    ],
    imports: [
        SharedModule,
        RouterModule,
        homeRoutes
    ]
})
export class VotingModule {
}
