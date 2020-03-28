import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const COMPONENTS = [];

@NgModule({
  imports: [CommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
