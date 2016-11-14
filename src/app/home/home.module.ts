import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ActionBarComponent } from "./action-bar/action-bar.component";
import { CandidateCardComponent } from "./candidate-card/candidate-card.component";
import { HomeComponent } from "./home.component";
import { homeRoutes } from "./home.routes";

@NgModule({
    declarations: [
        ActionBarComponent,
        CandidateCardComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        homeRoutes
    ]
})
export class HomeModule {
}
