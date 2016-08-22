import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent }   from "./app.component";
import { AppRouting } from "./app.routes";
import { HomeModule } from "./home";

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    AppRouting,
    BrowserModule,
    HomeModule,
    RouterModule
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
