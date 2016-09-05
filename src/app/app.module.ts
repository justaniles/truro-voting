import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MdCardModule } from "@angular2-material/card";
import { MdButtonModule } from "@angular2-material/button";
import { AppComponent }   from "./app.component";
import { HomeModule } from "./home";
import { NavbarModule } from "./navbar";

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
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
