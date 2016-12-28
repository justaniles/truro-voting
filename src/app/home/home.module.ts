import { NgModule } from "@angular/core";

import { HomeComponent } from "./home.component";
import { homeRoutes } from "./home.routes";
import { SharedModule } from "../shared";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule,
        homeRoutes
    ]
})
export class HomeModule {
}
