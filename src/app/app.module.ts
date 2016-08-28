import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MdCardModule } from "@angular2-material/card";
import { MdButtonModule } from "@angular2-material/button";
import { AppComponent }   from "./app.component";
import { HomeModule } from "./home";

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    HomeModule,
    MdCardModule,
    MdButtonModule,
    RouterModule,
    RouterModule.forRoot([])
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
