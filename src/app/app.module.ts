import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MdCardModule } from "@angular2-material/card";
import { MdButtonModule } from "@angular2-material/button";

import { AppComponent }   from "./app.component";
import { AdminModule } from "./admin";
import { HomeModule } from "./home";
import { NavbarModule } from "./navbar";
import { CoreModule } from "./core";

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        AdminModule,
        BrowserModule,
        HomeModule,
        MdCardModule,
        MdButtonModule,
        NavbarModule,
        RouterModule,
        RouterModule.forRoot([]),
        CoreModule.forRoot()
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
