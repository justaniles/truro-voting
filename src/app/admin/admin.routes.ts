import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
    { path: "admin", component: AdminComponent }
];

export const adminRoutes = RouterModule.forChild(routes);
