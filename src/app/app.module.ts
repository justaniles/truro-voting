import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "angularfire2";
import { MaterializeModule } from "angular2-materialize";

import { AppComponent }   from "./app.component";
import { AdminModule } from "./admin";
import { HomeModule } from "./home";
import { VotingModule } from "./voting";
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
        MaterializeModule,
        NavbarModule,
        RouterModule,
        RouterModule.forRoot([]),
        VotingModule
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
