import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MdCardModule } from "@angular2-material/card";
import { MdButtonModule } from "@angular2-material/button";
import { AngularFireModule } from "angularfire2";

import { AppComponent }   from "./app.component";
import { AdminModule } from "./admin";
import { HomeModule } from "./home";
import { NavbarModule } from "./navbar";
import { CoreModule } from "./core";

var angularFireConfig = {
    apiKey: "AIzaSyC8CMfvh2DVV3UNPgHbaqxGW-17rNQ0THQ",
    authDomain: "truro-voting.firebaseapp.com",
    databaseURL: "https://truro-voting.firebaseio.com",
    storageBucket: "truro-voting.appspot.com",
    messagingSenderId: "316873280178"
};

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        AdminModule,
        AngularFireModule.initializeApp(angularFireConfig),
        BrowserModule,
        CoreModule.forRoot(),
        HomeModule,
        MdCardModule,
        MdButtonModule,
        NavbarModule,
        RouterModule,
        RouterModule.forRoot([])
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
