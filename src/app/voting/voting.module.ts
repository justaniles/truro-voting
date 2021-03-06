import { NgModule } from "@angular/core";

import { ActionBarComponent } from "./action-bar/action-bar.component";
import { CandidateCardComponent } from "./candidate-card/candidate-card.component";
import { QuitConfirmationComponent } from "./quit-confirmation/quit-confirmation.component";
import { VotingComponent } from "./voting.component";
import { votingRoutes } from "./voting.routes";
import { ValidationModalComponent } from "./validation-modal/validation-modal.component";
import { SharedModule } from "../shared";

@NgModule({
    declarations: [
        ActionBarComponent,
        CandidateCardComponent,
        QuitConfirmationComponent,
        VotingComponent,
        ValidationModalComponent
    ],
    imports: [
        SharedModule,
        votingRoutes
    ]
})
export class VotingModule {
}
