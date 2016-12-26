import { Routes, RouterModule } from "@angular/router";
import { VotingComponent } from "./voting.component";

const routes: Routes = [
    { path: "voting", component: VotingComponent },
    { path: "", redirectTo: "voting", pathMatch: "full" }
];

export const homeRoutes = RouterModule.forChild(routes);
