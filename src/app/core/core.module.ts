import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf
}       from '@angular/core';
import { CommonModule }      from '@angular/common';

import { CandidateService } from "./candidate";


@NgModule({
  imports: [ CommonModule ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [ CandidateService ]
    };
  }
}
