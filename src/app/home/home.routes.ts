import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", redirectTo: "", pathMatch: "full" }
];

export const homeRoutes = RouterModule.forChild(routes);
