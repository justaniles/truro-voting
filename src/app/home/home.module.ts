import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MdCardModule } from "@angular2-material/card";
import { MdButtonModule } from "@angular2-material/button";

import { CandidateCardComponent } from "./candidate-card/candidate-card.component";
import { HomeComponent } from "./home.component";
import { homeRoutes } from "./home.routes";

@NgModule({
    declarations: [ CandidateCardComponent, HomeComponent ],
    imports: [
        CommonModule,
        MdCardModule,
        MdButtonModule,
        RouterModule,
        homeRoutes
    ]
})
export class HomeModule {
}
