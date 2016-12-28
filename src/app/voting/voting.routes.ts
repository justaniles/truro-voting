import { Routes, RouterModule } from "@angular/router";
import { VotingComponent } from "./voting.component";

const routes: Routes = [
    { path: "voting", component: VotingComponent }
];

export const votingRoutes = RouterModule.forChild(routes);
