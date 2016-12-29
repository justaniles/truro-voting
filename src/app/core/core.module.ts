import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirebaseService } from "./firebase";
import { TitleBarService } from "./title-bar";
import { TitleBarComponent } from "./title-bar/title-bar.component";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ TitleBarComponent ],
    exports: [ TitleBarComponent ],
    providers: [ FirebaseService, TitleBarService ]
})
export class CoreModule {

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
